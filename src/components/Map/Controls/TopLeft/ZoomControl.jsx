import React from 'react';

import styles from '../Controls.module.css'

import IconPlus from '../../../Shared/Icons/IconPlus';
import IconMinus from '../../../Shared/Icons/IconMinus';
import ControlBox from '../../../Shared/ControlBox/ControlBox';

function ZoomControl({map}) {
    const {button,plus,minus} = styles;

    return (
        <ControlBox style={{flexDirection: "column"}}>
            <button name='Zoom Control Button' aria-label="Zoom in" onClick={()=>map.current.zoomIn({duration: 1000})} className={`${button} ${plus}`}><IconPlus color='#313131'/></button>
            <button name='Zoom Control Button'  aria-label="Zoom out" onClick={()=>map.current.zoomOut({duration: 1000})} className={`${button} ${minus}`}><IconMinus color='#313131'/></button>
        </ControlBox>
    )
}

export default ZoomControl
