import React, {useCallback, useRef, useEffect} from 'react';

import { useSearchParams, useLocation } from 'react-router-dom';
import {searchParamsObj, getBackgroundColor} from '../../../utils/dataHandler';

import styles from './Slider.module.css';

function SliderSingle(props) {
    // Original code from here: https://codesandbox.io/s/multi-range-slider-react-js-ecwcr?from-embed=&file=/src/multiRangeSlider/MultiRangeSlider.js
    const { 
      min, max,
      maxVal, setMaxVal, 
      units,
      diff = 1, // if no div provided, set 1
      inactive = false, // if not provide set active by default
      queryParam,
      includeGreaterThanMax = false, // do not include greater than max by default
    } = props;
    const pathname = useLocation().pathname;

    // const onChange = ({ min, max }) => console.log(`min = ${min}, max = ${max}`);
    const maxValRef = useRef(null); 
    const range = useRef(null);

    const [searchParams, setSearchParams] = useSearchParams();

    // Set width of the range to decrease from the left side
    useEffect(() => {
      // if(inactive){return}
      if (maxValRef.current) {
        const maxPercent = Math.round(((+maxValRef.current.value - min) / (max - min)) * 100);
        // const minPercent = getPercent(minVal);
        // const maxPercent = getPercent(+maxValRef.current.value); 
        if (range.current) {
          range.current.style.width = `${maxPercent}%`;
        }
      }
      }, [maxVal, max, min]);

    
    // Get min and max values when their state changes
    // useEffect(() => {
    //     onChange({ min: minVal, max: maxVal });
    // }, [minVal, maxVal]);
  
      const handleSliderChange = useCallback((e) => {
        const value = +e.target.value;
        setMaxVal(value);
        e.target.value = value.toString();
        // setSearchParams({...searchParamsObj(searchParams), [queryParam]: Number(value)})
      }, [setMaxVal]);

      const changeSearchParams = useCallback((e)=>{
        const value = +e.target.value;
        setSearchParams({...searchParamsObj(searchParams), [queryParam]: Number(value)})
      }, [queryParam, searchParams, setSearchParams])

    return (
        <div className={`${styles.container} ${inactive&&styles.inactive}`}>
            <div style={{display: "flex", alignItems: "center"}}>
              <div>{props.name}</div>
              {props.warning}
            </div>
            <div className={styles.subContainer}>
              <div className={styles.thumbWrapper}>
                <input name='slider' disabled={inactive} type="range" min={min} max={max} step={diff} value={maxVal} ref={maxValRef} className={`${styles.thumb} ${styles.thumbZindex4}`} onChange={handleSliderChange} onTouchEnd={changeSearchParams} onMouseUp={changeSearchParams}/>
              </div>
              <div className={`${styles.slider}`}>
                  <div className={styles.sliderTrack} />
                  <div ref={range} className={`${inactive&&styles.inactiveRange} ${styles.sliderRange}`} style={{ background: getBackgroundColor(pathname)}} />
                  <div className={`${inactive&&styles.inactive} ${styles.sliderLeftValue}`}>{min}{units&&units}</div>
                  <div className={styles.sliderRightValue}>{maxVal}{units&&units}{((Number(maxVal)===max)&&includeGreaterThanMax)&&"+"}</div>
              </div>
            </div>
        </div>
    )
}

export default SliderSingle;