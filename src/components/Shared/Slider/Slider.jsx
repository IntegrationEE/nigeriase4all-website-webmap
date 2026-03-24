import React, {useCallback, useRef, useEffect} from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import styles from './Slider.module.css';

import {searchParamsObj, getBackgroundColor} from '../../../utils/dataHandler';

function Slider(props) {
    // Original code from here: https://codesandbox.io/s/multi-range-slider-react-js-ecwcr?from-embed=&file=/src/multiRangeSlider/MultiRangeSlider.js
    const { 
      min, max,
      minVal, setMinVal, maxVal, setMaxVal, 
      units,
      diff = 1, // if no div provided, set 1
      inactive = false, // if not provide set active by default
      queryParam,
      includeGreaterThanMax = false, // do not include greater than max by default
    } = props;
    const pathname = useLocation().pathname;

    // const onChange = ({ min, max }) => console.log(`min = ${min}, max = ${max}`);
    const minValRef = useRef(null);
    const maxValRef = useRef(null); 
    const range = useRef(null);

    const [searchParams, setSearchParams] = useSearchParams();

    // Set the initial minVal & maxVal on component mount
    // useEffect(()=>{
      // const searchParamsRefObj = searchParamsObj(searchParamsRef.current);
      // check if the min value is present
      // if(searchParamsRefObj[`${queryParam}_min`]){
      //   console.log("its there")
      //   setMinVal(searchParamsRefObj[`${queryParam}_min`])
      // }
    // },[queryParam, setMinVal])

    // Set width of the range to decrease from the left side
    useEffect(() => {
      // if(inactive){return}
      if (maxValRef.current) {
        const minPercent = Math.round(((minVal - min) / (max - min)) * 100);
        const maxPercent = Math.round(((+maxValRef.current.value - min) / (max - min)) * 100);
        // const minPercent = getPercent(minVal);
        // const maxPercent = getPercent(+maxValRef.current.value); 
        if (range.current) {
          range.current.style.left = `${minPercent}%`;
          range.current.style.width = `${maxPercent - minPercent}%`;
        }
      }
      }, [minVal, max, min]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
      // if(inactive){return}
      if (minValRef.current) {
        const minPercent = Math.round(((+minValRef.current.value - min) / (max - min)) * 100);
        const maxPercent = Math.round(((maxVal - min) / (max - min)) * 100);
        // const minPercent = getPercent(+minValRef.current.value);
        // const maxPercent = getPercent(maxVal);
        if (range.current) {
          range.current.style.width = `${maxPercent - minPercent}%`;
        }
      }
      }, [maxVal, max, min]);
    
    // Get min and max values when their state changes
    // useEffect(() => {
    //     onChange({ min: minVal, max: maxVal });
    // }, [minVal, maxVal]);

    const handleSliderMinChange = useCallback((e) => {
        const value = Math.min(+e.target.value, (Number(maxVal) - Number(diff)).toFixed(1));
        setMinVal(value);
        e.target.value = value.toString();
        // setSearchParams({...searchParamsObj(searchParams), [`${queryParam}_min`]: Number(value)})
      }, [maxVal, setMinVal, diff]);
  
      const handleSliderMaxChange = useCallback((e) => {
        // console.log(+e.target.value, +(minVal + diff))
        const value = Math.max(+e.target.value, (Number(minVal) + Number(diff)).toFixed(1));
        setMaxVal(value);
        e.target.value = value.toString();
        // setSearchParams({...searchParamsObj(searchParams), [`${queryParam}_max`]: Number(value)})
      }, [minVal, setMaxVal, diff]);
    
    const changeSearchParamsMin = useCallback((e) => {
      const value = Math.min(+e.target.value, (Number(maxVal) - Number(diff)).toFixed(1));
      setSearchParams({...searchParamsObj(searchParams), [`${queryParam}_min`]: Number(value)})
    }, [diff, maxVal, queryParam, searchParams, setSearchParams])

    const changeSearchParamsMax = useCallback((e) => {
      const value = Math.max(+e.target.value, (Number(minVal) + Number(diff)).toFixed(1));
      setSearchParams({...searchParamsObj(searchParams), [`${queryParam}_max`]: Number(value)})
    }, [diff, minVal, queryParam, searchParams, setSearchParams])

    return (
        <div className={`${styles.container} ${inactive&&styles.inactive}`} style={{ position: "relative"}}>
            <div style={{display: "flex", alignItems: "center"}}>
              <div>{props.name}</div>
              {props.warning}
            </div>
            <div className={styles.subContainer}>
              <div className={styles.thumbWrapper}>
                <input name='slider' disabled={inactive} type="range" min={min} max={max} step={diff} value={minVal} ref={minValRef} className={`${styles.thumb} ${styles.thumbZindex3} ${minVal>(max-10)&&styles.thumbZindex5}`} onChange={handleSliderMinChange} onTouchEnd={changeSearchParamsMin} onMouseUp={changeSearchParamsMin}/>
                <input name='slider' disabled={inactive} type="range" min={min} max={max} step={diff} value={maxVal} ref={maxValRef} className={`${styles.thumb} ${styles.thumbZindex4}`}  onChange={handleSliderMaxChange} onTouchEnd={changeSearchParamsMax} onMouseUp={changeSearchParamsMax}/>
              </div>
              <div className={`${styles.slider}`}>
                  <div className={styles.sliderTrack} />
                  <div ref={range} className={`${inactive&&styles.inactiveRange} ${styles.sliderRange}`} style={{ background: getBackgroundColor(pathname)}} />
                  <div className={`${inactive&&styles.inactive} ${styles.sliderLeftValue}`}>{minVal}{units&&units}</div>
                  <div className={styles.sliderRightValue}>{maxVal}{units&&units}{((Number(maxVal)===max)&&includeGreaterThanMax)&&"+"}</div>
              </div>
            </div>
        </div>
    )
}

export default Slider;