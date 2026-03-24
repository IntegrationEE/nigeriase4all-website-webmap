import React, {useState} from "react";

import styles from '../Controls.module.css';

import * as CONSTS from "../../../../utils/consts";
import ControlBox from "../../../Shared/ControlBox/ControlBox";
import CloseButton from "../../../Shared/CloseButton/CloseButton";
import IconMinus from "../../../Shared/Icons/IconMinus";

const DistributionCompany = () =>{
    const {discoChildren,discoItem} = styles;
    const [display, setDisplay] = useState(true);
    
    return(
        <>
        {display&&<ControlBox shadow={true} padding="10px">
            <CloseButton alignRight={true} buttonName="Close DISCO information" onClick={()=>setDisplay(!display)} color={CONSTS.COLOR.brandGrayDark}/>
            <div className={discoChildren}>
                { CONSTS.DISTRIBUTION_COMPANIES?.map((disco,key)=>(
                    <div className={discoItem}  key={key}> 
                        <Circle color={disco.COLOR}/>
                        <p>{disco.NAME} ({disco.ABBV})</p>
                    </div>))
                }
            </div>
        </ControlBox>}
        {!display&&<ControlBox>
            <button className={styles.buttonMinimize} onClick={()=>setDisplay(!display)} name="Open DISCO information" aria-label="Open DISCO information">
                <IconMinus color={CONSTS.COLOR.brandBlack} />
            </button>
        </ControlBox>}
     </>
    )
}


export default DistributionCompany;

const Circle = ({color})=><div className={styles.circleDisco} style={{backgroundColor:`${color}`}}></div>