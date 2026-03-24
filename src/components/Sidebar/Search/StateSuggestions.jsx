import React from 'react';

import styles from './StateSuggestions.module.css';

function StateSuggestions(props) {

    const {itemsArray, highlightedResult, setHighlightedResult,handleClick} = props;
    
    const {menu,menuContainer,hover,noresults} = styles;

    const handleMouseEnter = (result)=>{
        setHighlightedResult(itemsArray.findIndex(state=>state === result))
    };

    return (
        <div className={menuContainer}>
            <div className={menu}>
                <ul>
                    {itemsArray.map((result,key) =>
                        <li style={{padding:"5px 10px"}} className={(itemsArray[highlightedResult]===result)?hover:undefined} key={key}
                            onMouseOver={()=>handleMouseEnter(result)} onClick={event=>handleClick(event)}>
                                {result}
                        </li>
                    )}
                    {itemsArray.length===0&&<li><i className={noresults}>No search results</i></li>}
                </ul>
            </div>
        </div>
    )
}

export default StateSuggestions