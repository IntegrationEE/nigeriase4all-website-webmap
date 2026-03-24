import React, {useState, useMemo, useEffect, useCallback} from 'react';
import { useSearchParams } from 'react-router-dom';

import SliderSingle from '../../Shared/Slider/SliderSingle';
import WarningIfModelledGrid from './WarningIfModelledGrid';

import * as CONSTS from '../../../utils/consts';
import {searchParamsObj} from '../../../utils/dataHandler';

function FilterPowerSector() {
    const filter = CONSTS.SELECTED_POWER_SECTOR.FILTER;
    const gridDistKey = "grid_buffer";
    const minGridDist = filter.GRID_DIST.MIN;
    const initGridDist = filter.GRID_DIST.INIT
    const maxGridDist= filter.GRID_DIST.MAX;
    const [maxGridDistVal, setMaxGridDistVal] = useState(maxGridDist);
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
        initiateSearchParams(`${gridDistKey}`,initGridDist, setMaxGridDistVal);
      }, [initGridDist, searchParams, setSearchParams]);  

    // initiate search Params
    useEffect(()=> {
        initiateParams()
    },[initiateParams,searchParams])

    return (
        <>
            <SliderSingle name="Distance to grid buffer" 
                units="km"
                warning={<WarningIfModelledGrid/>}
                min={minGridDist}
                max={maxGridDist}
                maxVal = {maxGridDistVal}
                setMaxVal = {setMaxGridDistVal}
                inactive = {!searchParamsMemo.state}
                queryParam = {gridDistKey}
                diff={0.5}
            />
        </>);
}

export default FilterPowerSector;
