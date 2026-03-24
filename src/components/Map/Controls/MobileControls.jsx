import React from 'react';

import styles from './Controls.module.css';

import IconQuestion from '../../Shared/Icons/IconQuestion';
import ControlBox from '../../Shared/ControlBox/ControlBox';

function MobileControls(props) {
  const {attributeVisible, setDisplayLegend, displayLegend} = props;

  return (
      <div className={`${styles.mobile} ${styles.containerAll}  ${styles.containerMobile}`} style={{visibility: `${attributeVisible==='true'?'hidden':'visible'}`}}>
        <ControlBox>
          <button name='Mobile Control Legend Button' className={`${styles.buttonClear} ${styles.button}`} onClick={()=>setDisplayLegend(!displayLegend)} style={{display: "flex", justifyContent: "center", alignItems: "center"}}><IconQuestion width="20px"/></button>
        </ControlBox>
      </div>
  )
}

export default MobileControls