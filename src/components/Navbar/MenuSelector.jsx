import React from 'react';
import styles from'./MenuSelector.module.css';

function MenuSelector(props) {
    const { text, color, circle, externalPath} = props;
    const {circleStyle,font} = styles;

    return (
            <a href={externalPath} className={font} target='_self' title={text}>
                    {circle&&<div style={{backgroundColor: color}} className={circleStyle}></div>}
                    <span style={{color:color, padding: "0 0 0 10px"}}>{text}</span>
            </a> 
    )
}

export default MenuSelector
