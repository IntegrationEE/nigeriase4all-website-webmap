import React, {useCallback, useState} from 'react';

import ControlBox from '../../../Shared/ControlBox/ControlBox';
import styles from '../Controls.module.css'

import IconCompass from '../../../Shared/Icons/IconCompass';

function BearingControl({map}) {
    const {button,base} = styles;
    const [bearing, setBearing] =useState(0);

    const changeBearing = useCallback((e)=>{
        setBearing(map.current.getBearing())
    },[map]);
    if(!map.current) {return null};
    map.current.on('rotate', changeBearing)

    return (
        <ControlBox>
            <button name='Realign to north and reset bearing' aria-label="Recenter map" onClick={()=>map.current.easeTo({bearing: 0, pitch: 0, duration: 1000})} className={`${button}  ${base}`}><div  style={{display: "flex", alignItems:"center", justifyContent: "center", transform: `rotate(${-bearing}deg)`}} ><IconCompass  color='#313131'/></div></button>
        </ControlBox>
    )
}

export default BearingControl
