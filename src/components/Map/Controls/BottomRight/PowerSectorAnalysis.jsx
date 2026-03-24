import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from './PowerSectorAnalysis.module.css';
import stylesControl from '../Controls.module.css';

import ControlBox from '../../../Shared/ControlBox/ControlBox';
import CloseButton from '../../../Shared/CloseButton/CloseButton';
import IconMinus from "../../../Shared/Icons/IconMinus";
import HorizontalRule from '../../../Shared/HorizontalRule/HorizontalRule';
import IconMarker from '../../../Shared/Icons/IconMarker';
import IconBuilding from '../../../Shared/Icons/IconBuilding';

import {searchParamsObj} from '../../../../utils/dataHandler';
import {getClusterPowerSector} from '../../../../services/clusterWfs.service.js';
import * as CONSTS from '../../../../utils/consts';

const PowerSectorAnalysis = () => {
    const [searchParams] = useSearchParams();
    const state = searchParamsObj(searchParams).state;
    const {slider, sliderChild} = styles;
    // const {analysisResults, slider, sliderChild} = styles;
    const [display,setDisplay] = useState(true);
    const searchParamsMemo = useMemo(()=> {return {...searchParamsObj(searchParams)}},[searchParams]);
    const selectedState = searchParamsMemo.state;
    const gridBuffer= searchParamsMemo.grid_buffer;
    // const pathname = useLocation().pathname;
    const [percInBuffer, setPercInBuffer] = useState(0);
    const [percBuildingsInBuffer, setPercBuildingsInBuffer] = useState(0);
    const [stateData, setStateData] = useState([]);

    useEffect(()=>{
        if(!selectedState){return};
        getClusterPowerSector(selectedState).then(res => {setStateData(res.features)});
      },[selectedState]);
  
    useEffect(()=>{
        const totalClusters = stateData.length;
        const totalBuildings = stateData?.map((el)=> el.properties.number_of_buildings).reduce((a,b) => a + b, 0);
        if(totalClusters===0||!gridBuffer) {return};
        const gridMax = (cluster) => (Number(gridBuffer)===Number(CONSTS.SELECTED_POWER_SECTOR.FILTER.GRID_DIST.MAX)?true:(cluster.grid_dist_km <= Number(gridBuffer)));
        const filteredData = stateData.filter(el => (gridMax(el.properties)));
        const nullValues = stateData.filter(el => el.properties.grid_dist_km===null) // account for the data where the grid is >50km away, null values are given
        setPercInBuffer(Math.round(((filteredData.length - nullValues.length)/totalClusters)*100));
        setPercBuildingsInBuffer(Math.round(((filteredData?.map((el)=> el.properties.number_of_buildings).reduce((a,b) => a + b, 0) - nullValues?.map((el)=> el.properties.number_of_buildings).reduce((a,b) => a + b, 0))/totalBuildings)*100));
    }, [gridBuffer, stateData])

    return(
        <>
            {display&&<ControlBox shadow={true} padding="10px">
                    <CloseButton alignRight={true} buttonName="Close state analysis" onClick={()=>setDisplay(!display)} color={CONSTS.COLOR.brandGrayDark}/>
                    <b style={{paddingBottom: "10px"}}>Basic Analysis for {state.replaceAll("-", " ")[0].toUpperCase() + state.replaceAll("-", " ").substring(1)}</b>
                    <table className={`${stylesControl.clusterInfoTable}`}>
                        <tbody>
                            <tr>
                                <th></th>
                                <td style={{color: CONSTS.COLOR.clusterBlue}}><i>Within buffer area</i></td>
                                <td style={{color: CONSTS.COLOR.clusterYellow, textAlign: "right"}}><i>Outside of buffer area</i></td>
                            </tr>
                            <tr>
                                <th rowSpan="2"><div style={{display: "flex", flexDirection: "column", alignItems: "center"}}><IconMarker/><b>Clusters</b></div></th>
                                <td style={{color: CONSTS.COLOR.clusterBlue, paddingBottom: "0px"}}>{percInBuffer} %</td>
                                <td style={{textAlign: "right", color: CONSTS.COLOR.clusterYellow, paddingBottom: "0px"}}>{100-percInBuffer} %</td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <div className={slider} style={{backgroundColor: CONSTS.COLOR.clusterYellow}}>
                                        <div className={sliderChild} style={{width: `${percInBuffer}%`, backgroundColor: CONSTS.COLOR.clusterBlue}}></div>
                                    </div>  
                                </td>
                            </tr>
                            <tr>
                                <th rowSpan="2"><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", alignContent: "center"}}><IconBuilding/><b style={{textAlign: "center"}}>Buildings (rooftops)</b></div></th>
                                <td style={{color: CONSTS.COLOR.clusterBlue, paddingBottom: "0px"}}>{percBuildingsInBuffer} %</td>
                                <td style={{textAlign: "right", color: CONSTS.COLOR.clusterYellow, paddingBottom: "0px"}}>{100-percBuildingsInBuffer} %</td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <div className={slider} style={{backgroundColor: CONSTS.COLOR.clusterYellow}}>
                                        <div className={sliderChild} style={{width: `${percBuildingsInBuffer}%`, backgroundColor: CONSTS.COLOR.clusterBlue}}></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>                    
                    {/* <div className={analysisResults}>
                        <div><span>{percInBuffer} %</span> of clusters <span><i style={{color: CONSTS.COLOR.clusterBlue}}>are within buffer area</i></span></div>
                        <div><span>{100-percInBuffer} %</span> of clusters <span><i style={{color: CONSTS.COLOR.clusterYellow}}>are outside of buffer area</i></span></div>
                    </div>
                    <div className={slider} style={{backgroundColor: CONSTS.COLOR.clusterYellow}}>
                        <div className={sliderChild} style={{width: `${percInBuffer}%`, backgroundColor: CONSTS.COLOR.clusterBlue}}></div>
                    </div>
                    <div className={analysisResults}>
                        <div><span>{percBuildingsInBuffer} %</span> of buildings (rooftops) <span><i style={{color: CONSTS.COLOR.clusterBlue}}>are within buffer area</i></span></div>
                        <div><span>{100-percBuildingsInBuffer} %</span> of buildings (rooftops) <span><i style={{color: CONSTS.COLOR.clusterYellow}}>are outside of buffer area</i></span></div>
                    </div>
                    <div className={slider} style={{backgroundColor: CONSTS.COLOR.clusterYellow}}>
                        <div className={sliderChild} style={{width: `${percBuildingsInBuffer}%`, backgroundColor: CONSTS.COLOR.clusterBlue}}></div>
                    </div> */}
                    <HorizontalRule/>
                    <p style={{maxWidth: "350px"}}><i>Note: </i>Settlement clusters with a building / rooftop count of less than 100 are removed from this analysis.</p>
            </ControlBox>}
            {!display&&<ControlBox>
                <button className={stylesControl.buttonMinimize} onClick={()=>setDisplay(!display)} name="Open DISCO information" aria-label="Open DISCO information">
                    <IconMinus color={CONSTS.COLOR.brandBlack} />
                </button>
            </ControlBox>}
        </>
    )

}



export default PowerSectorAnalysis;