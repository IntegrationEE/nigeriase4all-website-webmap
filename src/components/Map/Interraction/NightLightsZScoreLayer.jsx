import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { STATE_NAMES } from '../../../utils/consts';

import { searchParamsObj, toSlug } from '../../../utils/dataHandler';

function NightLightZScoreLayer(props) {
    const {map, mapLoaded} = props;
    const [searchParams] = useSearchParams();
    const mapCurrent = map.current;

    useEffect(() => {
        if(!mapLoaded || !searchParamsObj(searchParams).state) return;
        const stateSlugToName = STATE_NAMES.reduce((acc, curr) => {
            acc[toSlug(curr)]=curr;
            return acc
        },{});
        const stateFilter = ['==',['get','adm1_en'], stateSlugToName[searchParamsObj(searchParams).state]];
        const filter = ['all', stateFilter]
        
        mapCurrent.setFilter("nightLightZScore2019",filter);
    }, [mapCurrent, searchParams, mapLoaded]);

    return null
}

export default NightLightZScoreLayer