import {useEffect, useCallback} from 'react';
import { useSearchParams } from 'react-router-dom';


import {STATE_NAMES,SELECTED_INTERCONNECTED}from '../../../utils/consts';

import { searchParamsObj, toSlug } from '../../../utils/dataHandler';

function InterconnectedClusterLayer(props) {
    const {map, setSelectedCluster, mapLoaded} = props;
    const [searchParams] = useSearchParams();
    const mapCurrent = map.current;
  

    const clickOnCluster = useCallback((e) => {
        setSelectedCluster(e.features[0]);
        
        // console.log(e.features[0].toJSON());
    },[setSelectedCluster])

    useEffect(() => {
        if(!mapLoaded || !searchParamsObj(searchParams).state) return;
        
        const stateSlugToName = STATE_NAMES.reduce((acc, curr) => {
            acc[toSlug(curr)]=curr;
            return acc
        },{});
        
        function toVal(keyVal) {
            return Number(searchParamsObj(searchParams)[keyVal])
        }
        const filterInit = SELECTED_INTERCONNECTED.FILTER;
        const gridDistMinFilter = ['all',['!=',['get','grid_dist_km'],null],['>=',['to-number', ['get','grid_dist_km']], toVal('grid_dist_min')]];
        const gridDistMaxFilter = ['<',['to-number', ['get','grid_dist_km']], toVal('grid_dist_max')];
        const buildingMinFilter = ['>=',['to-number', ['get','number_of_buildings']], toVal('buildings_min')];
        const buildingMaxFilter = ['<',['to-number', ['get','number_of_buildings']], toVal('buildings_max')];
        const stateFilter = ['==',['get','state_name'], stateSlugToName[searchParamsObj(searchParams).state]];
        const filter = ['all', buildingMinFilter, gridDistMinFilter, gridDistMaxFilter, stateFilter]
        // const filter = ['all', areaMinFilter, gridDistMinFilter, gridDistMaxFilter]
        // if we have the maximum value selected, we want to remove the max filter and include all
        if(toVal('buildings_max')!==filterInit.BUILDING.MAX){filter.push(buildingMaxFilter)}

        mapCurrent.setFilter('clusterAllSimple',filter); 
        
    }, [mapCurrent, mapLoaded, searchParams]);

    useEffect(() => {
        if(!mapLoaded) return;
        mapCurrent.on('click', "clusterAllSimple", clickOnCluster);
        mapCurrent.on('mouseenter', 'clusterAllSimple', () => {
            mapCurrent.getCanvas().style.cursor = 'pointer'
          })
          mapCurrent.on('mouseleave', 'clusterAllSimple', () => {
            mapCurrent.getCanvas().style.cursor = ''
          })
    }, [mapCurrent, clickOnCluster, mapLoaded]);

    // useEffect(() => {
    //     return () => {
    //         mapCurrent.setLayoutProperty(layerid,'visibility','none');
    //     };
    //   },);

    return null
}

export default InterconnectedClusterLayer
