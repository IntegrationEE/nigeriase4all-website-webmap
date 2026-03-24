import React from 'react';

import IconMagnify from '../../Shared/Icons/IconMagnify';
import Headline from '../../Shared/Headline';
import SearchState from './SearchState';
import SearchLocation from './SearchLocation';
import styles from '../Sidebar.module.css';

function Search(props) {
    // const {toggleSearch} = props;
    const {toggleView,map} = props;
    return (
        <div  className={`${!(toggleView==="search")&&styles.showmobile} ${styles.layerControl}`}> 
            <Headline icon={<IconMagnify width="17px"/>} text={"Search places"}/>               
            <SearchState/>
            {/* Global Search  */}
            <div style={{marginTop:'10px'}}>
               <SearchLocation  map={map}/>
            </div>
            
        </div> 
    )
}

export default Search
