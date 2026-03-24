import {useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import {STATE_NAMES,SELECTED_OFFGRID} from '../../../utils/consts';

import { searchParamsObj, toSlug } from '../../../utils/dataHandler';

function OffgridClusterLayer(props) {
    const {map, setSelectedCluster, mapLoaded} = props;
    const [searchParams] = useSearchParams();
    const mapCurrent = map.current;
    
    const clickOnCluster = useCallback((e) => {
        setSelectedCluster(e.features[0]);
        // const coords = e.features[0]._geometry.coordinates;
        // setSearchParams({...searchParamsObj(searchParams), selected_cluster: `${coords[1]},${coords[0]}`})
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
        const filterInit = SELECTED_OFFGRID.FILTER;
        const gridDistMinFilter = ['>=',['to-number', ['get','grid_dist_km']], toVal('grid_dist_min')];
        const gridDistMinIncludeNullFilter = ['any',['==',['to-number', ['get','grid_dist_km']], 0],['>=',['to-number', ['get','grid_dist_km']], toVal('grid_dist_min')]];
        const gridDistMaxFilter = ['<',['to-number', ['get','grid_dist_km']], toVal('grid_dist_max')];
        const buildingMinFilter = ['>=',['to-number', ['get','building_count']], toVal('buildings_min')];
        const buildingMaxFilter = ['<',['to-number', ['get','building_count']], toVal('buildings_max')];
        const stateFilter = ['==',['get','state_name'], stateSlugToName[searchParamsObj(searchParams).state]];
        const filter = ['all', buildingMinFilter, toVal('grid_dist_max')===filterInit.GRID_DIST.MAX?gridDistMinIncludeNullFilter:gridDistMinFilter, stateFilter]
        // if we have the maximum value selected, we want to remove the max filter and include all
        if(toVal('grid_dist_max')!==filterInit.GRID_DIST.MAX){filter.push(gridDistMaxFilter)}
        if(toVal('buildings_max')!==filterInit.BUILDING.MAX){filter.push(buildingMaxFilter)}
        
        mapCurrent.setFilter("clusterOffgridSimple",filter);
        mapCurrent.setFilter("clusterOffgridSurveyed",filter);
        mapCurrent.setFilter("clusterOffgridSurveyedGrid",filter);

    }, [mapCurrent, searchParams, mapLoaded]);

    useEffect(() => {
        if(!mapLoaded)return;
        mapCurrent.on('click', "clusterOffgridSimple", clickOnCluster);
        mapCurrent.on('click', "clusterOffgridSurveyed", clickOnCluster);
        mapCurrent.on('mouseenter', 'clusterOffgridSimple', () => {
            mapCurrent.getCanvas().style.cursor = 'pointer'
          })
          mapCurrent.on('mouseleave', 'clusterOffgridSimple', () => {
            mapCurrent.getCanvas().style.cursor = ''
          })
    }, [mapCurrent, clickOnCluster, mapLoaded]);

    return null
}

export default OffgridClusterLayer
