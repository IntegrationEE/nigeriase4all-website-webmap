import React, { useRef, useState} from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import InfoBox from './InfoBox/InfoBox';
import ShowLayer from './ShowLayer/ShowLayer';
import Filter from './Filter/Filter';
import Search from './Search/Search';
import Mobile from './Mobile/Mobile';
import CloseButton from '../Shared/CloseButton/CloseButton';
import Questions from './Questions/Questions';
import ZeroClusters from './Filter/ZeroClusters';

import styles from "./Sidebar.module.css";

import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import { getSelectedMap, searchParamsObj } from '../../utils/dataHandler';
import * as CONSTS from '../../utils/consts';

function Sidebar(props) {
    const { map, mapLoaded } = props;
    const dropdownRef = useRef(null);
    const [toggleView, setToggleView] = useDetectOutsideClick(dropdownRef, false);
    const [clusterCount, setClusterCount] = useState(null);
    const pathname = useLocation().pathname;
    const [searchParams] = useSearchParams();

    return (
        <aside className={styles.sidebar}>     
            <div className={styles.mobile}>
                <Mobile setToggleView={setToggleView} toggleView={toggleView}/>
            </div>
            <div className={`${(toggleView)&&styles.sidebarContainer} ${styles.height}`} ref={dropdownRef} style={{display: "flex", position: "relative", flexDirection: "column", justifyContent: "space-between"}} >
                {toggleView&&<div className={styles.mobile} style={{position: "absolute", right: "15px", top:"15px", zIndex:'3000'}}><CloseButton onClick={()=>setToggleView(false)} color="black" alignRight={true}/></div>}
                <div className={`${styles.content} ${(!toggleView)&&styles.hide}`}>
                    <InfoBox 
                        toggleView={toggleView}
                    />
                    <Search 
                        toggleView={toggleView} 
                        map={map}
                    />
                    <Filter 
                        map={map} 
                        toggleView={toggleView}
                        clusterCount={clusterCount}
                        setClusterCount={setClusterCount}
                    />
                    <ShowLayer toggleView={toggleView} map={map} mapLoaded={mapLoaded}/>
                </div>
                <Questions toggleView={toggleView}/>
            </div>
            {clusterCount===0&&mapLoaded&&searchParamsObj(searchParams).state&&(getSelectedMap(pathname).NAME===CONSTS.PAGE_NAMES.INTERCONNECTED||getSelectedMap(pathname).NAME===CONSTS.PAGE_NAMES.OFFGRID)&&
            <ZeroClusters/>}
        </aside>
    )
}

export default Sidebar
