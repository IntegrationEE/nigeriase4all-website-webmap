import React from 'react';

import styles from './Controls.module.css';

import BearingControl from './TopRight/BearingControl';

function ControlsTopRight({map}) {
    
    return (
        <div className={`${styles.containerAll} ${styles.containerTopRight}`}>
            <BearingControl map={map}/>
        </div>
    )
}

export default ControlsTopRight
