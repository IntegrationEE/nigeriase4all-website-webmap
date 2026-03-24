import React, {useState, useCallback, useEffect} from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import styles from './Search.module.css';
import suggestionStyles from './StateSuggestions.module.css';

import IconTick from '../../Shared/Icons/IconTick';
import CloseButton from '../../Shared/CloseButton/CloseButton';

import { NIGERIA_CONTEXT } from '../../../utils/consts';

import { geocoder } from '../../../services/geocoder';
import {searchParamsObj, getBackgroundColor, statePointIsIn} from '../../../utils/dataHandler';
import {getStateLayer} from '../../../services/clusterWfs.service';

function SearchLocation() {
    const {container,inputcontainer,search,input} = styles;
    const {menu,menuContainer,hover,noresults} = suggestionStyles;
    const pathname=useLocation().pathname;
    const [searchParams, setSearchParams] = useSearchParams();
    //the text within the input
    const [inputText, setInputText] = useState('');
    const [infoText, setInfoText] = useState('');
    //if a GPS coordinate is inputted
    // const [inputGPS, setInputGPS] = useState([]);
    const [states, setStates] = useState();
    //the selected result
    const [selectedSearchResult, setSelectedSearchResult] =useState(null);
    //the result of the search query
    const [searchResults, setSearchResults] = useState([]);
    //the highlighted result when using the arrow keys
    const [highlightedResult, setHighlightedResult ] = useState(0);

    useEffect(()=>{
        getStateLayer().then(data => setStates(data))
    },[])

    const handleChange = (e)=>{
        setInputText(e.target.value);
        setSearchResults([]);
        setSelectedSearchResult(null);
        if(e.target.value===""){
            let {marker, ...searchParamsNoMarker} = searchParamsObj(searchParams);
            setSearchParams(searchParamsNoMarker);
            return
        }
        if(e.target.value!==""){
            const inputNums = e.target.value.match(/[+-]?\d+(\.\d+)?/g);
            if(inputNums?.length>1){
                setInfoText("GPS coordinates should be seperated with a comma")
                if(inputNums.length > 2) {
                    setInfoText("GPS coordinates should be 2 numbers in decimal form")
                }
                if(inputNums.length === 2 &&  e.target.value.includes(",")) {
                    const correctLat = (inputNums[0] < 90 && inputNums[0] > -90);
                    const correctLon = (inputNums[1] < 180 && inputNums[1] > -180);
                    const nigeriaLat = (inputNums[0] < NIGERIA_CONTEXT.bbox[1][1] && inputNums[0] > NIGERIA_CONTEXT.bbox[0][1]);
                    const nigeriaLon = (inputNums[0] < NIGERIA_CONTEXT.bbox[1][0] && inputNums[0] > NIGERIA_CONTEXT.bbox[0][0]);
                    if(!correctLat) {setInfoText("Latitude should be between -90 and +90")}
                    if(!correctLon) {setInfoText("Longitude should be between -180 and +180")}
                    if(correctLon && correctLat && (!nigeriaLat || !nigeriaLon)){setInfoText("Coordinate is not within Nigeria")}
                    if(correctLon && correctLat && nigeriaLat && nigeriaLon){
                        const point = [parseFloat(inputNums[0]), parseFloat(inputNums[1])];
                        const statePointIsInName = statePointIsIn([point[0], point[1]], states);
                        setSearchResults([{display_name: `${point[0]}, ${point[1]} in ${statePointIsInName}`, lat:point[0], lon:point[1], address: {state: statePointIsInName}}])
                        // selectResult({lat:point[0], lon:point[1], address: {state: listOfStates[0].name}})
                    }
                }
            }
            else{setInfoText("Press enter to view results")}
        };
    };

     //handles the click event of the selected items in the suggestion container
    const handleClick = (result)=>{
        selectResult(result)
    }

    const handleMouseOver = useCallback((result)=>{
        if(searchResults.length >= 1 ){
            setHighlightedResult(searchResults.findIndex(resultObject => resultObject.display_name === result.display_name));
        }
    },[searchResults]);

    // reset to default 
    const clearInput = ()=>{
        setHighlightedResult(0);
        setSearchResults([]);
        setSelectedSearchResult(null);
        setInputText("");
        let {marker, ...searchParamsNoMarker} = searchParamsObj(searchParams);
        setSearchParams(searchParamsNoMarker);
    }

    function handleKeyDown(e){
        if(e.key ==="Enter"){
            if(!inputText){return};
            if(searchResults.length!==0){
                const resultObject = searchResults[highlightedResult];
                selectResult(resultObject);
                return;
            }
            // console.log("SEND REQUEST")
            geocoder(inputText).then(res => {
                setSearchResults(res);
                if(res.length===0){setInfoText("No search results")}
            });
        }
        if(searchResults.length!==0&&e.key==="ArrowDown"){
            setHighlightedResult(h => h < searchResults.length-1?h+1:h)
        }
        else if(searchResults.length!==0&&e.key==="ArrowUp"){
            setHighlightedResult(h => h!==0?(h-1):h)
        }
    }

    function selectResult(resultObject){
        setSearchResults([]);
        setSelectedSearchResult(resultObject);
        const {lat,lon, address} = resultObject;
        setSearchParams({...searchParamsObj(searchParams), marker: `${lat},${lon}`, state: address.state?.replace(" State", "").replace(/\s+/g, '-')?.toLowerCase()});
        setInputText(resultObject.display_name);
    }

    return (
        <div className={container}>
            <div className={search}>
                <div className={inputcontainer}>
                    {selectedSearchResult&&<IconTick width="14px" color={getBackgroundColor(pathname)}/>}
                    <input
                        className={`${input} ${selectedSearchResult&&styles.bold}`}
                        style={{ color: selectedSearchResult&&getBackgroundColor(pathname)}}
                        name="Search for location"
                        placeholder="Search location by name or GPS..."
                        value={inputText}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        autoComplete="off"
                    />
                </div>
                {inputText&&<CloseButton buttonName='Clear Input Button' onClick={clearInput}/>}
            </div>
        {inputText&&!selectedSearchResult&&<div className={menuContainer}>
            <div className={menu}>
                <ul>
                    {searchResults.map((result,key) =>
                        <li className={(searchResults[highlightedResult]===result)?hover:undefined} key={key}
                            onClick={()=>handleClick(result)} onMouseOver={()=>handleMouseOver(result)}>
                            {result.display_name}
                        </li>
                    )}
                    {searchResults.length===0&&<li><i className={noresults}>{infoText}</i></li>}
                </ul>
            </div>
        </div>}
    </div>
    )
}

export default SearchLocation;
