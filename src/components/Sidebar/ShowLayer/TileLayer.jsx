/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback, useEffect} from 'react';

import styles from './TileLayer.module.css';

import Toggle from '../../Shared/Toggle/Toggle';
import IconInfo from '../../Shared/Icons/IconInfo';

import * as CONSTS from '../../../utils/consts';

function TileLayer(props) {
    const {layerName, layerIdArray, layerId, toggleInit, map, active=true, mapLoaded, attribution} = props;
    const [toggle, setToggle] = useState(toggleInit);
    const [showAttribution, setShowAttribution] = useState(false);
    const mapCurrent = map.current;
    // make layer IDs an array eventually

    
    useEffect(()=>{
        if (!mapLoaded) return; // wait for map to initialize
        function checkLayerToggle(layerId){
            if(!mapCurrent.getLayer(layerId)){return}
            toggle ? mapCurrent.setLayoutProperty(layerId,'visibility','visible'): mapCurrent.setLayoutProperty(layerId,'visibility','none')
        }
        function removeLayer(layerId){
            if(!mapCurrent.getLayer(layerId)){return}
            mapCurrent.setLayoutProperty(layerId,'visibility','none');
        }
        layerIdArray.forEach(layerId => {checkLayerToggle(layerId)})
        // remove layer on component unmount
        return () => {
            layerIdArray.forEach(layerId => {removeLayer(layerId);})
        };
    },[mapCurrent, toggle, mapLoaded, layerIdArray]);

    useEffect(()=>{
        if (!active) {
            setToggle(false);
            return;
        };
        setToggle(true);
    },[active]);

    const toggleLayer = useCallback((e) => {
        if (!mapCurrent) return; // wait for map to initialize
        if (!active) {
            return;
        };
        setToggle(!toggle);
        layerIdArray.forEach(layerId => {toggle?mapCurrent.setLayoutProperty(layerId,'visibility','none'):mapCurrent.setLayoutProperty(layerId,'visibility','visible');})
    }, [mapCurrent, active, toggle, layerIdArray]);


    return (
        <>  
            <form className={styles.tilecontainer}name='Tile Layer Form' >
                <label htmlFor={layerId} className={`${styles.togglecontainer} ${!active?styles?.inactive:undefined}`}>
                    <div className={styles.text}>
                        {layerName}
                        {attribution&&<button className={styles.attributionButton} name='Attribution Button' onClick={(e)=> e.preventDefault()} onMouseEnter={() => setShowAttribution(true)} onMouseLeave={() => {setShowAttribution(false)}}><IconInfo color={CONSTS.COLOR.brandBlack} width={"9"}/></button>}
                    </div>
                    <Toggle
                        active={active}
                        layerId={layerId}
                        toggle={toggle}
                        toggleLayer={toggleLayer}    
                    />
                    {showAttribution&&<div className={styles.attribution}>{attribution}</div>}
                </label>

            </form>
        </>
    )
}

export default TileLayer
