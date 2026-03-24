import React,{useState} from 'react';
import * as CONSTS from '../../../../utils/consts';
import styles from "../Controls.module.css";

import IconBasemap from '../../../Shared/Icons/IconBasemap';
import SelectBaseLayer from './SelectBaseLayer';
import ControlBox from '../../../Shared/ControlBox/ControlBox';

function BaselayerControl({map}) {
    const {button} = styles;
    const [toggle, setToggle] = useState(false);
    const [selectedLayer, setSelectedLayer] = useState('osm');

    return (
        <div style={{position: "relative"}}>
            <ControlBox>
                <button onClick={()=>setToggle(!toggle)} className={button} name='BaseMap Control Button' aria-label="Change base layer"><IconBasemap color={CONSTS.COLOR.brandBlack} /></button>
            </ControlBox>
            {toggle&&<SelectBaseLayer 
                map={map}
                selectedLayer={selectedLayer}
                setSelectedLayer={setSelectedLayer}
                />}
        </div>
    )
}

export default BaselayerControl