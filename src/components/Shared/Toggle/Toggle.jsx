import React from 'react';
import { useLocation } from 'react-router-dom';

import {getBackgroundColor} from '../../../utils/dataHandler';

import styles from "./Toggle.module.css";

function Toggle(props) {
    const {layerId, toggleLayer, toggle, active=true} = props;
    const pathname = useLocation().pathname;

    return (
        <div 
            className={`${styles.togglelabel} ${!active?styles.toggleinactive:undefined}`}
            style={{ background: toggle&&getBackgroundColor(pathname)}}
        >
            <input 
                type="checkbox"
                id={layerId}
                name={layerId}
                onChange={toggleLayer}
                checked={toggle}
                className={styles.togglecheckbox}
            />
            <span
                className={`${toggle&&styles.togglechecked} ${styles.togglebutton} ${!active?styles.togglebuttoninactive:undefined}`}
            />
        </div>
    )
}

export default Toggle;
