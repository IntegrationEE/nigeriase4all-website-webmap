import React from 'react';

import styles from './CloseButton.module.css';

import IconCross from '../Icons/IconCross';

function CloseButton(props) {
    const {onClick, width="12px", buttonName, color, alignRight=false}=props;
  return (
    <div className={`${alignRight&&styles.alignRight}`}>
      <button className={styles.cross} name={buttonName} onClick={onClick}><IconCross width={width} color={color}/></button>
    </div>
  )
}

export default CloseButton