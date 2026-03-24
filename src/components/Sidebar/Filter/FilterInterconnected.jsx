import React, {useState, useMemo, useEffect, useCallback, useRef} from 'react';
import { useSearchParams } from 'react-router-dom';

import Slider from '../../Shared/Slider/Slider';
import WarningIfModelledGrid from './WarningIfModelledGrid';

import {SELECTED_INTERCONNECTED} from '../../../utils/consts';
import {searchParamsObj} from '../../../utils/dataHandler';
import {getClusterInterconnected} from '../../../services/clusterWfs.service.js';

function FilterInterconnected(props) {
    const mountedRef = useRef(true);
    const {setClusterCount} = props;
    const filter = SELECTED_INTERCONNECTED.FILTER;
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParamsMemo = useMemo(()=> {return {...searchParamsObj(searchParams)}},[searchParams]);
    const selectedState = searchParamsMemo.state;
    const gridDistKey = "grid_dist";
    const minGridDist =  filter.GRID_DIST.MIN;
    const maxGridDist= filter.GRID_DIST.MAX;
    const [minGridDistVal, setMinGridDistVal] = useState(minGridDist);
    const [maxGridDistVal, setMaxGridDistVal] = useState(maxGridDist);
    const buildingKey = "buildings";
    const minBuilding = filter.BUILDING.MIN;
    const maxBuilding = filter.BUILDING.MAX;
    const [minBuildingVal, setMinBuildingVal] = useState(minBuilding);
    const [maxBuildingVal, setMaxBuildingVal] = useState(maxBuilding);
   
    const [stateData, setStateData] = useState([]);

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
      getClusterInterconnected(selectedState).then(res => {setStateData(res.features)});
    },[selectedState]);

    useEffect(()=>{
      if(!mountedRef){return};
      if(stateData.length===0) {return}
      const builMin = (cluster) => cluster.number_of_buildings >= Number(minBuildingVal);
      const builMax = (cluster) => (Number(maxBuildingVal)===Number(maxBuilding)?true:cluster.number_of_buildings < Number(maxBuildingVal));
      const gridMin = (cluster) => cluster.grid_dist_km >= Number(minGridDistVal);
      const gridMax = (cluster) => cluster.grid_dist_km < Number(maxGridDistVal);
      const filteredData = stateData.filter(el => (builMin(el.properties)&&builMax(el.properties)&&gridMin(el.properties)&&gridMax(el.properties)));
      setClusterCount(filteredData.length);
    }, [maxBuilding, maxBuildingVal, maxGridDist, maxGridDistVal, minBuildingVal, minGridDistVal, setClusterCount, stateData]);

    // cleanup function
    useEffect(()=>{
      return () => {
        mountedRef.current = false;
      }
    },[]);

    return (
        <>
            <Slider name="Distance to grid" 
                units="km"
                warning={<WarningIfModelledGrid/>}
                min={minGridDist}
                max={maxGridDist}
                minVal = {minGridDistVal}
                setMinVal = {setMinGridDistVal}
                maxVal = {maxGridDistVal}
                setMaxVal = {setMaxGridDistVal}
                inactive = {!searchParamsMemo.state}
                queryParam = {gridDistKey}
                diff={0.5}
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

export default FilterInterconnected;
