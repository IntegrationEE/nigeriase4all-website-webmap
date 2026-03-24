import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';

import Headline from '../../Shared/Headline';
import IconQuestion from '../../Shared/Icons/IconQuestion';
import Overlay from './Overlay';

import styles from "./Questions.module.css";

import * as CONSTS from '../../../utils/consts';

import {getSelectedMap} from '../../../utils/dataHandler';

function Questions(props) {
    const {toggleView} = props;
    // const [searchParams] = useSearchParams();
    const pathname = useLocation().pathname;
    const selectedMap = getSelectedMap(pathname);
    const [displayQuestionOverlay, setDisplayQuestionOverlay] = useState(false)

    return (
        <div style={{width: "100%"}} className={`${!(toggleView==="show-layer")&&styles.showmobile} ${styles.layerControl}`}>
            <button onClick={()=>setDisplayQuestionOverlay(true)} className={styles.button}>
                {/* <Headline icon={<IconQuestion width="17" />} text="More about this map"/> <button style={{backgroundColor:"none", borderStyle:"none", padding: "20px 0 10px 0", color: getBackgroundColor(pathname)}}>Expand</button> */}
                <Headline icon={<IconQuestion width="16" color={CONSTS.COLOR.brandBlack} />} text="More about this map"/>
            </button>
            {displayQuestionOverlay&&<Overlay mapInfo={selectedMap.MORE_INFO} displayQuestionOverlay={displayQuestionOverlay} setDisplayQuestionOverlay={setDisplayQuestionOverlay}/>}
        </div>
    )
}

export default Questions;