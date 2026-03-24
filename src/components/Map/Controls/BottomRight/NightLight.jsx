import React, {useState} from "react";

import styles from '../Controls.module.css';

import ControlBox from "../../../Shared/ControlBox/ControlBox";
import CloseButton from "../../../Shared/CloseButton/CloseButton";
import IconMinus from "../../../Shared/Icons/IconMinus";
import HorizontalRule from "../../../Shared/HorizontalRule/HorizontalRule";

import * as CONSTS from "../../../../utils/consts";

const NightLight = () =>{
    const [display, setDisplay] = useState(true);
    
    return(
        <>
        {display&&<ControlBox shadow={true} padding="10px">
            <CloseButton alignRight={true} buttonName="Close Night Light information" onClick={()=>setDisplay(!display)} color={CONSTS.COLOR.brandGrayDark}/>
            <b style={{paddingBottom: "10px"}}>Night light intensity</b>
            <div className={styles.hexChildren}>
                <Hex color={CONSTS.COLOR.brandGrayDark}/> 
                <Hex color={CONSTS.COLOR.colorSecondaryRedDark}/> 
                <Hex color={CONSTS.COLOR.colorSecondaryRed}/>
                <Hex color={CONSTS.COLOR.colorSecondaryRedLight}/>
                <Hex color={CONSTS.COLOR.colorSecondaryYellowDark}/>
                <Hex color={CONSTS.COLOR.colorSecondaryYellow}/>
                <Hex color={CONSTS.COLOR.colorSecondaryYellowLight}/>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>Low</div>
                <div>High</div>
            </div>
            <HorizontalRule/>
            <p style={{maxWidth: "250px"}}>Night light intensity hexagons are created from <a style={{textDecoration: "underline"}} href="http://www-personal.umich.edu/~brianmin/HREA/data.html" rel="noreferrer" target="_blank">this source</a>, extracting values which are less than 5 km from the grid.</p>
        </ControlBox>}
        {!display&&<ControlBox>
            <button className={styles.buttonMinimize} onClick={()=>setDisplay(!display)} name="Open Night Light information" aria-label="Open Night Light information">
                <IconMinus color={CONSTS.COLOR.brandBlack} />
            </button>
        </ControlBox>}
     </>
    )
}

export default NightLight;

const Hex = ({color})=><div className={styles.hexagon} style={{backgroundColor:`${color}`}}></div>