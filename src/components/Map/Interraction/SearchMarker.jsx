import {useEffect, useRef, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import maplibregl from 'maplibre-gl';
import { searchParamsObj, statePointIsIn, toSlug } from '../../../utils/dataHandler';
import {getStateLayer} from '../../../services/clusterWfs.service';

function SearchMarker(props) {
  const {map, mapLoaded} = props;
  const [searchParams] = useSearchParams();
  const [states, setStates] = useState();
  const markerCoords = searchParamsObj(searchParams).marker;
  const markerState = searchParamsObj(searchParams).state;
  const mapCurrent = map.current;
  const marker = useRef(null);

  useEffect(()=>{
    getStateLayer().then(data => setStates(data))
  },[])

  const svgMarker = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="30"
  height="37.42126"
  version="1.1"
  viewBox="0 0 26.414 32.948"
>
  <g
    fillOpacity="1"
    stroke="none"
    strokeOpacity="1"
    transform="translate(-47.374 -89.623)"
  >
    <path
      style={{
        lineHeight: "normal",
        fontVariantLigatures: "normal",
        fontVariantPosition: "normal",
        fontVariantCaps: "normal",
        fontVariantNumeric: "normal",
        fontVariantAlternates: "normal",
        fontFeatureSettings: "normal",
        WebkitTextIndent: "0",
        textIndent: "0",
        WebkitTextAlign: "start",
        textAlign: "start",
        WebkitTextDecorationLine: "none",
        textDecorationLine: "none",
        WebkitTextDecorationStyle: "solid",
        textDecorationStyle: "solid",
        WebkitTextDecorationColor: "#000000",
        textDecorationColor: "#000000",
        WebkitTextTransform: "none",
        textTransform: "none",
        WebkitTextOrientation: "mixed",
        textOrientation: "mixed",
        whiteSpace: "normal",
        shapePadding: "0",
        isolation: "auto",
        mixBlendMode: "normal",
        solidColor: "#000000",
        solidOpacity: "1",
      }}
      fill="#fb0"
      fillRule="nonzero"
      strokeDasharray="none"
      strokeDashoffset="0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="4"
      strokeWidth="12.879"
      d="M49.916 0A49.916 49.916 0 000 49.916a49.916 49.916 0 0024.42 42.848l3.39 5.013 16.08 23.778c2.685 3.964 9.387 3.964 12.069 0l16.08-23.778 3.397-5.025a49.916 49.916 0 0024.396-42.836A49.916 49.916 0 0049.916 0z"
      baselineShift="baseline"
      clipRule="nonzero"
      color="#000"
      colorInterpolation="sRGB"
      colorInterpolationFilters="linearRGB"
      colorRendering="auto"
      direction="ltr"
      display="inline"
      dominantBaseline="auto"
      enableBackground="accumulate"
      fontFamily="sans-serif"
      fontSize="medium"
      fontStretch="normal"
      fontStyle="normal"
      fontVariant="normal"
      fontWeight="normal"
      imageRendering="auto"
      letterSpacing="normal"
      opacity="1"
      overflow="visible"
      shapeRendering="auto"
      textAnchor="start"
      textDecoration="none"
      textRendering="auto"
      transform="matrix(.26458 0 0 .26458 47.374 89.623)"
      vectorEffect="none"
      visibility="visible"
      wordSpacing="normal"
      writingMode="lr-tb"
    ></path>
    <g fill="#fff" transform="translate(-29.556 -.867)">
      <path
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeWidth="0.265"
        d="M89.803 96.681h4.075l-2.873 4.61h2.94l-7.55 9.021 2.539-6.548h-2.606z"
      ></path>
      <ellipse
        cx="91.79"
        cy="109.492"
        fillRule="nonzero"
        strokeDasharray="none"
        strokeMiterlimit="4"
        strokeWidth="0.552"
        opacity="1"
        rx="1.186"
        ry="1.221"
      ></ellipse>
    </g>
  </g>
</svg>`
  useEffect(()=>{
    if(!mapLoaded||!states) return;
    const el = document.createElement('div');
    el.innerHTML = svgMarker;
    if(marker.current){
      marker.current.remove()
      if(!markerCoords){return}
    }
    const latlon = [markerCoords.split(",")[1], markerCoords.split(",")[0]];
    const lonlat = [markerCoords.split(",")[0], markerCoords.split(",")[1]];
    const latlonFixed = toSlug(statePointIsIn([latlon[1], latlon[0]], states))===markerState?lonlat:latlon;
    marker.current= new maplibregl.Marker(el).setLngLat(latlonFixed).addTo(mapCurrent);
    mapCurrent.flyTo({center:latlonFixed,zoom:8})
  },[mapCurrent, mapLoaded, markerCoords, markerState, states, svgMarker])

  return <div ref={marker} />
}

export default SearchMarker;