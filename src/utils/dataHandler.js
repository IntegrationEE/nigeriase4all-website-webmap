import {COLOR,SELECTED_SHS,SELECTED_POWER_SECTOR,SELECTED_OFFGRID,SELECTED_INTERCONNECTED} from "./consts";
import {INTERCONNECTED_MG_PATH,SOLAR_HOME_SYSTEM_PATH,POWER_SECTOR_PATH,OFFGRID_MG_PATH} from "./paths";
import booleanPointInPolygon  from '@turf/boolean-point-in-polygon';

export function stateNameModifier(statesBbox) {
  const statesFeatures = statesBbox.features;
  const statesModified = statesFeatures.map((state) => {
    let stateCoordinates = state.geometry.coordinates[0];
    let stateName = state.properties.name;
    return {
      name: stateName,
      nameSlug: stateName.replace(/\s+/g, "-").toLowerCase(),
      bbox: stateCoordinates,
      bounds: [
        [stateCoordinates[0][0], stateCoordinates[0][1]],
        [stateCoordinates[2][0], stateCoordinates[2][1]],
      ],
    };
  });
  const statesModifiedAtoZ = statesModified.sort((a, b) => {
    return a.nameSlug.localeCompare(b.nameSlug);
  });
  return statesModifiedAtoZ;
}

export function searchParamsObj(searchParams) {
  const object = Object.fromEntries([...searchParams]);
  return object;
}

export function searchParamsString(searchParams) {
  const object = Object.fromEntries([...searchParams]);
  let string = "";
  for (let key in object) {
    string = string + `&${key}=${object[key]}`;
  }
  const newString = string.replace(string[0], "?");
  return newString;
}

export function statePointIsIn([lat, lon], stateLayer){

  // const listOfStates = stateLayer?.features?.map(state=>({name: state?.properties?.adm1_en, point: booleanPointInPolygon([lat, lon], state)})).filter(state => state?.point);
  const listOfStates = stateLayer.features.map(state=>({name: state.properties.adm1_en, point: booleanPointInPolygon([lat, lon], state)})).filter(state => state.point);
  
  if(listOfStates.length===0) {return "No state"}
  return listOfStates[0].name;
}

export const getBackgroundColor = (pathname) => {
  if (
    pathname === INTERCONNECTED_MG_PATH ||
    pathname === OFFGRID_MG_PATH
  ) {
    return COLOR.miniGrids;
  }
  if (pathname === POWER_SECTOR_PATH) {
    return COLOR.powerSector;
  }
  if (pathname === SOLAR_HOME_SYSTEM_PATH) {
    return COLOR.solarHomeSystems;
  }
  return COLOR.brandGreen;
};

export const getSelectedMap = (pathname) => {
  if (pathname === INTERCONNECTED_MG_PATH) {
    return SELECTED_INTERCONNECTED;
  }
  if (pathname === OFFGRID_MG_PATH) {
    return SELECTED_OFFGRID;
  }
  if (pathname === POWER_SECTOR_PATH) {
    return SELECTED_POWER_SECTOR;
  }
  if (pathname === SOLAR_HOME_SYSTEM_PATH) {
    return SELECTED_SHS;
  }
  // return console.error("No valid map selected");
  return ''
};

export const toSlug = (text) => {return text.replace(/\s+/g, '-').toLowerCase()}