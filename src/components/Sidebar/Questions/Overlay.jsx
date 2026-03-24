import React from 'react';

import ControlBox from '../../Shared/ControlBox/ControlBox';
import CloseButton from '../../Shared/CloseButton/CloseButton';
import HorizontalRule from '../../Shared/HorizontalRule/HorizontalRule';

import styles from "./Questions.module.css";

import * as CONSTS from '../../../utils/consts';

function Overlay(props) {
    const {setDisplayQuestionOverlay, mapInfo} = props;
  return (
    <div className={`${styles.overlay}`}>
      <ControlBox padding="10px" shadow={true}>
          <CloseButton alignRight={true} buttonName="Close cluster information" onClick={()=>setDisplayQuestionOverlay(false)} color={CONSTS.COLOR.brandGraySemi} width="15"/>
          <div className={styles.content}>
            <div className={styles.links}>
                <a href={`${CONSTS.WEBSITE_BASE}/accreditation`} target='blank_' title="Link to accreditation page">Accreditation</a>
                <a href={`${CONSTS.WEBSITE_BASE}/terms-of-service`} target='blank_' title="Link to terms and conditions of service">Terms of Service</a>
              </div>
            <div style={{padding: "10px", overflow: "auto", maxHeight: "60vh"}}>{mapInfo.map((section)=> {
                return <div key={mapInfo.indexOf(section)}>
                  <h4>{section.title}</h4>
                  {section.content.map((paragraph)=>{return <div style={{margin: "10px 0"}} key={section.content.indexOf(paragraph)}>{paragraph}</div>})}
                  <HorizontalRule/>
                </div>})}
                <i>Emojis / icons for the pop-up boxes are designed by <a href={`https://openmoji.org/`} target='blank_' title="Link to OpenMoji.org">OpenMoji</a> – the open-source emoji and icon project. License: <a href={`https://creativecommons.org/licenses/by-sa/4.0/#`} target='blank_' title="Link to ShareAlike license">CC BY-SA 4.0</a></i>    
            </div>
          </div>
      </ControlBox>
    </div>
  )
}

export default Overlay