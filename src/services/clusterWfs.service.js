import * as CONSTS from "../utils/consts";
import { fetchData } from "./fetcher";

const stateSlugToName = CONSTS.STATE_NAMES.reduce((acc, curr) => {
    acc[curr.replace(/\s+/g, '-').toLowerCase()]=curr;
    return acc
  },{})

export async function getClusterOffgrid(stateSlug) {
    const request = `${CONSTS.SE4ALL_WFS.start}cluster_offgrid_simple&&cql_filter=state_name='${stateSlugToName[stateSlug]}'%20AND%20building_count>=${CONSTS.SELECTED_OFFGRID.FILTER.BUILDING.MIN}%20AND%20(grid_dist_km>=${CONSTS.SELECTED_OFFGRID.FILTER.GRID_DIST.MIN}%20OR%20grid_dist_km%20IS%20NULL)${CONSTS.SE4ALL_WFS.end}`;
    return await fetchData(request)
}

export async function getClusterInterconnected(stateSlug) {
    const request = `${CONSTS.SE4ALL_WFS.start}cluster_all_simple_new&&cql_filter=state_name='${stateSlugToName[stateSlug]}'%20AND%20number_of_buildings>=${CONSTS.SELECTED_INTERCONNECTED.FILTER.BUILDING.MIN}%20AND%20(grid_dist_km<${CONSTS.SELECTED_INTERCONNECTED.FILTER.GRID_DIST.MAX})${CONSTS.SE4ALL_WFS.end}`;
    return await fetchData(request)
}

export async function getClusterPowerSector(stateSlug) {
    const request = `${CONSTS.SE4ALL_WFS.start}cluster_all_simple_new&&cql_filter=state_name='${stateSlugToName[stateSlug]}'%20AND%20area_km2>=${CONSTS.SELECTED_POWER_SECTOR.FILTER.AREA.MIN}${CONSTS.SE4ALL_WFS.end}`;
   return await fetchData(request)
}

export async function getClusterShs(stateSlug) {
    const request = `${CONSTS.SE4ALL_WFS.start}cluster_all_simple_new&&cql_filter=state_name='${stateSlugToName[stateSlug]}'%20AND%20(grid_dist_km>=${CONSTS.SELECTED_SHS.FILTER.GRID_DIST.MIN})${CONSTS.SE4ALL_WFS.end}`;
    return await fetchData(request)
}

export async function getMarketsShs(stateSlug) {
    const request = `${CONSTS.SE4ALL_WFS.start}grid3_market_edited&&cql_filter=adm1_en='${stateSlugToName[stateSlug]}'${CONSTS.SE4ALL_WFS.end}`;
    return await fetchData(request)
}

export async function getClusterOffgridSurvey(stateSlug) {
    const request = `${CONSTS.SE4ALL_WFS.start}cluster_offgrid_survey&cql_filter=state_name='${stateSlugToName[stateSlug]}'${CONSTS.SE4ALL_WFS.end}`;
    return await fetchData(request)
}

export async function getStateLayer() {
    const request = `${CONSTS.SE4ALL_WFS.start}nigeria_state_boundaries${CONSTS.SE4ALL_WFS.end}`;
    return await fetchData(request)
}

