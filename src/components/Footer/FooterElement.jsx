import styles from "./Footer.module.css";
import React from "react";
import IconInfo from '../Shared/Icons/IconInfo';
import IconMail from '../Shared/Icons/IconMail';
import IconWeb from '../Shared/Icons/IconWeb';

const {container,contentContainer} = styles;


const FooterElement=({heading,subHeading,icon}) =>(

    <div className={container}>
        <div>
            {
               icon === 'info' && <IconInfo width='22px' />
            }
            {   
                icon === 'web' && <IconWeb width='22px' />
            }
            {
                 icon === 'mail' && <IconMail width='22px' />
            }
        </div>
        <div className={contentContainer}>
            <h3>{heading}</h3> 
            {
                icon !=='info' ? <h4><a title={heading} target='blank_' href={`${ icon==='mail' ? `mailto:${subHeading}` : `https://${subHeading}`}`}>{subHeading}</a></h4> :<h4>{subHeading}</h4>
            }
        </div>  
    </div>
)

export default FooterElement;