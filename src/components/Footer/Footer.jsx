import React from 'react'

import FooterElement from './FooterElement';

import{WEBSITE_BASE,WEBSITE_PATHS} from '../../utils/consts';

import styles from "./Footer.module.css";
import euLogo from "../../assets/images/logo-1-eu.webp";
import euLogo2x from "../../assets/images/logo-1-eu-2x.webp";
import gizLogo from "../../assets/images/logo-3-giz.webp";
import gizLogo2x from "../../assets/images/logo-3-giz-2x.webp";
import germancoopLogo from "../../assets/images/logo-4-ger-coop.webp";
import germancoopLogo2x from "../../assets/images/logo-4-ger-coop-2x.webp";
import se4allLogo from "../../assets/images/logo-5-blitz.png";


function Footer() {

    const {sectionOne,sectionOneContent,sectionTwo,footer,accreditation,privacyPolicy,footerContent,copyright} = styles;
    
    return (

        <>
            <section className={sectionOne}>

                <div className={sectionOneContent}>

                    <div>  
                        <FooterElement heading = {'OFFICE'} subHeading={'Federal Ministry of Power, POWER HOUSE 14 Zambezi Crescent, Maitama Abuja, Nigeria.'} icon={'info'} />
                    </div>
                

                    <div>  
                        <FooterElement heading = {'EMAIL'} subHeading={'info@pwh.gov.ng'} icon={'mail'}/>
                    </div>
                    
                    <div>  
                        <FooterElement heading = {'WEBSITE'} subHeading={'www.power.gov.ng'} icon={'web'}/>
                    </div>
                </div>

            </section>

            <section className={sectionTwo}>
                <div className={styles.financialSupport}>
                        <p>Provided with the financial support of</p>
                        <img src={euLogo} srcSet={`${euLogo} 1x, ${euLogo2x} 2x`} alt="EU Logo" height="100px" width=''/>
                        <img src={germancoopLogo} srcSet={`${germancoopLogo} 1x, ${germancoopLogo2x} 2x`} alt="German cooperation Logo" height="100px" width=''/>
                </div>
                <div className={styles.implementedBy}>
                        <p>Implemented by</p>
                        <img src={gizLogo} srcSet={`${gizLogo} 1x, ${gizLogo2x} 2x`} alt="GIZ Logo" height="50px" width=''/>
                </div>
            </section>

            <footer className={footer}>
                <div className={footerContent}>
                    <div className={privacyPolicy}>
                        <p><a href={`${WEBSITE_BASE}${WEBSITE_PATHS.TC}`} target='blank_' title='Terms of Service'>Terms of Service</a></p>
                        {/* <p><a href={`${CONSTS.WEBSITE_BASE}${CONSTS.WEBSITE_PATHS.}`} target='blank_'>Privacy Policy</a></p> */}
                    </div>
                    <div className={copyright}>
                        <p> © {new Date().getFullYear()} All Rights Reserved by <span><a href='mailto:nigeriase4all.gov.ng'>nigeriase4all.gov.ng</a></span></p>
                    </div>
                    <div className={accreditation}>
                        <div>
                        <p><a href={`${WEBSITE_BASE}${WEBSITE_PATHS.ACCREDITATION}`} target='blank_' title='Accreditation'>Accreditation</a></p>
                        </div>
                        <div>
                            <img src={se4allLogo} alt="Nigeria SE4ALL Logo" height="35px" width=''/>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
