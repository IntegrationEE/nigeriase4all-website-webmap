import React, { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import styles from "../Controls.module.css";

import {getBackgroundColor} from '../../../../utils/dataHandler';
import ControlBox from '../../../Shared/ControlBox/ControlBox';
// import * as CONSTS from '../../../utils/consts'

function SelectBaseLayer(props) {
    const { selectedLayer, setSelectedLayer, map} = props;
    const {selectedbase,basebutton,basetitle} = styles;
    const pathname = useLocation().pathname;

    const changeBaselayer = useCallback((e) => {
        const layers = ['osm', 'osmhot', 'satellite'];
        layers.forEach(layer=>(layer!==e.target.value)?map.current.setLayoutProperty(layer,'visibility', 'none'):map.current.setLayoutProperty(layer,'visibility', 'visible'));
        setSelectedLayer(e.target.value);
      }, [map, setSelectedLayer]);

    return (
        <div style={{position: "absolute", top: "0px", left: "50px", margin: "-5px", width: "200px"}}>
            <ControlBox>
                    <form className={basetitle}  name='BaseLayer Selection Form' style={{padding: "15px"}}>
                        <b className={basetitle} >Select basemap</b>
                        <div style={{paddingTop: "10px"}}>
                            <input className={basebutton} type="radio" value="osm" id="osm" name="baselayer" onChange={changeBaselayer} checked={selectedLayer==="osm"}/>
                            <label style={{cursor:'pointer', color: selectedLayer==='osm'?getBackgroundColor(pathname):undefined}} className={selectedLayer==='osm'?selectedbase:undefined} htmlFor="osm">Greyscale</label>
                        </div>
                        <div>
                            <input className={basebutton} type="radio" value="osmhot" id="osmhot" name="baselayer" onChange={changeBaselayer} checked={selectedLayer==="osmbw"}/>
                            <label className={selectedLayer==='osmhot'?selectedbase:undefined} style={{cursor:'pointer', color: selectedLayer==='osmhot'?getBackgroundColor(pathname):undefined}} htmlFor="osmhot">Humanitarian</label>
                        </div>
                        <div>
                            <input className={basebutton} type="radio" value="satellite" id="satellite" name="baselayer" onChange={changeBaselayer} checked={selectedLayer==="satellite"}/>
                            <label style={{cursor:'pointer', color: selectedLayer==='satellite'?getBackgroundColor(pathname):undefined}} className={selectedLayer==='satellite'?selectedbase:undefined} htmlFor="satellite">Satellite</label>
                        </div>
                    </form>
            </ControlBox>
        </div>

    )
}

export default SelectBaseLayer