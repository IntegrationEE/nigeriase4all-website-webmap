import {useEffect, useCallback } from 'react';
import maplibregl from 'maplibre-gl';

function MinigridLayer(props) {
    const {map, mapLoaded} = props;
    const mapCurrent = map.current;
    
    const clickOnMinigrid = useCallback((e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = popupBox(e.features[0].properties.community, e.features[0].properties.power_kw, e.features[0].properties.power_system)
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
         
        new maplibregl.Popup({className: "minigrid-popup", closeButton: false, closeOnMove: true})
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(mapCurrent);    
    },[mapCurrent])

    useEffect(() => {
        if(!mapCurrent || !mapLoaded)return;
        mapCurrent.on('click', "minigrids", clickOnMinigrid);
        mapCurrent.on('mouseenter', 'minigrids', () => {
            mapCurrent.getCanvas().style.cursor = 'pointer'
          })
          mapCurrent.on('mouseleave', 'minigrids', () => {
            mapCurrent.getCanvas().style.cursor = ''
          })
    }, [mapCurrent, clickOnMinigrid, mapLoaded]);


    return null
}

export default MinigridLayer

const popupBox = (community, power_kw, power_system) => {return `<div id="content">
    ${power_kw?`<b>${power_kw}kW ${power_system&&power_system}</b> minigrid`:`Minigrid`} ${community?` in <b>${community}</b> community`:''}
    <hr></hr>
    <div>Visit the <a href="https://minigridmonitor.nigeriase4all.gov.ng/" target='blank_' title="Link to the Nigeria SE4ALL minigrid monitor">minigrid monitor</a> for more information on installed minigrids in Nigeria</div>
    </div>`}