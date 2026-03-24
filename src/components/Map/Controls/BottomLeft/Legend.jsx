import React, { useEffect, useState } from 'react';
import {useLocation, useSearchParams} from 'react-router-dom';

import { COLOR } from '../../../../utils/consts';
import * as PATHS from '../../../../utils/paths';
import {searchParamsObj} from '../../../../utils/dataHandler';

import styles from './Legend.module.css';
import { getClusterOffgridSurvey } from '../../../../services/clusterWfs.service';
import ControlBox from '../../../Shared/ControlBox/ControlBox';


const Legend = () =>{
    const [searchParams] = useSearchParams();
    const pathname = useLocation().pathname;
    const selectedState = searchParamsObj(searchParams).state;
    const [stateIsSurveyed, setStateIsSurveyed] = useState(false);
    
    useEffect(()=>{
        setStateIsSurveyed(true);
    },[selectedState])
   
    const {legend} = styles;

    return(
        <ControlBox>
            <div className = {`${styles.controlBoxContent} ${legend}`}>
                {(pathname===PATHS.OFFGRID_MG_PATH||pathname===PATHS.INTERCONNECTED_MG_PATH)&&<>
                    <>
                    {/* Minigrids legend - NATIONAL */}
                        <MvGrid/>
                        <MvModelledGrid/>
                        <Minigrids/>
                    </>
                    {(selectedState)&&(pathname===PATHS.OFFGRID_MG_PATH)&&<>
                        {/* Minigrids legend - STATE additional */}
                        <ClusterYellow/>
                    </>}
                    {(selectedState)&&(pathname===PATHS.INTERCONNECTED_MG_PATH)&&<>
                        {/* Minigrids legend - STATE additional */}
                        <ClusterRed/>
                    </>}
                    {(selectedState && stateIsSurveyed)&&(pathname===PATHS.OFFGRID_MG_PATH)&&<>
                        {/* Minigrids legend - STATE additional */}
                        <ClusterBlue text={<><b>Surveyed</b> off-grid cluster</>}/>
                        <ClusterBlueHalo text={<><b>Surveyed</b> cluster without functional grid</>}/>
                        <ClusterRedHalo text={<><b>Surveyed</b> cluster with functional grid</>}/>
                    </>}
                </>}
                {(pathname===PATHS.POWER_SECTOR_PATH)&&
                    <>
                        {/* Power sector legend - NATIONAL */}
                    
                        <HvGrid/>
                        <MvGrid/>
                        <MvModelledGrid/>
                        <Minigrids/>
                        <PowerPlantGas/>
                    
                        <PowerPlantHydro/>
                    
                        {(selectedState)&&<>
                            {/* Power sector legend - STATE additional*/}
                            <ClusterYellow text="Clusters outside buffer"/>
                            <ClusterBlue text="Clusters within buffer"/>
                        </>}

                    </>}
                {(pathname===PATHS.SOLAR_HOME_SYSTEM_PATH)&&<>
                    <>
                        {/* SHS legend - NATIONAL */}
                        <MvGrid/>
                        <MvModelledGrid/>
                        <Minigrids/>
                    </>
                    {(selectedState)&&<>
                        {/* SHS legend - STATE additional */}
                        <ClusterOrange/>
                        <ClusterYellow/>
                    </>}
                </>}
            </div>
        </ControlBox>
    )
}

export default Legend;

const Line = ({color, thickness=2, dash=false})=><div><div className={`${dash?styles.dash:styles.line}`} style={{backgroundColor:`${color}`, height: `${thickness}px`}}></div></div>
const Circle = ({color, size=10, halo=false})=><div ><div className={`${halo?styles.circleHalo:styles.circleLegend}`} style={{backgroundColor:`${color}`, height: `${size}px`, width: `${size}px`, minWidth: `${size}px`}}></div></div>

const MvGrid = () => <><div><Line color={COLOR.mvGrid}/> </div> <p>MV grid</p></>
const MvModelledGrid = () => <><div><Line color={COLOR.mvGrid} dash={true}/><Line color={COLOR.mvGrid} dash={true}/><Line color={COLOR.mvGrid} dash={true}/><Line color={COLOR.mvGrid} dash={true}/></div> <p>MV modelled grid</p></>
const HvGrid = () => <><div> <Line color={COLOR.hvGrid} thickness={4}/></div> <p>HV grid</p> </>
const Minigrids = () =><> <div> <Circle color={COLOR.miniGrids} size={10}/></div> <p>Mini-grids</p> </>
const ClusterYellow = ({text = "Clusters off-grid"}) => <><div><Circle color={COLOR.clusterYellow} /></div>  <p>{text}</p></>
const ClusterRed = ({text = "Clusters on-grid"}) => <> <div><Circle color={COLOR.mvGrid} /></div> <p>{text}</p> </>
const ClusterOrange = ({text = "Markets"}) => <><div><Circle color={COLOR.solarHomeSystems} /></div> <p>{text}</p> </>
const ClusterBlue = ({text = "Clusters on-grid"}) => <><div><Circle color={COLOR.clusterBlue} /></div> <p>{text}</p> </>
const ClusterRedHalo = ({text = "Clusters on-grid"}) => <><div><Circle color={COLOR.mvGrid} halo={true}/></div> <p>{text}</p> </>
const ClusterBlueHalo = ({text = "Clusters on-grid"}) => <><div><Circle color={COLOR.clusterBlue} halo={true}/> </div><p>{text}</p></>

const PowerPlantHydro = () => <><div> <Circle color={COLOR.hydroBlue} size={10}/> </div><p>Hydro Power Plant</p></> 
const PowerPlantGas = () => <><div> <Circle color={COLOR.brandBlack} size={10}/>  </div><p>Gas/Steam Power plant</p></>