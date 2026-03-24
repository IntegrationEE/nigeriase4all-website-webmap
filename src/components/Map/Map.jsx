import React, { useRef, useEffect, useState, useCallback } from 'react';
import {useLocation, useSearchParams} from 'react-router-dom';
import maplibregl from 'maplibre-gl';

// STYLES
import styles from './Map.module.css';

// CONTROLS
import Intro from './Controls/Intro/Intro';
import ControlsTopLeft from './Controls/ControlsTopLeft';
import ControlsTopRight from './Controls/ControlsTopRight';
import ControlsBottomRight from './Controls/ControlsBottomRight';
import ControlsBottomLeft from './Controls/ControlsBottomLeft';
import MobileControls from './Controls/MobileControls';

// LAYER INTERRACTIONS
import StateLayer from './Interraction/StateLayer';
import InterconnectedClusterLayer from './Interraction/InterconnectedClusterLayer';
import PowerSectorClusterLayer from './Interraction/PowerSectorClusterLayer';
import OffgridClusterLayer from './Interraction/OffgridClusterLayer';
import ShsClusterLayer from './Interraction/ShsClusterLayer';
import ShsMarketsLayer from './Interraction/ShsMarketsLayer';
import SearchMarker from './Interraction/SearchMarker';
import NightLightZScoreLayer from './Interraction/NightLightsZScoreLayer';
import MinigridLayer from './Interraction/MinigridsLayer';
import SelectedClusterMarker from './Interraction/SelectedClusterMarker';

// LOADING
import Loading from './Loading';

// UTILITIES
import {NIGERIA_CONTEXT,STYLE} from '../../utils/consts';
import {OFFGRID_MG_PATH,INTERCONNECTED_MG_PATH,POWER_SECTOR_PATH,SOLAR_HOME_SYSTEM_PATH} from "../..//utils/paths";

function Map(props) {
  const {map, mapLoaded, setMapLoaded, dataLoaded, setDataLoaded} = props;
  const mapContainerRef = useRef(null);
  const [searchParams] = useSearchParams();
  const pathname = useLocation().pathname;

  const [selectedCluster, setSelectedCluster] = useState(null);
  const [selectedMarket, setSelectedMarket] = useState(null);
  const [attributeVisible, setAttributeVisible] = useState(false);
  const [displayLegend, setDisplayLegend]= useState(false);

  const mapCurrent = map.current;

  useEffect(() => {

        if (map.current) return; // initialize map only once
        map.current = new maplibregl.Map({
            container: mapContainerRef.current,
            style: STYLE,
            center: NIGERIA_CONTEXT.center,
            zoom: NIGERIA_CONTEXT.zoom,
            minZoom: 5, // how far out we can go
            maxZoom: 16, // how far in we can go
        });

        map.current.on('load', function(){
            setMapLoaded(true);
            map.current.resize();
        });
        map.current.on('idle', function() {
            if(map.current.loaded()){
                setDataLoaded(true);
            }
        });
    }, [map, setDataLoaded, setMapLoaded]);

    useEffect(()=>{
        setDataLoaded(false)
    }, [setDataLoaded, searchParams])

    const setAttributeCallback = useCallback(()=> {setAttributeVisible(mapContainerRef.current.getElementsByClassName("maplibregl-ctrl-attrib-button")[0].ariaPressed)},[])

    useEffect(()=> {
        if (!mapCurrent) return;
        const buttonRef =   mapContainerRef.current.getElementsByClassName("maplibregl-ctrl-attrib-button")[0];
        buttonRef.addEventListener("click", setAttributeCallback);
        return( () => buttonRef.removeEventListener("click", setAttributeCallback))
    },[mapCurrent, setAttributeCallback]);

        return (
            
        <div>
            <Loading dataLoaded={dataLoaded}/>

            <Intro/>
            {map&&<StateLayer 
                map={map}
                mapLoaded={mapLoaded}
                />}
            {map&&<SearchMarker 
                map={map}
                mapLoaded={mapLoaded}
                />}
            {map&&<SelectedClusterMarker 
                map={map}
                mapLoaded={mapLoaded}
                selectedCluster={selectedCluster}
                />}
            {map&&<MinigridLayer 
                map={map}
                mapLoaded={mapLoaded}
                />}
            {map&&(pathname===INTERCONNECTED_MG_PATH)&&<InterconnectedClusterLayer 
                map={map}
                setSelectedCluster={setSelectedCluster}
                mapLoaded={mapLoaded}
                />}
            {map&&(pathname===INTERCONNECTED_MG_PATH)&&<NightLightZScoreLayer 
                map={map}
                mapLoaded={mapLoaded}
                />}
            {map&&(pathname===OFFGRID_MG_PATH)&&<OffgridClusterLayer 
                map={map}
                setSelectedCluster={setSelectedCluster}
                mapLoaded={mapLoaded}
                />}
            {map&&(pathname===POWER_SECTOR_PATH)&&<PowerSectorClusterLayer 
                map={map}
                mapLoaded={mapLoaded}
                />}
            {map&&(pathname===SOLAR_HOME_SYSTEM_PATH)&&<ShsClusterLayer 
                map={map}
                mapLoaded={mapLoaded}
                />}
            {map&&(pathname===SOLAR_HOME_SYSTEM_PATH)&&<ShsMarketsLayer 
                map={map}
                selectedMarket = {selectedMarket}
                setSelectedMarket={setSelectedMarket}
                mapLoaded={mapLoaded}
                />}

            <ControlsTopLeft map={map}/>
            <ControlsTopRight map={map}/>
            <ControlsBottomRight map={map} 
                    selectedCluster={selectedCluster} 
                    setSelectedCluster={setSelectedCluster}
                    selectedMarket={selectedMarket}
                    setSelectedMarket={setSelectedMarket}
                    attributeVisible={attributeVisible}
                    displayLegend={displayLegend}
            />
            <ControlsBottomLeft map={map}
                    attributeVisible={attributeVisible}
                    displayLegend={displayLegend}
                    mapLoaded={mapLoaded}/>
            <MobileControls map={map} attributeVisible={attributeVisible} displayLegend={displayLegend} setDisplayLegend={setDisplayLegend}/>
            <div className={styles.mapContainer} ref={mapContainerRef} />
        </div>
    );
}

export default Map;
