import React, {useState} from 'react';
import { useSearchParams } from 'react-router-dom';

import IconWarning from '../../Shared/Icons/IconWarning';

import { searchParamsObj, stateNameModifier } from '../../../utils/dataHandler';
import { COLOR, ADM1BBOX } from '../../../utils/consts';

import styles from './Filter.module.css';

function WarningIfModelledGrid() {
    const [searchParams] = useSearchParams();
    const [showInfo, setShowInfo] = useState(false);
    const selectedState = searchParamsObj(searchParams).state;
    const statesWithModelledGrid = ['yobe', 'borno', 'adamawa', 'gombe', 'taraba', 'federal-capital-territory', 'akwa-ibom', 'rivers', 'imo', 'delta', 'ondo', 'lagos'];
    const stateUsesModelledGrid = statesWithModelledGrid.indexOf(selectedState);

    if(stateUsesModelledGrid < 0){
        return null;
    }

    return (
        <>
            <button style={{height: "100%", padding: "0 5px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderStyle: "none"}} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => {setShowInfo(false)}}>
                <IconWarning width="17" color={COLOR.colorSecondaryRedLight}/>
            </button>
            {showInfo&&<div className={styles.warning}>{`The grid data use for ${stateNameModifier(ADM1BBOX).find(states => states.nameSlug === selectedState).name} is modelled grid data - the accuracy may be limited.  Follow the social media channels where updates on ground-truthed grid data will be announced.`}</div>}
        </>
    )
}

export default WarningIfModelledGrid