import React, {useState, useEffect, useCallback, useRef} from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import styles from './Search.module.css';

import IconTick from '../../Shared/Icons/IconTick';
import StateSuggestions from './StateSuggestions';
import CloseButton from '../../Shared/CloseButton/CloseButton';

import useDetectOutsideClick from '../../../hooks/useDetectOutsideClick';

// import UTILS
import * as CONSTS from '../../../utils/consts';
// import * as PATHS from '../../../utils/paths';
import {searchParamsObj, getBackgroundColor, toSlug} from '../../../utils/dataHandler';

function SearchState() {
    const [searchParams, setSearchParams] = useSearchParams();
    const stateFinder =(state,paramsState)=>state?.replace(/\s+/g, '-')?.toLowerCase() === paramsState;
    const paramsObj = searchParamsObj(searchParams);
    const paramsState=paramsObj?.state;
    const {container,inputcontainer,search,input,bold} = styles;
    const dropdownRef = useRef(null);
    const [display, setDisplay] = useDetectOutsideClick(dropdownRef, false);

    //the search text input by users
    const [searchTerm, setSearchTerm] =useState('');

    const [searchResults, setSearchResults] = useState([]);
    const [highlightedResult, setHighlightedResult ] = useState(0);

    const pathname=useLocation().pathname;
    // update the SELECTED STATE if the search params state change
    useEffect(()=>{
        if(CONSTS.STATE_NAMES.find(state=>stateFinder(state,paramsState))){
            setSearchTerm(CONSTS.STATE_NAMES.find(state=>stateFinder(state,paramsState)))
            setDisplay(false);
        }
        if(!paramsState){
            setSearchTerm('');
            return
        }
        // setSearchTerm(CONSTS.STATE_NAMES.find(state=>stateFinder(state,paramsObj)));
    },[paramsState, setDisplay])
    
    //handles the click event of the selected items in the suggestion container
    const handleClick = (event)=>{
        const searchTerm = event.target.innerText;
        setSearchTerm(searchTerm);
        const stateLookup = CONSTS.STATE_NAMES.find(state =>state?.toLowerCase() === searchTerm?.toLowerCase());
        if (!stateLookup){
            setDisplay(true);
        }else{
            setDisplay(false);
            setSearchParams({...searchParamsObj(searchParams), state: toSlug(stateLookup)})
        }
    }

    const handleChange = useCallback((e)=>{
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);
        if(!searchTerm){
            setSearchResults(CONSTS.STATE_NAMES);
            setDisplay(true);
            return
        }
        const stateLookup = CONSTS.STATE_NAMES.find(state =>state?.toLowerCase() === searchTerm?.toLowerCase());
        const results=CONSTS.STATE_NAMES?.filter(state =>
            (state?.toLowerCase()?.startsWith(searchTerm?.toLowerCase()))
        );
        //update the list with the filtered states
        setSearchResults(results);
        // if the search term is in the state list or not
        if (!stateLookup){
            setDisplay(true);
        }else{
            setDisplay(false);
            setSearchParams({...searchParamsObj(searchParams), state: toSlug(stateLookup)})
        }
    },[searchParams, setDisplay, setSearchParams]);

    // reset to default 
    const clearInput = useCallback(()=>{
        setDisplay(false);
        setHighlightedResult(0);
        setSearchResults([]);
        let {state, ...searchParamsNoState} = searchParamsObj(searchParams);
        setSearchParams(searchParamsNoState); 
        setSearchTerm("");        
    },[searchParams, setDisplay, setSearchParams]) 

    function handleKeyDown(e){
        if(display && e.key==="Enter"){
            const searchTerm = searchResults[highlightedResult];
            setSearchTerm(searchTerm)
            const stateLookup = CONSTS.STATE_NAMES.find(state =>state?.toLowerCase() === searchTerm?.toLowerCase());
            if (!stateLookup){
                setDisplay(true);
            }else{
                setDisplay(false);
                setSearchParams({...searchParamsObj(searchParams), state: toSlug(stateLookup)})
            }
        }
        if(display && e.key==="ArrowDown"){
            setHighlightedResult(h => h < searchResults.length-1?h+1:h)
        }
        else if(display && e.key==="ArrowUp"){
            setHighlightedResult(h => h!==0?(h-1):h)
        }
        if(!display){
            setHighlightedResult(0);
        }
    }

    return (
        <div ref={dropdownRef}  className={container}>
            <div className={search}>
                <div className={inputcontainer}>
                    {paramsState&&<IconTick width="14px" color={getBackgroundColor(pathname)}/>}
                    <input
                        className={`${input} ${paramsState&&bold}`}
                        style={{ color: paramsState&&getBackgroundColor(pathname)}}
                        name="Search state and location"
                        placeholder="Type a state name..."
                        value={searchTerm}
                        onChange={handleChange}
                        onSelect={handleChange}
                        onKeyDown={handleKeyDown}
                        autoComplete="off"
                    />
                </div>
                {paramsState&&<CloseButton onClick={clearInput} name='Clear state input'/>}
            </div>
            <div className={`${styles.menu} ${display?styles.menuActive:''}`}>
                <StateSuggestions itemsArray={searchResults} highlightedResult={highlightedResult} setHighlightedResult={setHighlightedResult} handleClick={handleClick}/>
            </div>
        </div>
    )
}

export default SearchState
