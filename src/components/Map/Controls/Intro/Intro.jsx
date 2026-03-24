import React, {useRef} from 'react';
import { useLocation } from 'react-router-dom';

import ControlBox from '../../../Shared/ControlBox/ControlBox';
import CloseButton from '../../../Shared/CloseButton/CloseButton';
import Headline from '../../../Shared/Headline';
import IconMagnify from '../../../Shared/Icons/IconMagnify';
import IconFilter from '../../../Shared/Icons/IconFilter';
import IconLayers from '../../../Shared/Icons/IconLayers';
import IconTick from '../../../Shared/Icons/IconTick';

import useDetectOutsideClick from '../../../../hooks/useDetectOutsideClick';
import { getSelectedMap, getBackgroundColor } from '../../../../utils/dataHandler';

import * as CONSTS from '../../../../utils/consts';

import styles from './Intro.module.css';
// import IconArrowDownLong from '../../../Shared/Icons/IconArrowDownLong';

function Intro() {
    const boxRef = useRef(null);
    const [displayIntro, setDisplayIntro] = useDetectOutsideClick(boxRef, true);
    const pathname = useLocation().pathname;
    const selectedMap = getSelectedMap(pathname);
  if (displayIntro){
    return (
      <>
        <div className={styles.grayout}>
        </div>
        <div ref={boxRef} className={`${styles.overlay}`}>
            <ControlBox fitContent={false} padding="10px" shadow={true}>
                <CloseButton alignRight={true} buttonName="Close intro box" onClick={()=>setDisplayIntro(false)} color={CONSTS.COLOR.brandGraySemi} width="15"/>
                <h2>Quick start guide</h2>
                <p>Get started using the <b>{selectedMap?.NAME} data explorer</b> in 3 steps:</p>
                <div className={styles.textAppear1}>
                  <Headline icon={<IconMagnify width="17px"/>} text={"Step 1: Select a state"}/>
                  <span style={{display: 'flex'}}>
                  <div style={{flex: "0 17px"}}>
                    {/* <IconArrowDownLong width={17}/> */}
                  </div>
                  <p style={{display: 'inline', marginLeft: "10px"}}>Either via the sidebar or by clicking on the map directly, select a state of interest.</p></span>              
                </div>
                <div className={styles.textAppear2}>
                  <Headline icon={<IconFilter width="17px"/>} text={"Step 2: Filter settlement clusters"}/>
                  <span style={{display: 'flex'}} ><div style={{flex: "0 17px"}}>
                  {/* <IconArrowDownLong width={17}/> */}
                  </div><p style={{display: 'inline', marginLeft: "10px"}}>Use the filter sliders to select desired criteria, such as distance to the Medium Voltage grid.</p></span>            
                </div>
                <div className={styles.textAppear3}>
                  <Headline icon={<IconLayers width="17px"/>} text={"Step 3: Select which layers to display"}/>
                  <span style={{display: 'flex'}}><div style={{flex: "0 17px"}}>
                    {/* <IconArrowDownLong width={17}/> */}
                    </div><p style={{display: 'inline', marginLeft: "10px"}}>Modify your view by toggling the layers off or on.</p></span>            
                </div>
                <div className={styles.textAppear4}>
                  <Headline icon={<IconTick width="17" color={getBackgroundColor(pathname)}/>} text={"Copy the long URL link to share your findings with others"}/>
                </div>
            </ControlBox>
        </div>
        </>
  )}
  else return null;
}

export default Intro