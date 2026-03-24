import React from 'react';

import styles from './Controls.module.css';

import Legend from './BottomLeft/Legend';

function ControlsBottomLeft(props) {
  const {attributeVisible, displayLegend,mapLoaded} = props;
  return (
    <div className={`${styles.containerAll} ${styles.containerBottomLeft} ${!displayLegend&&styles.hideOnMobile}`} style={{visibility: `${attributeVisible==='true'?'hidden':'visible'}`}}>
      <Legend mapLoaded={mapLoaded}/>
    </div>
  )
}

export default ControlsBottomLeft