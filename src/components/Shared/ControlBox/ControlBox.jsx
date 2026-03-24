import React from 'react';

import styles from './ControlBox.module.css';

function ControlBox(props) {
    const {children, shadow=false, padding= "0px", fitContent=true} = props;
  return (
    <div className={`${styles.base} ${shadow&&styles.shadow} ${fitContent&&styles.fit}`} style={{padding: padding}}>
        {children}
    </div>
  )
}
export default ControlBox