import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './Mobile.module.css';

import IconMagnify from '../../Shared/Icons/IconMagnify';
import IconFilter from '../../Shared/Icons/IconFilter';
import IconLayers from '../../Shared/Icons/IconLayers';

import { getBackgroundColor } from '../../../utils/dataHandler';

function Mobile(props) {
    const {toggleView, setToggleView} = props;
    const pathname = useLocation().pathname;

    return (
        <div className={styles.container}>
           <button aria-label="Search" name='Search Button' onClick={()=>setToggleView("search")} style={{backgroundColor: (toggleView==="search")?getBackgroundColor(pathname):'white'}}><IconMagnify color={toggleView==="search"?"white":"black"}/></button>
           <button aria-label="Filter" name='Filter Button' onClick={()=>setToggleView("filter")} style={{backgroundColor: (toggleView==="filter")?getBackgroundColor(pathname):'white'}} className={styles.middle}><IconFilter color={toggleView==="filter"?"white":"black"}/></button>
           <button aria-label="Show layers" name='Show Layer Button' onClick={()=>setToggleView("show-layer")} style={{backgroundColor: (toggleView==="show-layer")?getBackgroundColor(pathname):'white'}} ><IconLayers color={toggleView==="show-layer"?"white":"black"}/></button> 
        </div>
    )
}

export default Mobile
