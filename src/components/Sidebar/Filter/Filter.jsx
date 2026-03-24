import React from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import IconFilter from '../../Shared/Icons/IconFilter';
import FilterInterconnected from './FilterInterconnected';
import FilterOffgrid from './FilterOffgrid';
import FilterPowerSector from './FilterPowerSector';
import FilterShs from './FilterShs';
import Headline from '../../Shared/Headline';

import styles from '../Sidebar.module.css';
import stylesFilter from './Filter.module.css';
import * as CONSTS from '../../../utils/consts';
import * as PATHS from '../../../utils/paths';

import {searchParamsObj, getSelectedMap} from '../../../utils/dataHandler';
import DownloadData from '../../Shared/DownloadData/DownloadData';
// import * as CONSTS from '../../../utils/consts';

function Filter(props) {
    const {toggleView, clusterCount, setClusterCount} = props;
    const [searchParams] = useSearchParams();
    const pathname = useLocation().pathname;
    const selectedMap = getSelectedMap(pathname);

    return (
        <div className={`${!(toggleView==="filter")&&styles.showmobile} ${styles.layerControl}`}>
            <div className={stylesFilter.title}>
                <Headline icon={<IconFilter width="17px"/>} text="Filter clusters"/>
                {(pathname===PATHS.INTERCONNECTED_MG_PATH||pathname===PATHS.OFFGRID_MG_PATH)&&
                <div className={stylesFilter.count}>
                    {searchParamsObj(searchParams).state?
                    <div>Number of clusters: <span>{clusterCount}</span></div>:
                    <i>Select a state</i>}
                </div>} 
            </div>
            <div className={styles.interraction}>
                {(selectedMap.NAME===CONSTS.PAGE_NAMES.INTERCONNECTED)&&
                    <FilterInterconnected setClusterCount={setClusterCount}/>}
                {(selectedMap.NAME===CONSTS.PAGE_NAMES.OFFGRID)&&
                    <FilterOffgrid setClusterCount={setClusterCount}/>}
                {(selectedMap.NAME===CONSTS.PAGE_NAMES.POWER_SECTOR)&&
                    <FilterPowerSector/>}
                {(selectedMap.NAME===CONSTS.PAGE_NAMES.SHS)&&
                    <FilterShs/>}
            </div>
            {(pathname===PATHS.INTERCONNECTED_MG_PATH||pathname===PATHS.OFFGRID_MG_PATH)&&
            <div className={styles.showmobile}>
                <DownloadData />
            </div>}
        </div>
    )
}

export default Filter
