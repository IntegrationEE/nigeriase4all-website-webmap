import React from 'react';

import styles from './Loading.module.css';

import se4allLogo from '../../assets/images/logo-5-blitz.png';

function Loading({dataLoaded, text = "Loading map data"}) {
  return (
    <div className={`${styles.container} ${dataLoaded&&styles.display}`}>
        <img className={styles.pulsing} src={se4allLogo} alt="Nigeria SE4ALL Logo" height="35px" width='35px'/>
        <div className={styles.circle}></div>
        <div className={styles.text}>{text}</div>
    </div>
  )
}

export default Loading