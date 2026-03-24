import React, {useState, useMemo, useEffect, useCallback} from 'react';
import { useSearchParams } from 'react-router-dom';

import Slider from '../../Shared/Slider/Slider';
import SliderSingle from '../../Shared/Slider/SliderSingle';
import WarningIfModelledGrid from './WarningIfModelledGrid';

import * as CONSTS from '../../../utils/consts';
import {searchParamsObj} from '../../../utils/dataHandler';

function FilterShs() {
    const filter = CONSTS.SELECTED_SHS.FILTER;
    const gridDistKey = "grid_dist";
    const minGridDist = filter.GRID_DIST.MIN;
    const maxGridDist= filter.GRID_DIST.MAX;
    const initGridDist = filter.GRID_DIST.INIT_MIN;
    const [minGridDistVal, setMinGridDistVal] = useState(minGridDist);
    const [maxGridDistVal, setMaxGridDistVal] = useState(maxGridDist);
    const marketDistKey = "market_dist";
    const minMarketDist = filter.MARKET_DIST.MIN;
    const initMarketDist = filter.MARKET_DIST.INIT
    const maxMarketDist= filter.MARKET_DIST.MAX;
    const [maxMarketDistVal, setMaxMarketDistVal] = useState(maxMarketDist);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParamsMemo = useMemo(()=> {return {...searchParamsObj(searchParams)}},[searchParams]);

    const initiateParams = useCallback(()=> {
        function initiateSearchParams(key,defaultVal,setValState) {
          if(!searchParamsObj(searchParams)[key]) {
            setSearchParams({...searchParamsObj(searchParams), [key]: defaultVal});
            setValState(defaultVal);
          }  
          if(searchParamsObj(searchParams)[key]) {
            setValState(searchParamsObj(searchParams)[key]);
          }
        }
        // setSearchParams({...searchParamsObj(searchParams), [key]: defaultVal});
        initiateSearchParams(`${gridDistKey}_min`,initGridDist, setMinGridDistVal);
        initiateSearchParams(`${gridDistKey}_max`,maxGridDist, setMaxGridDistVal);
        initiateSearchParams(`${marketDistKey}`,initMarketDist, setMaxMarketDistVal);            
    }, [initGridDist, initMarketDist, maxGridDist, searchParams, setSearchParams]);  

    // initiate search Params
    useEffect(()=> {
        initiateParams()
    },[initiateParams,searchParams])

    return (
        <>
            <SliderSingle name="Market Distance" 
                units="km"
                min={minMarketDist}
                max={maxMarketDist}
                maxVal = {maxMarketDistVal}
                setMaxVal = {setMaxMarketDistVal}
                inactive = {!searchParamsMemo.state}
                queryParam = {marketDistKey}
                diff={1}
            />
            <Slider name="Distance to grid" 
                units="km"
                warning={<WarningIfModelledGrid/>}
                min={minGridDist}
                max={maxGridDist}
                includeGreaterThanMax={true}
                minVal = {minGridDistVal}
                setMinVal = {setMinGridDistVal}
                maxVal = {maxGridDistVal}
                setMaxVal = {setMaxGridDistVal}
                inactive = {!searchParamsMemo.state}
                queryParam = {gridDistKey}
                diff={1}
            />
        </>);
}

export default FilterShs;
