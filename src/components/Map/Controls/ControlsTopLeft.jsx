import React from 'react';

import styles from './Controls.module.css';

import ZoomControl from './TopLeft/ZoomControl';
import BaselayerControl from './TopLeft/BaselayerControl';

function ControlsTopLeft({map}) {
    
    return (
        <div className={`${styles.containerAll} ${styles.containerTopLeft}`}>
            <ZoomControl map={map}/>
            <BaselayerControl map={map}/>
        </div>
    )
}

export default ControlsTopLeft
