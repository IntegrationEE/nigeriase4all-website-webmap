import {useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';

import {STATE_NAMES} from '../../../utils/consts';

import { searchParamsObj, toSlug } from '../../../utils/dataHandler';

function ShsClusterLayer(props) {
    const {map, mapLoaded} = props;
    const [searchParams] = useSearchParams();
    const mapCurrent = map.current;
    // const toVal=useCallback((keyVal)=>{return Number(searchParamsObj(searchParams)[keyVal])
    // },[searchParams])

    const stateSlugToName = STATE_NAMES.reduce((acc, curr) => {
        acc[toSlug(curr)]=curr;
        return acc
    },{});

    useEffect(() => {
        if(!mapLoaded || !searchParamsObj(searchParams).state) return;
        
        const stateSlugToName = STATE_NAMES.reduce((acc, curr) => {
            acc[toSlug(curr)]=curr;
            return acc
        },{});
        
        function toVal(keyVal) {
            return Number(searchParamsObj(searchParams)[keyVal])
        }
        const gridDistMinFilter = ['>=',['to-number', ['get','grid_dist_km']], toVal('grid_dist_min')];
        const gridDistMaxFilter = ['<',['to-number', ['get','grid_dist_km']], toVal('grid_dist_max')];
        const stateFilter = ['==',['get','state_name'], stateSlugToName[searchParamsObj(searchParams).state]];
        const filter = ['all', gridDistMinFilter, gridDistMaxFilter, stateFilter]
        // if we have the maximum value selected, we want to remove the max filter and include all
        mapCurrent.setFilter('shsClusters',filter);    
        
    }, [mapCurrent, mapLoaded, searchParams, stateSlugToName]);

    // useEffect(() => {
    //     return () => {
    //         mapCurrent.setLayoutProperty(layerid,'visibility','none');
    //     };
    //   },);

    return null
}

export default ShsClusterLayer
