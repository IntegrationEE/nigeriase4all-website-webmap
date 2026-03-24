import React from 'react';

import styles from './SurveyDataSection.module.css';

function SurveyDataGroup(props) {
    const {title, children} = props;

    return (
        <>
            <h4 style={{fontSize: "1.1em"}}>{title}</h4>
            <div style={{backgroundColor: 'white', borderRadius: "5px", padding: "10px"}}>
                <table className={`${styles.clusterInfoTable}`}>
                    <tbody>
                        {children}
                    </tbody>
                </table>
            </div>
        </>
  )
}

export default SurveyDataGroup;