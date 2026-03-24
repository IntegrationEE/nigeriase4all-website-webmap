import React, {useMemo, useEffect, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import pointsWithinPolygon from '@turf/points-within-polygon';

import styles from '../Controls.module.css';

import CloseButton from '../../../Shared/CloseButton/CloseButton';
import ControlBox from '../../../Shared/ControlBox/ControlBox';
import HorizontalRule from '../../../Shared/HorizontalRule/HorizontalRule';

import {searchParamsObj} from '../../../../utils/dataHandler';
import {getClusterShs} from '../../../../services/clusterWfs.service.js';

import * as CONSTS from '../../../../utils/consts';

function PopupMarketData(props) {
    const {selectedMarket, setSelectedMarket} = props;

    const [searchParams] = useSearchParams();
    const searchParamsMemo = useMemo(()=> {return {...searchParamsObj(searchParams)}},[searchParams]);
    const selectedState = searchParamsMemo.state;
    const gridDistMin = searchParamsMemo.grid_dist_min;
    const gridDistMax = searchParamsMemo.grid_dist_max;
    const searchRadius = searchParamsMemo.market_dist;
    const mP = selectedMarket?.properties;

    const [stateData, setStateData] = useState([]);
    const [clustersWithinMarket, setClustersWithinMarket] = useState(null);

    useEffect(()=>{
        if(!selectedState){return};
        getClusterShs(selectedState).then(res => {setStateData(res)});
    },[selectedState]);

    useEffect(()=>{
        const totalClusters = stateData.length;
        if(totalClusters===0||!selectedMarket||!gridDistMax||!gridDistMin) {return};
        const gridMax = (cluster) => (Number(gridDistMax)===Number(CONSTS.SELECTED_SHS.FILTER.GRID_DIST.MAX)?true:cluster.grid_dist_km < Number(gridDistMax));
        const gridMin = (cluster) => (cluster.grid_dist_km >= Number(gridDistMin));
        const {features, ...rest} = stateData;
        const filteredData =  {...rest, features: stateData.features.filter(el => (gridMax(el.properties)&&gridMin(el.properties)))};        
        setClustersWithinMarket(pointsWithinPolygon(filteredData,selectedMarket));
    }, [gridDistMax, gridDistMin, selectedMarket, setClustersWithinMarket, stateData])

    return (
        <>
            {(selectedMarket&&clustersWithinMarket)&&<ControlBox shadow={true} padding="10px">
                <CloseButton alignRight={true} buttonName="Close Market Analysis" onClick={()=>setSelectedMarket(null)} color={CONSTS.COLOR.brandGrayDark}/> 
                <b style={{paddingBottom: "10px"}}>Market Analysis</b>
                    <table className={`${styles.marketInfoTable}`}>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{mP.market_nam}</td>
                            </tr>
                            <tr>
                                <th>Distance radius</th>
                                <td>{`${searchRadius} km`}</td>
                            </tr>
                        </tbody>
                    </table>
                    <b style={{paddingBottom: "10px"}}>Customer potential by settlement size:</b>
                    <table className={`${styles.marketInfoTable}`}>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>Settlement size</th>
                                <th>Sum of all buildings</th>
                            </tr>
                            <tr>
                                <td style={{padding: "5px", display: "flex", alignContent: "center", justifyContent: "center"}}><Circle size={2}/></td>
                                <td>Small</td>
                                <td>{clustersWithinMarket?.features.map((el)=> el.properties.number_of_buildings).filter(el => el < 500).reduce((a,b) => a + b, 0)}</td>
                            </tr>
                            {/* <tr>
                                <td><Circle size={6}/></td>
                                <td>Medium</td>
                                <td>{clustersWithinMarket?.features.map((el)=> el.properties.number_of_buildings).filter(el => (el < 1000)&&(el >= 500)).reduce((a,b) => a + b, 0)}</td>
                            </tr> */}
                            <tr>
                                <td style={{padding: "5px", display: "flex", alignContent: "center", justifyContent: "center"}}><Circle size={10}/></td>
                                <td>Large</td>
                                <td>{clustersWithinMarket?.features.map((el)=> el.properties.number_of_buildings).filter(el => el >= 500).reduce((a,b) => a + b, 0)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <HorizontalRule/>
                    <p style={{maxWidth: "370px"}}>Small settlements (less than 500 buildings) are recommended for solar home systems because electrification by a grid might be uneconomic.</p>
                    <p style={{maxWidth: "300px"}}>Market names and data are from <a style={{textDecoration: "underline"}} href="https://grid3.gov.ng/dataset/national-markets/resources" rel="noreferrer" target="_blank">this source</a>.</p>
            </ControlBox>}
        </>
            
    )
}

export default PopupMarketData

const Circle = ({color=CONSTS.COLOR.clusterYellow, size=10, halo=false})=><div ><div className={`${halo?styles.circleHalo:styles.circleLegend}`} style={{backgroundColor:`${color}`, height: `${size}px`, width: `${size}px`, minWidth: `${size}px`}}></div></div>
