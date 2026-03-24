import React, {useState} from 'react';

import styles from './Controls.module.css';

import IconCross from '../../Shared/Icons/IconCross';

function CollapsingControl(props) {
    const [display, setDisplay] = useState('');

    return (
        <div className={`${styles.controlBox} ${styles.shadow} ${styles.discoLegend}`} style={{display: `${display}`}}>
            <button name='Collapsing Control Button' className={`${styles.buttonClear}`} onClick={()=>setDisplay('none')}><IconCross width="12" color="#313131"/></button>
            {props.children}
        </div>
    )
}

export default CollapsingControl