import React,{useState} from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';


import IconArrowDown from '../../Shared/Icons/IconArrowDown';
import Dropdown from '../../Shared/Dropdown/Dropdown';
import IconInfo from '../../Shared/Icons/IconInfo';

import styles from "./InfoBox.module.css";
import sidebarStyles from "../Sidebar.module.css";

import * as CONSTS from '../../../utils/consts';
import * as PATHS from '../../../utils/paths';

import {searchParamsObj, getSelectedMap} from '../../../utils/dataHandler';

function InfoBox(props) {
    const {toggleView} = props;
    const [searchParams] = useSearchParams();
    const state = searchParamsObj(searchParams).state;
    const pathname = useLocation().pathname;
    const [stateSlug, setStateSlug] = useState('');
    const selectedMap = getSelectedMap(pathname);
    const [showAttribution, setShowAttribution] = useState(false);

    const itemsArray=[{path: PATHS.INTERCONNECTED_MG_PATH, text: CONSTS.SELECTED_INTERCONNECTED.NAME}, {path: PATHS.OFFGRID_MG_PATH, text: CONSTS.SELECTED_OFFGRID.NAME}]

    const SelectedValue=()=>{
        return(
            <div className={styles.click} style={{color: `${selectedMap.COLOR}`}}>
                {selectedMap?.NAME}
                <div className={styles.arrow}>
                    <IconArrowDown color={CONSTS.COLOR.miniGrids} angle="0deg"/>
                </div>
            </div>
        )
    }

    return (
        <div className={`${!(toggleView==="filter")&&sidebarStyles.showmobile}`}>
            {!selectedMap.DROPDOWN&&<>
                <h4 className={styles.font} style={{color: `${selectedMap.COLOR}`}}>{selectedMap.NAME}</h4>
                <button className={`${styles.attributionButton} ${styles.hide}`} name='Attribution Button' onClick={(e)=> e.preventDefault()} onMouseEnter={() => setShowAttribution(true)} onMouseLeave={() => {setShowAttribution(false)}}><IconInfo color={CONSTS.COLOR.brandBlack} width={"9"}/></button>
            </>}
            {selectedMap.DROPDOWN&&<>
                <Dropdown buttonAction={() => setStateSlug(state?`?state=${state}`:"")} itemsArray={itemsArray.filter(el=>(el.text!==selectedMap.NAME))} selectedValue={<SelectedValue/>} searchSlug={stateSlug}/>
                <button className={`${styles.attributionButton} ${styles.hide}`} name='Attribution Button' onClick={(e)=> e.preventDefault()} onMouseEnter={() => setShowAttribution(true)} onMouseLeave={() => {setShowAttribution(false)}}><IconInfo color={CONSTS.COLOR.brandBlack} width={"9"}/></button>
            </>}
            <p className={`${styles.description} ${showAttribution?styles.show:styles.block}`}>{selectedMap.DESC}</p>
        </div>
    )
}

export default InfoBox;