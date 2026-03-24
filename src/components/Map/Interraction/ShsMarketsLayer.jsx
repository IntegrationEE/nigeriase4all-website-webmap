import {useEffect, useCallback} from 'react';
import { useSearchParams } from 'react-router-dom';
import buffer from '@turf/buffer';

import {STATE_NAMES,COLOR} from '../../../utils/consts';

import { searchParamsObj, toSlug } from '../../../utils/dataHandler';
// import {getMarketsShs} from '../../../services/clusterWfs.service.js';

function ShsMarketsLayer(props) {
    const {map, setSelectedMarket ,mapLoaded} = props;
    const [searchParams] = useSearchParams();
    const mapCurrent = map.current;
    const selectedState = searchParamsObj(searchParams).state;
    const marketDist = searchParamsObj(searchParams).market_dist;

    const stateSlugToName = STATE_NAMES.reduce((acc, curr) => {
        acc[toSlug(curr)]=curr;
        return acc
    },{});

    const clickOnMarket = useCallback((e) =>{
        if(mapCurrent.getLayer('marketsHighlight')) {
            mapCurrent.removeLayer('marketsHighlight')
        };
        if(mapCurrent.getSource('marketsHighlight')) {
            mapCurrent.removeSource('marketsHighlight')
        };
        const buffered = buffer(e.features[0].toJSON(), Number(marketDist));
        setSelectedMarket(buffered);
        mapCurrent.addSource('marketsHighlight',{"type":"geojson", "data": buffered, "promoteId": 'gid'});
        mapCurrent.addLayer({"id": 'marketsHighlight', "type": "line", "source": "marketsHighlight", "paint": { 'line-width':3,'line-color':COLOR.solarHomeSystems }});
        mapCurrent.moveLayer('marketsHighlight','marketsBuffer');
    }, [mapCurrent, marketDist, setSelectedMarket]);

    useEffect(() => {
        if(!mapLoaded || !selectedState) return;
        
        const stateSlugToName = STATE_NAMES.reduce((acc, curr) => {
            acc[toSlug(curr)]=curr;
            return acc
        },{});
        const marketsStateFilter = ['==',['get','adm1_en'], stateSlugToName[selectedState]];
        const marketsFilter = ['all', marketsStateFilter]
        mapCurrent.setFilter('markets',marketsFilter);
    }, [mapCurrent, mapLoaded, selectedState, stateSlugToName]);

    useEffect(() => {
        if(!mapLoaded || !selectedState || !marketDist) return;
        const stateSlugToName = STATE_NAMES.reduce((acc, curr) => {
            acc[toSlug(curr)]=curr;
            return acc
        },{});
        
        const stateFilter = ['==',['get','adm1_en'], stateSlugToName[selectedState]];
        const buffer = ['==',['get','km'], +marketDist];
        const filter = ['all', buffer, stateFilter];
        mapCurrent.setFilter('marketsBuffer',filter);
        setSelectedMarket(null);
        if(mapCurrent.getLayer('marketsHighlight')) {
            mapCurrent.removeLayer('marketsHighlight')
        };
    }, [mapCurrent, mapLoaded, marketDist, selectedState, setSelectedMarket]);

    useEffect(() => {
        if(!mapLoaded)return;
        mapCurrent.on('click', "markets", clickOnMarket);
        mapCurrent.on('mouseenter', 'markets', () => {
            mapCurrent.getCanvas().style.cursor = 'pointer'
          })
          mapCurrent.on('mouseleave', 'markets', () => {
            mapCurrent.getCanvas().style.cursor = ''
          })
    }, [mapCurrent, clickOnMarket, mapLoaded]);
    
    return null
}

export default ShsMarketsLayer
