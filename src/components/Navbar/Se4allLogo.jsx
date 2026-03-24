import React from 'react';

import styles from "./Se4allLogo.module.css";
import {WEBSITE_BASE} from '../../utils/consts';

import se4allLogo from "../../assets/images/logo-5-blitz.png";

function Se4allLogo() {
    return (
        <a href={`${WEBSITE_BASE}`} target='_self' className={styles.container} title='Nigeria SE4ALL Website URL'>
            <img src={se4allLogo} alt="Nigeria SE4ALL Logo" height="40px" width='40px'/>
            <div className={styles.font}>NIGERIA SE4ALL</div>
        </a>
    )
}

export default Se4allLogo
