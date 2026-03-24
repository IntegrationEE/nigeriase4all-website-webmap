import React, { useRef } from 'react';

import { Link } from 'react-router-dom';

import useDetectOutsideClick from '../../../hooks/useDetectOutsideClick';

// import IconArrowDown from '../Icons/IconArrowDown';
import styles from './Dropdown.module.css';

// import * as CONSTS from '../../utils/consts';
// import * as PATHS from '../../utils/paths';

function Dropdown(props) {
    //https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
    const { searchSlug, buttonAction, selectedValue, itemsArray } = props;
    const {menuTrigger,menuContainer,menuActive,menu} = styles;
    
    const dropdownRef = useRef(null);

    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef,false);

    function onClick(e){
        // console.log("click event", e.target.value)
        if(buttonAction){buttonAction()}
        setIsActive(!isActive);
    }

    return (
        <h4 className={menuContainer}>
            <button name='Dropdown Button' onClick={onClick} className={menuTrigger}>
                {selectedValue}
            </button>
            <div ref={dropdownRef} className={`${menu} ${isActive?menuActive:''}`}>
                <ul>
                    {itemsArray.map((item)=>{return (<li key={item.path}><Link to={{pathname: item.path, search: searchSlug}}>{item.text}</Link></li>)})}
                </ul>
            </div>
        </h4>
    )
}

export default Dropdown