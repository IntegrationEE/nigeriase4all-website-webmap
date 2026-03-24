import React, {lazy, Suspense} from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import styles from './Controls.module.css';

// import PopupClusterData from './BottomRight/PopupClusterData';
import PowerSectorAnalysis from './BottomRight/PowerSectorAnalysis';
import DistributionCompany from './BottomRight/DistributionCompany';
import PopupMarketData from './BottomRight/PopupMarketData';
import NightLight from './BottomRight/NightLight';

import {searchParamsObj} from './../../../utils/dataHandler';
import * as PATHS from '../../../utils/paths';

const PopupClusterData = lazy(()=> import('./BottomRight/PopupClusterData'));

function ControlsBottomRight(props) {
    const {map, selectedCluster, setSelectedCluster, selectedMarket, setSelectedMarket, attributeVisible, displayLegend} = props;
    const [searchParams] = useSearchParams();
    const selectedState = searchParamsObj(searchParams).state;
    const pathname=useLocation().pathname;
    return (
        <div className={`${styles.containerAll} ${styles.containerBottomRight}`} style={{visibility: `${(attributeVisible==='true')||displayLegend?'hidden':'visible'}`}}>
            <Suspense fallback={null}>
                {(pathname===PATHS.INTERCONNECTED_MG_PATH||pathname===PATHS.OFFGRID_MG_PATH)&&selectedState&&
                <PopupClusterData map={map} selectedCluster={selectedCluster} setSelectedCluster={setSelectedCluster}/>}
            </Suspense>
            {pathname===PATHS.POWER_SECTOR_PATH&&selectedState&&<PowerSectorAnalysis/>}
            {pathname===PATHS.POWER_SECTOR_PATH&&!selectedState&&<DistributionCompany/>}
            {pathname===PATHS.INTERCONNECTED_MG_PATH&&selectedState&&<NightLight/>}

            <Suspense fallback={null}>
                {pathname===PATHS.SOLAR_HOME_SYSTEM_PATH&&selectedState&&
                <PopupMarketData selectedMarket={selectedMarket} setSelectedMarket={setSelectedMarket}/>}
            </Suspense>
        </div>
    )
}

export default ControlsBottomRight