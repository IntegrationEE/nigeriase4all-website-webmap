import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';

import styles from "./Navbar.module.css";
import Se4allLogo from './Se4allLogo';
import MenuSelector from './MenuSelector';

import IconHamburger from '../Shared/Icons/IconHamburger';
import IconCross from '../Shared/Icons/IconCross';
import {NAVBAR_DATA} from '../../utils/consts';
import {getBackgroundColor} from '../../utils/dataHandler';

import crestLogo from "../../assets/images/logo-2-crest.webp";
import crestLogo2x from "../../assets/images/logo-2-crest-2x.webp";

function Navbar() {
    const currentPath =  useLocation().pathname;
    const {navbar,right,left,fullscreen,content,hamburger} = styles;
    const [toggleHamburger, setToggleHamburger] = useState(false);
    
    return (
        <header className={navbar}>
            <nav className={content}>
                <div className={left}> 
                    <Se4allLogo/>
                </div>
                <div className={right}>
                    <div className={`${toggleHamburger?styles.hamburgerVisible:styles.hamburgerHidden} ${fullscreen}`}>
                        {
                            NAVBAR_DATA.map((data,key)=>(
                                    <MenuSelector
                                        circle={data.circle}
                                        key={key}
                                        externalPath={data.path}
                                        {...data}
                                    />
                                ))
                        }
                        <div style={{backgroundColor: getBackgroundColor(currentPath), height: "14px", width: "100vw"}} className={`${styles.colorTransition} ${styles.hamburger}`}></div>
                    </div>
                    <button name='Hamburger Button' aria-label="Menu items" onClick={()=>setToggleHamburger(!toggleHamburger)} className={hamburger}>
                        {toggleHamburger?<IconCross color="black"/>:<IconHamburger color="black" padding={"10px"}/>}
                    </button>
                    <a title='Federal Ministry of Power Website URL' href="https://www.power.gov.ng/"  target='blank_'  className={`${styles.hideOnMobile}`}><img src={crestLogo} srcSet={`${crestLogo} 1x, ${crestLogo2x} 2x`} alt="Nigeria Crest" height="55px" width=''/></a>
                </div>
            </nav>
            <div style={{backgroundColor: getBackgroundColor(currentPath), height: "14px", width: "100%"}} className={`${styles.colorTransition} ${toggleHamburger?styles.hideOnMobile:''}`}></div>
        </header>
    )
}

export default Navbar
