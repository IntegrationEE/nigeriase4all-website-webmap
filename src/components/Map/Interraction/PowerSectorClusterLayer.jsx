import {useEffect, useCallback} from 'react';
import { useSearchParams } from 'react-router-dom';

import {STATE_NAMES,COLOR} from '../../../utils/consts';

import { searchParamsObj, toSlug } from '../../../utils/dataHandler';

function PowerSectorClusterLayer(props) {
    const {map, mapLoaded} = props;
    const [searchParams] = useSearchParams();
    const mapCurrent = map.current;

    const toVal=useCallback((keyVal)=>{return Number(searchParamsObj(searchParams)[keyVal])
    },[searchParams])

    const stateSlugToName = STATE_NAMES.reduce((acc, curr) => {
        acc[toSlug(curr)]=curr;
        return acc
    },{});

    useEffect(() => {
        if(!mapLoaded || !searchParamsObj(searchParams).state) return;
        const gridDistMaxIncludeNullFilter = ['any',['==',['get','grid_dist_km'], null],['>',['to-number', ['get','grid_dist_km']], toVal('grid_buffer')]];

        const areaMinFilter = ['>=',['to-number', ['get','number_of_buildings']], 100];
        const stateFilter = ['==',['get','state_name'], stateSlugToName[searchParamsObj(searchParams).state]];
        const filter = ['all', areaMinFilter, stateFilter];

        mapCurrent.setFilter('powerSectorClusters',filter);
        mapCurrent.setPaintProperty('powerSectorClusters', 'circle-color', ['case', gridDistMaxIncludeNullFilter, COLOR.clusterYellow, COLOR.powerSector])
        
        // mapCurrent.on('data', function(e) {
        //     if(e.isSourceLoaded) {
        //         setClusterCount(mapCurrent.queryRenderedFeatures({layers: ["clusterAllSimple"]}).length);
        //     }
        // })       
        
    }, [mapCurrent, mapLoaded, searchParams, stateSlugToName, toVal]);

    // useEffect(() => {
    //     return () => {
    //         mapCurrent.setLayoutProperty(layerid,'visibility','none');
    //     };
    //   },);

    return null
}

export default PowerSectorClusterLayer
