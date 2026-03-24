import React from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import ControlBox from '../../Shared/ControlBox/ControlBox';
import HorizontalRule from '../../Shared/HorizontalRule/HorizontalRule';

import styles from './Filter.module.css';

import {searchParamsObj} from '../../../utils/dataHandler';
import * as CONSTS from '../../../utils/consts';
import * as PATHS from '../../../utils/paths';

function ZeroClusters() {
    const [searchParams] = useSearchParams();
    const pathname = useLocation().pathname;

    return (
        <div className={styles.overlay}>
            <ControlBox padding="10px" shadow={true}>
                    No clusters pass the selected filter criteria. 
                    <HorizontalRule/>
                    Try changing the filter criteria or visit one of the below webmaps for the same state, to view additional analysis:
                    <div className={styles.links}>
                    {CONSTS.PAGES.filter((page) => (page.PATH !== pathname)).map((page,key) => (
                        <WebmapLink 
                            key={CONSTS.PAGES.indexOf(page)} 
                            mapPathname={page.PATH} 
                            pageName={page.NAME}
                            path={page.PATH}
                            searchSlug={`?state=${searchParamsObj(searchParams).state}`}/>))}
                    </div>
            </ControlBox>
        </div>
    )
}

export default ZeroClusters

const WebmapLink = ({mapPathname, searchSlug, pageName, path}) => 
    <span 
    className={`${styles.link} ${path===PATHS.OFFGRID_MG_PATH?styles.minigrid:undefined} ${path===PATHS.INTERCONNECTED_MG_PATH?styles.minigrid:undefined} ${path===PATHS.POWER_SECTOR_PATH?styles.power:undefined} ${path===PATHS.SOLAR_HOME_SYSTEM_PATH?styles.shs:undefined}`} >
        <Link to={{pathname: mapPathname, search: searchSlug}}>{pageName}</Link>
    </span>;