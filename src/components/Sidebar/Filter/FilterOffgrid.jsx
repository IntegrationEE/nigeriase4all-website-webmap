import React, {useState, useMemo, useEffect, useCallback, useRef} from 'react';
import { useSearchParams } from 'react-router-dom';

import Slider from '../../Shared/Slider/Slider';
import WarningIfModelledGrid from './WarningIfModelledGrid';

import * as CONSTS from '../../../utils/consts';
import {searchParamsObj} from '../../../utils/dataHandler';
import {getClusterOffgrid} from '../../../services/clusterWfs.service.js';

function FilterOffgrid({setClusterCount}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = CONSTS.SELECTED_OFFGRID.FILTER;
    const gridDistKey = "grid_dist";
    const buildingKey = "buildings";
    const maxGridDist= filter.GRID_DIST.MAX;
    const minGridDist = filter.GRID_DIST.MIN;
    const minBuilding = filter.BUILDING.MIN;
    const maxBuilding = filter.BUILDING.MAX;
    const [minGridDistVal, setMinGridDistVal] = useState(searchParamsObj(searchParams)[`${gridDistKey}_min`]?searchParamsObj(searchParams)[`${gridDistKey}_min`]:minGridDist);
    const [maxGridDistVal, setMaxGridDistVal] = useState(searchParamsObj(searchParams)[`${gridDistKey}_max`]?searchParamsObj(searchParams)[`${gridDistKey}_max`]:maxGridDist);
    const [minBuildingVal, setMinBuildingVal] = useState(minBuilding);
    const [maxBuildingVal, setMaxBuildingVal] = useState(maxBuilding);
    const searchParamsMemo = useMemo(()=> {return {...searchParamsObj(searchParams)}},[searchParams]);
    const selectedState = searchParamsMemo.state;
    const mountedRef = useRef(true);

    const [stateData, setStateData] = useState([]);
    const [stateDataLoaded, setStateDataLoaded] = useState(false);

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
      initiateSearchParams(`${gridDistKey}_min`,minGridDist, setMinGridDistVal);
      initiateSearchParams(`${gridDistKey}_max`,maxGridDist, setMaxGridDistVal);
      initiateSearchParams(`${buildingKey}_min`,minBuilding, setMinBuildingVal);
      initiateSearchParams(`${buildingKey}_max`,maxBuilding, setMaxBuildingVal);
    }, [maxBuilding, maxGridDist, minBuilding, minGridDist, searchParams, setSearchParams]);

    // initiate search Params
    useEffect(()=> {
        initiateParams()
      },[initiateParams,searchParams]);

    useEffect(()=>{
      if(!mountedRef){return};
      if(!selectedState){return};
      getClusterOffgrid(selectedState).then(res => {
        setStateData(res.features);
        setStateDataLoaded(true);
      });
    },[selectedState]);

    useEffect(()=>{
      if(!mountedRef || !stateDataLoaded){return};
      if(stateData.length===0) {
        setClusterCount(0);
        return;
      }
      const builMin = (cluster) => cluster.building_count >= Number(minBuildingVal);
      const builMax = (cluster) => (Number(maxBuildingVal)===Number(maxBuilding)?true:cluster.building_count < Number(maxBuildingVal));
      const gridMin = (cluster) => (Number(maxGridDistVal)===Number(maxGridDist)?(cluster.grid_dist_km >= Number(minGridDistVal)||cluster.grid_dist_km === null):cluster.grid_dist_km >= Number(minGridDistVal));
      const gridMax = (cluster) => (Number(maxGridDistVal)===Number(maxGridDist)?true:cluster.grid_dist_km < Number(maxGridDistVal));
      const filteredData = stateData.filter(el => (builMin(el.properties)&&builMax(el.properties)&&gridMin(el.properties)&&gridMax(el.properties)));
      setClusterCount(filteredData.length);
    }, [maxBuilding, maxBuildingVal, maxGridDist, maxGridDistVal, minBuildingVal, minGridDistVal, setClusterCount, stateData, stateDataLoaded]);

    // cleanup function
    useEffect(()=>{
      return () => {
        mountedRef.current = false;
      }
    },[]);
    
    return (
        <>
            <Slider name="Distance to grid"
                warning={<WarningIfModelledGrid/>}
                units="km"
                min={minGridDist}
                max={maxGridDist}
                includeGreaterThanMax={true}
                minVal = {minGridDistVal}
                setMinVal = {setMinGridDistVal}
                maxVal = {maxGridDistVal}
                setMaxVal = {setMaxGridDistVal}
                inactive = {!searchParamsMemo.state}
                queryParam = {gridDistKey}
            />
            <Slider name="Number of buildings (rooftops)" 
                min={minBuilding}
                max={maxBuilding}
                includeGreaterThanMax={true}
                minVal = {minBuildingVal}
                setMinVal = {setMinBuildingVal}
                maxVal = {maxBuildingVal}
                setMaxVal = {setMaxBuildingVal}
                inactive = {!searchParamsMemo.state}
                diff={50}
                queryParam = {buildingKey}
            />
        </>);
}

export default FilterOffgrid;
