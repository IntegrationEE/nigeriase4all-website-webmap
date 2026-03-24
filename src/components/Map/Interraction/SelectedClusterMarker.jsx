import {useEffect, useRef} from 'react';
// import { useSearchParams } from 'react-router-dom';

import maplibregl from 'maplibre-gl';
import { COLOR } from '../../../utils/consts';

// import { searchParamsObj } from '../../../utils/dataHandler';

function SelectedClusterMarker(props) {
  const {map, mapLoaded, selectedCluster} = props;
  // const [searchParams] = useSearchParams();
  const mapCurrent = map.current;
  const clusterMarker = useRef(null);

  const width = "44";
  const strokeWidth = "6";
  const svgMarker = `<svg
    xmlns="http://www.w3.org/2000/svg"
    width=${width}
    height=${width}
    version="1.1"
    viewBox="-5 -4 30 15"
  >
    <g transform="translate(-50 -129)">
      <circle
        cx="60"
        cy="135"
        r="8"
        fill="none"
        fillOpacity="1"
        fillRule="nonzero"
        stroke=${COLOR.colorSecondaryYellowDark}
        stroke-dasharray="none"
        stroke-miterlimit="10"
        stroke-opacity="0.6"
        stroke-width=${strokeWidth}
        opacity="1"
      ></circle>
    </g>
  </svg>`;

  useEffect(()=>{
    if(!mapLoaded) return;
    const el = document.createElement('div');
    el.innerHTML = svgMarker;
    const markerLatLon = selectedCluster?._geometry?.coordinates;
    if(!markerLatLon&&clusterMarker.current){
      clusterMarker.current.remove()
      return;
    }
    if(clusterMarker.current){clusterMarker.current.remove()}
    clusterMarker.current= new maplibregl.Marker(el).setLngLat(markerLatLon).addTo(mapCurrent);
  },[mapCurrent, mapLoaded, selectedCluster, svgMarker])

  return <div ref={clusterMarker} />
}

export default SelectedClusterMarker