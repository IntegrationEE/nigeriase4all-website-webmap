import {useEffect, useCallback, useState} from 'react';
import { useSearchParams, useLocation, useNavigate, createSearchParams } from 'react-router-dom';
import { centroid, polygon } from '@turf/turf';
import maplibregl from 'maplibre-gl';

import {STYLES,ADM1BBOX,NIGERIA_CONTEXT} from '../../../utils/consts';
import {POWER_SECTOR_PATH} from '../../../utils/paths';

import { stateNameModifier, searchParamsObj, toSlug } from '../../../utils/dataHandler';

function StateLayer(props) {
    
    const {map, mapLoaded} = props;
    const [searchParams] = useSearchParams();
    const selectedState = searchParamsObj(searchParams).state;
    const pathname=useLocation().pathname;
    const statesModified = stateNameModifier(ADM1BBOX);
    const mapCurrent = map.current;
    const [clickEventAdded, setClickEventAdded] = useState(false);
    const navigate=useNavigate();

    const clickToState = useCallback((e)=>{
        const url = new URL(window.location);
        const urlSeachParams = new URLSearchParams(window.location.search);
        const urlPathname = url.pathname;
        const selectedStateData = statesModified.find(states => states.name === e.features[0].properties.adm1_en);
        navigate({pathname: urlPathname, search: `?${createSearchParams({...searchParamsObj(urlSeachParams), state: selectedStateData.nameSlug})}`})
        // setSearchParams({...searchParams, state: selectedStateData.nameSlug})
    },[navigate, statesModified]); 

    useEffect(()=>{
        if(!mapLoaded) return;
        if(clickEventAdded) return;
        mapCurrent.on('click', 'boundaries-viz', clickToState);
        setClickEventAdded(true)
    },[clickEventAdded, clickToState, mapCurrent, mapLoaded, pathname]);

    // on click functionality
    useEffect(() => {
        // make state layer visible depending on selected map
        let hoveredState=null;
        let popup = null;
        if(!mapLoaded) return;
        // if(selectedMap.NAME===CONSTS.PAGES.INTERCONNECTED||selectedMap.NAME===CONSTS.PAGES.OFFGRID){
        mapCurrent.setLayoutProperty('boundaries-viz','visibility','visible');
        mapCurrent.setLayoutProperty('boundaries-line-viz','visibility','visible');
        mapCurrent.on('mousemove', 'boundaries-viz', function(e) {
            if (e.features.length > 0 && hoveredState!==e.features[0].properties.adm1_en){
                if (hoveredState) {     
                    mapCurrent.setFeatureState(
                        {source: 'boundaries', sourceLayer: "nigeria_state_boundaries", id: hoveredState},
                        {hover: false}
                    )
                    popup.remove();
                }
                hoveredState = e.features[0].properties.adm1_en;
                mapCurrent.setFeatureState(
                    { source: 'boundaries', sourceLayer: "nigeria_state_boundaries", id: hoveredState},
                    { hover: true }
                );
                const selectedState = statesModified.filter(state => state.name===hoveredState);
                const selectedStateBbox = polygon([selectedState[0].bbox]);
                const stateCentroid = centroid(selectedStateBbox).geometry.coordinates.slice();
                popup = new maplibregl.Popup({className: "state-label", closeButton: false})
                    .setLngLat(stateCentroid)
                    .setHTML(stateLabel(e.features[0].properties.adm1_en))
                    .addTo(mapCurrent);    
            }            
        });
        mapCurrent.on('mouseleave', 'boundaries-viz', function () {
            if (hoveredState) {
                mapCurrent.setFeatureState(
                    { source: 'boundaries', sourceLayer: "nigeria_state_boundaries", id: hoveredState},
                    { hover: false }
                    );
                popup.remove();
            }
            hoveredState = null;
        });
    }, [mapCurrent, mapLoaded, statesModified]);

    useEffect(() => {
        if(!mapLoaded) return;
        const statesModified = stateNameModifier(ADM1BBOX);
        if(selectedState){
         
            // remove the normal 
            const selectedStateData = statesModified.find(states => toSlug(states.name) === selectedState);
            mapCurrent.fitBounds(selectedStateData.bounds, {
                padding: {top: 10, bottom:25, left: 15, right: 5}
            });
            mapCurrent.setFilter('boundaries-viz',['!=',['get','adm1_en'], selectedStateData.name]);
            mapCurrent.setFilter('boundaries-line-viz',['!=',['get','adm1_en'], selectedStateData.name]);
            mapCurrent.setFilter('selected-state-viz',['==',['get','adm1_en'], selectedStateData.name]);
            mapCurrent.setFilter('boundaries-vizOverlay',['!=',['get','adm1_en'], selectedStateData.name]);

            mapCurrent.setLayoutProperty('selected-state-viz', 'visibility','visible');
            mapCurrent.setLayoutProperty('boundaries-vizOverlay', 'visibility','visible');

            mapCurrent.setPaintProperty('boundaries-viz','fill-color', STYLES.POLYGON.STATES.STATE_FILL['fill-color']);
            mapCurrent.setPaintProperty('boundaries-viz','fill-opacity', STYLES.POLYGON.STATES.STATE_FILL['fill-opacity']);
            mapCurrent.setPaintProperty('boundaries-line-viz','line-width', STYLES.POLYGON.STATES.STATE_LINE['line-width']);
            
        }
        if(!selectedState) {
            mapCurrent.fitBounds(NIGERIA_CONTEXT.bbox, {
                padding: {top: 10, bottom:25, left: 15, right: 5}
            });
            mapCurrent.setFilter('boundaries-viz',null);
            mapCurrent.setFilter('boundaries-line-viz',null);
            mapCurrent.setLayoutProperty('selected-state-viz', 'visibility','none');
            mapCurrent.setLayoutProperty('boundaries-vizOverlay', 'visibility','none');

            mapCurrent.setPaintProperty('boundaries-line-viz','line-width', STYLES.POLYGON.STATES.FILL['line-width']);
            mapCurrent.setPaintProperty('boundaries-viz','fill-opacity', STYLES.POLYGON.STATES.FILL['fill-opacity']);
            if(pathname === POWER_SECTOR_PATH) {
                mapCurrent.setPaintProperty('boundaries-viz','fill-color', STYLES.POLYGON.STATES.FILL_DISCO['fill-color']);
                mapCurrent.setPaintProperty('boundaries-viz','fill-opacity', STYLES.POLYGON.STATES.FILL_DISCO['fill-opacity']);
            } else {
                mapCurrent.setPaintProperty('boundaries-viz','fill-color', STYLES.POLYGON.STATES.FILL['fill-color']);
                mapCurrent.setPaintProperty('boundaries-viz','fill-opacity', STYLES.POLYGON.STATES.FILL['fill-opacity']);
            }
        
        }
    }, [selectedState, pathname, mapCurrent, mapLoaded]);

    return null
}

export default StateLayer

const stateLabel = (state) => {return `<div id="content">
    ${state}
    </div>`}