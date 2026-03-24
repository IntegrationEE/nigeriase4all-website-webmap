import React, { useState ,useMemo } from "react";
import DownloadIcon from "../Icons/DownloadIcon";
import styles from './DownloadData.module.css';
import * as CONSTS from "../../../utils/consts";
import * as PATHS from "../../../utils/paths";

import {searchParamsObj, getBackgroundColor, toSlug} from '../../../utils/dataHandler';
import { useSearchParams, useLocation } from 'react-router-dom';

const DownloadData = ()=>{

    const [downloadStatus, setDownloadStatus] = useState(null);
    const [alertMessage, setAlertMessage] = useState('')
    const [searchParams] = useSearchParams();
    const searchParamsMemo = useMemo(()=> {return {...searchParamsObj(searchParams)}},[searchParams]);
    const [buttonIsClicked,setbuttonIsClicked] = useState(false);
    const [display,setDisplay] = useState('none');
    const pathname = useLocation().pathname;
    const {state,grid_dist_min,grid_dist_max,buildings_min,buildings_max} = searchParamsMemo;
    
    const handleClick = (format) =>{
        const stateSlugToName = CONSTS.STATE_NAMES.reduce((acc, curr) => {
            acc[toSlug(curr)]=curr;
            return acc
          },{})
        const isInterconnected = (pathname===PATHS.INTERCONNECTED_MG_PATH);
        const isOffgrid = (pathname===PATHS.OFFGRID_MG_PATH);
        const queryLayer = isInterconnected?'cluster_all_simple_new':(isOffgrid?'cluster_offgrid_simple':console.error("No valid download path"));
        const queryState = `state_name='${stateSlugToName[state].replace(/ +/g, '%20')}'`;
        // const queryGridMin = `%20AND%20grid_dist_km>=${grid_dist_min}`;
        const queryGridMin = (isOffgrid&&Number(grid_dist_max)===CONSTS.SELECTED_OFFGRID.FILTER.GRID_DIST.MAX)?`%20AND%20(grid_dist_km>=${grid_dist_min} OR grid_dist_km IS NULL)`:`%20AND%20grid_dist_km>=${grid_dist_min}`;
        const queryGridMax = (isOffgrid&&Number(grid_dist_max)===CONSTS.SELECTED_OFFGRID.FILTER.GRID_DIST.MAX)?'':`%20AND%20grid_dist_km<${grid_dist_max}`;
        const queryGrid = `${queryGridMin}${queryGridMax}`;
        const queryBuildingMin = `%20AND%20${isOffgrid?"building_count":"number_of_buildings"}>=${buildings_min}`;
        const queryBuildingMax = (Number(buildings_max)===(isOffgrid?CONSTS.SELECTED_OFFGRID.FILTER.BUILDING.MAX:CONSTS.SELECTED_INTERCONNECTED.FILTER.BUILDING.MAX))?'':`%20AND%20${isOffgrid?"building_count":"number_of_buildings"}<${buildings_max}`;
        const queryBuilding = `${queryBuildingMin}${queryBuildingMax}`;
        let downloadUrl;

        if (format === "csv"){
            downloadUrl = `${CONSTS.SE4ALL_WFS.start}${queryLayer}&CQL_FILTER=${queryState}${queryGrid}${queryBuilding}&outputFormat=CSV&srsName=EPSG:4326&format_options=filename:${queryState}.csv`;
        }else if(format === "kml"){
            downloadUrl = `${CONSTS.SE4ALL_WFS.start}${queryLayer}&CQL_FILTER=${queryState}${queryGrid}${queryBuilding}&outputFormat=application/vnd.google-earth.kml xml&srsName=EPSG:4326&format_options=filename:${queryState}.kml`;
        }
        setbuttonIsClicked(true);
       
        try{
            const link = document.createElement('a');
            link.href=downloadUrl;
            link.rel='noopener noreferer';
            link.title='Minigrid Data Download URL'
            link.click();
            setDownloadStatus('success');
            setAlertMessage('Minigrid Download Completed');

            setTimeout(()=>{
                setDisplay('flex')
            },1000);
    
            setTimeout(()=>{
                setDisplay('none')
            },3000);
    
        }catch(error){
            setDownloadStatus('failure');
            setAlertMessage('Minigrid Download Failed')
        }
        return;
    }

    const handleCancelButtonClick = () => setDisplay('none');

    return(
        <>
            {state&&
            <div className={styles.downloadContainer}>
                <div className={styles.download} 
                    style={{ color: getBackgroundColor(pathname)}}
                    title='Download clusters'>
                    <DownloadIcon width={'15px'} color={getBackgroundColor(pathname)} /> <span>Download cluster selection</span>
                </div>
                <div   style={{ color: getBackgroundColor(pathname)}} className={styles.downloadOptions}>
                    <span  title='Download clusters as CSV' onClick={()=>handleClick('csv')}>CSV</span> | <span onClick={()=>handleClick('kml')} title='Download clusters as KML'>KML</span>
                </div>
            </div>
            }
            
            {buttonIsClicked && <div className={styles.alertContainer} style={{ backgroundColor:`${ downloadStatus === 'success'? CONSTS.COLOR.miniGrids : CONSTS.COLOR.brandGrayDark}`, display:`${display}`}} title={`Alert ${downloadStatus}`}>
                   {alertMessage}<span onClick={handleCancelButtonClick}>&times;</span>
            </div>}
        </>)
}

export default DownloadData;