import React, { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from '../Controls.module.css';

import * as CONSTS from '../../../../utils/consts';
import { stateNameModifier, searchParamsObj, toSlug } from '../../../../utils/dataHandler';

import SurveyDataSection from './SurveyDataSection';
import SurveyDataGroup from './SurveyDataGroup';

import IconMagnify from '../../../Shared/Icons/IconMagnify';
import IconGridMastMv from '../../../Shared/Icons/IconGridMastMv';
import IconBasket from '../../../Shared/Icons/IconBasket';
import IconNetworkSignal from '../../../Shared/Icons/IconNetworkSignal';
import IconCar from '../../../Shared/Icons/IconCar';
import Icon4x4 from '../../../Shared/Icons/Icon4x4';
import IconMotorbike from '../../../Shared/Icons/IconMotorbike';
import IconBus from '../../../Shared/Icons/IconBus';
import IconTruck from '../../../Shared/Icons/IconTruck';
import IconSolar from '../../../Shared/Icons/IconSolar';
import IconTractor from '../../../Shared/Icons/IconTractor';
import IconNaira from '../../../Shared/Icons/IconNaira';
import IconGenerator from '../../../Shared/Icons/IconGenerator';
import IconOil from '../../../Shared/Icons/IconOil';
import IconFuelPump from '../../../Shared/Icons/IconFuelPump';
import IconMobile from '../../../Shared/Icons/IconMobile';
import IconBank from '../../../Shared/Icons/IconBank';
import IconSchool from '../../../Shared/Icons/IconSchool';
import IconHealth from '../../../Shared/Icons/IconHealth';
import IconSpanner from '../../../Shared/Icons/IconSpanner';
import IconChair from '../../../Shared/Icons/IconChair';
import IconShoe from '../../../Shared/Icons/IconShoe';
import IconShopping from '../../../Shared/Icons/IconShopping';
import IconDress from '../../../Shared/Icons/IconDress';
import IconScissors from '../../../Shared/Icons/IconScissors';
import CloseButton from '../../../Shared/CloseButton/CloseButton';
import ControlBox from '../../../Shared/ControlBox/ControlBox';
import IconPlaceOfWorship from '../../../Shared/Icons/IconPlaceOfWorship';

function PopupClusterData(props) {
    const { selectedCluster, setSelectedCluster, map } = props;
    const [viewAllData, setViewAllData] = useState(false);
    const [togglePanToCluster, setTogglePanToCluster] = useState(true);
    const [searchParams] = useSearchParams();
    const selectedState = searchParamsObj(searchParams).state;
    const statesModified = stateNameModifier(CONSTS.ADM1BBOX);

    const panToCluster = useCallback((clusterCoordinates) => {
        const selectedStateData = statesModified.find(states => toSlug(states.name) === selectedState);
        togglePanToCluster && map.current.flyTo({ center: clusterCoordinates, zoom: 15 });
        !togglePanToCluster && map.current.fitBounds(selectedStateData.bounds, {
            padding: { top: 10, bottom: 25, left: 15, right: 5 }
        });
        setTogglePanToCluster(!togglePanToCluster);
    }, [map, selectedState, statesModified, togglePanToCluster]);
    const { brandBlack, brandGrayLight, brandGraySemi } = CONSTS.COLOR;

    const cP = selectedCluster?.properties;
    const clusterCoordinates = selectedCluster?.toJSON().geometry.coordinates;
    const marketInformation = [
        ["Monday", cP?.market_monday, cP?.count_traders_monday],
        ["Tuesday", cP?.market_tuesday, cP?.count_traders_tuesday],
        ["Wednesday", cP?.market_wednesday, cP?.count_traders_wednesday],
        ["Thursday", cP?.market_thursday, cP?.count_traders_thursday],
        ["Friday", cP?.market_friday, cP?.count_traders_friday],
        ["Saturday", cP?.market_saturday, cP?.count_traders_saturday],
        ["Sunday", cP?.market_sunday, cP?.count_traders_sunday],];
    const gridAssetInformation = [];
    if (cP?.grid_poles_presence === "true") { gridAssetInformation.push("Poles") }
    if (cP?.grid_cable_presence === "true") { gridAssetInformation.push("Cable") }
    if (cP?.grid_transformer_presence === "true") { gridAssetInformation.push("Transformer") }

    return (
        <div className={`${styles.visibilityHidden} ${selectedCluster ? styles.visibilityVisible : ''}`}>
            <ControlBox shadow={true}>
                <div style={{ minWidth: "250px" }} className={`${styles.controlBoxContent}`}>
                    <CloseButton alignRight={true} buttonName="Close cluster information" onClick={() => setSelectedCluster(null)} color={CONSTS.COLOR.brandGrayDark} />
                    <table className={`${styles.clusterInfoTable}`}>
                        <tbody>
                            {cP?.community_name &&
                                <tr>
                                    <th><b>Settlement name:</b></th>
                                    <td><b>{cP.community_name}</b></td>
                                </tr>}
                            <tr>
                                <th><b>Cluster ID:</b></th>
                                {cP?.cluster_offgrid_id && <td>{`#${cP.cluster_offgrid_id}`}</td>}
                                {cP?.fid && <td>{`#${cP.fid}`}</td>}
                            </tr>
                            {cP?.lga_name && <tr>
                                <th><b>LGA:</b></th>
                                <td>{cP.lga_name}</td>
                            </tr>}
                            <tr>
                                <th><b>State:</b></th>
                                <td>{cP?.state_name}</td>
                            </tr>
                            <tr>
                                <td colSpan="100%" className={`${styles.horizontalRule}`}></td>
                            </tr>
                            {cP?.building_count && <tr>
                                <td><b>Building (rooftop) count</b></td>
                                <td>{cP?.building_count}</td>
                            </tr>}
                            {cP?.number_of_buildings && <tr>
                                <td><b>Builing (rooftop) count</b></td>
                                <td>{cP?.number_of_buildings}</td>
                            </tr>}
                            {cP?.area_km2 && <tr>
                                <td><b>Area (km²)</b></td>
                                <td>{cP?.area_km2.toFixed(2)}</td>
                            </tr>}
                            <tr>
                                <td><b>Distance to grid (km)</b></td>
                                <td>{(!cP?.grid_dist_km && cP?.grid_dist_km !== 0) ? "> 50.00" : cP?.grid_dist_km?.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td><b>Coordinates (lat, lon)</b></td>
                                <td>{`${selectedCluster?._geometry.coordinates[1].toFixed(3)}, ${selectedCluster?._geometry.coordinates[0].toFixed(3)}`}</td>
                            </tr>
                        </tbody>
                    </table>
                    {!cP?.community_name && cP?.building_count && <>
                        <table className={`${styles.clusterInfoTable}`}>
                            <tbody>
                                <SurveyDataSection icon={<IconSchool width="20" color={!cP?.number_of_schools ? brandGraySemi : brandBlack} />} contentArray={[["School(s):", cP?.number_of_schools ? cP?.number_of_schools : 0]]} />
                                <SurveyDataSection icon={<IconHealth width="20" color={!cP?.number_of_healthcenters ? brandGraySemi : brandBlack} />} contentArray={[["Health facilities:", cP?.number_of_healthcenters ? cP?.number_of_healthcenters : 0]]} />
                                <SurveyDataSection icon={<IconBasket width="20" color={!cP?.number_of_markets ? brandGraySemi : brandBlack} />} contentArray={[["Markets:", cP?.number_of_markets ? cP?.number_of_markets : 0]]} />
                                <SurveyDataSection icon={<IconPlaceOfWorship width="20" color={!cP?.number_of_religious_buildings ? brandGraySemi : brandBlack} />} contentArray={[["Places of worship:", cP?.number_of_religious_buildings ? cP?.number_of_religious_buildings : 0]]} />
                            </tbody>
                        </table>
                        <p style={{ maxWidth: "300px" }}>Amenity datasets are calculated from <a style={{ textDecoration: "underline" }} href="https://grid3.gov.ng/datasets" rel="noreferrer" target="_blank">this source</a>.</p>

                    </>}

                </div>

                {cP?.community_name &&
                    <div style={{ backgroundColor: brandGrayLight }}>
                        <div className={`${styles.overflow} ${styles.controlBoxContent}`}>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>Date of survey: {`${cP.survey_date.split('-')[2]}/${cP.survey_date.split('-')[1]}/${cP.survey_date.split('-')[0]}`}</div>
                            <SurveyDataGroup title="Electricity infrastructure">
                                <SurveyDataSection
                                    icon={<IconGridMastMv height="25" fill={cP.grid_presence === "no" ? brandGraySemi : brandBlack} color={cP.grid_presence === "no" ? brandGraySemi : brandBlack} />}
                                    contentArray={cP.grid_presence === "no" ? [["Grid status:", "No grid infrastructure present"]] : [
                                        ["Grid status:", `${cP?.grid_functionality === 'everything_functional' ? 'Functioning' : 'Not functioning'} | ${cP?.grid_presence === 'yes_connected_national_grid' ? 'Connected' : 'Not connected'} to the national grid`],
                                        ["Year built:", cP?.grid_year_built],
                                        ["Grid assets:", gridAssetInformation.length === 0 ? "None" : (gridAssetInformation.length === 1 ? `${gridAssetInformation[0]} only` : (gridAssetInformation.length === 2 ? `${gridAssetInformation[0]} and ${gridAssetInformation[1]}` : "Poles, Cable and Transformer"))]
                                    ]}
                                />
                                <SurveyDataSection
                                    icon={<IconSolar height="25" color={cP.mini_grid_presence === "true" ? brandBlack : brandGraySemi} />}
                                    contentArray={[
                                        ["Mini-grid status:", `${cP.mini_grid_presence !== "true" ? "No activities seen" : cP.mini_grid_status === "in_commissioning" ? "A mini-grid is under construction" : "A mini-grid is operational"}`]
                                    ]}
                                />
                            </SurveyDataGroup>

                            {viewAllData && <>
                                <SurveyDataGroup title="Business and agriculture">
                                    <SurveyDataSection
                                        icon={<IconBasket height="20" invert={true} color={marketInformation.filter(el => el[1] === "true").length === 0 ? brandGraySemi : brandBlack} />}
                                        contentArray={marketInformation.filter(el => el[1] === "true").length === 0 ? [["Market presence:", "No market in settlement"]] : [
                                            ["Market day(s):", marketInformation.filter(el => el[1] === "true").length === 7 ? 'Every day of the week' : `${marketInformation.filter(el => el[1] === "true").map(el => el[0]).join(", ")}`],
                                            ["Number of traders (avg.):", Math.round(marketInformation.filter(el => el[2] > 0).map(el => el[2]).reduce((a, b) => a + b, 0) / marketInformation.filter(el => el[2] > 0).length)]
                                        ]}
                                    />
                                    <SurveyDataSection
                                        icon={<IconNaira width="20" color={brandBlack} />}
                                        contentArray={[
                                            ["Income sources:", `${[cP?.income_source_primary, cP?.income_source_secondary, cP?.income_source_third, cP?.income_source_fourth,].filter(el => el).map(el => el[0].toUpperCase() + el.slice(1)).join(", ")}`]
                                        ]}
                                    />
                                    <SurveyDataSection
                                        icon={<IconTractor width="25" color={brandBlack} />}
                                        contentArray={[
                                            ["Crops farmed:", `${[cP?.crop_cultivated_primary, cP?.crop_cultivated_secondary, cP?.crop_cultivated_third, cP?.crop_cultivated_fourth,].filter(el => el).map(el => el[0].toUpperCase() + el.slice(1)).join(", ")}`]
                                        ]}
                                    />
                                    <SurveyDataSection icon={<IconMobile width="20" color={cP?.mobile_money_available === "true" ? brandBlack : brandGraySemi} />} contentArray={[["Mobile money:", cP?.mobile_money_available === "true" ? "Yes" : "No"]]} />
                                    <SurveyDataSection icon={<IconBank width="20" color={cP?.banks_available === "true" ? brandBlack : brandGraySemi} />} contentArray={[["Bank in community:", cP?.banks_available === "true" ? "Yes" : "No"]]} />
                                </SurveyDataGroup>

                                <SurveyDataGroup title="Accessibility">
                                    <SurveyDataSection icon={<IconMotorbike width="25" invert={true} color={cP?.accessibility_motorbike === "never" ? brandGraySemi : brandBlack} />} contentArray={[["Motorbike:", !cP?.accessibility_motorbike ? "No data" : cP?.accessibility_motorbike.replaceAll("_", " ")[0].toUpperCase() + cP?.accessibility_motorbike.replaceAll("_", " ").slice(1)]]} />
                                    <SurveyDataSection icon={<Icon4x4 width="25" invert={true} color={cP?.accessibility_4x4_car === "never" ? brandGraySemi : brandBlack} />} contentArray={[["4x4 car:", !cP?.accessibility_4x4_car ? "No data" : cP?.accessibility_4x4_car.replaceAll("_", " ")[0].toUpperCase() + cP?.accessibility_4x4_car.replaceAll("_", " ").slice(1)]]} />
                                    <SurveyDataSection icon={<IconTruck width="25" invert={true} color={cP?.accessibility_truck === "never" ? brandGraySemi : brandBlack} />} contentArray={[["Truck:", !cP?.accessibility_truck ? "No data" : cP?.accessibility_truck.replaceAll("_", " ")[0].toUpperCase() + cP?.accessibility_truck.replaceAll("_", " ").slice(1)]]} />
                                    <SurveyDataSection icon={<IconCar width="25" invert={true} color={cP?.accessibility_saloon_car === "never" ? brandGraySemi : brandBlack} />} contentArray={[["Saloon car:", !cP?.accessibility_saloon_car ? "No data" : cP?.accessibility_saloon_car.replaceAll("_", " ")[0].toUpperCase() + cP?.accessibility_saloon_car.replaceAll("_", " ").slice(1)]]} />
                                    <SurveyDataSection icon={<IconBus width="25" invert={true} color={cP?.accessibility_public_transport === "never" ? brandGraySemi : brandBlack} />} contentArray={[["Public transport:", !cP?.accessibility_public_transport ? "No data" : cP?.accessibility_public_transport.replaceAll("_", " ")[0].toUpperCase() + cP?.accessibility_public_transport.replaceAll("_", " ").slice(1)]]} />
                                    <tr style={{ height: "10px" }}>
                                        <td></td>
                                    </tr>
                                    <tr style={{ height: "10px" }}>
                                        <td colSpan="100%" className={`${styles.horizontalRule}`}></td>
                                    </tr>
                                    <SurveyDataSection
                                        icon={<IconNetworkSignal width="18" invert={true} color={[["MTN", cP.network_mtn], ["Airtel", cP.network_airtel], ["9mobile", cP.network_9mobile], ["Glo", cP.network_glo]].filter(el => el[1] !== "not_available").length === 0 ? brandGraySemi : brandBlack} />}
                                        contentArray={[
                                            ["Available networks:", `${[["MTN", cP.network_mtn], ["Airtel", cP.network_airtel], ["9mobile", cP.network_9mobile], ["Glo", cP.network_glo]].filter(el => el[1] !== "not_available").length === 0 ? "None" : [["MTN", cP.network_mtn], ["Airtel", cP.network_airtel], ["9mobile", cP.network_9mobile], ["Glo", cP.network_glo]].filter(el => el[1] !== "not_available").map(el => `${el[0]} (${el[1]})`).join(", ")}`]
                                        ]}
                                    />
                                </SurveyDataGroup>

                                <SurveyDataGroup title="Fuel prices and accessibility">
                                    <SurveyDataSection
                                        icon={<IconOil width="25" color={brandBlack} />}
                                        contentArray={[
                                            ["Petrol:", `${!cP.petrol_price_ngn_per_litre ? 'no data' : `${cP.petrol_price_ngn_per_litre} NGN/Litre`}`],
                                            ["Diesel:", `${!cP.diesel_price_ngn_per_litre ? 'no data' : `${cP.diesel_price_ngn_per_litre} NGN/Litre`}`],
                                            ["Kerosene:", `${!cP.kerosene_price_ngn_per_litre ? 'no data' : `${cP.kerosene_price_ngn_per_litre} NGN/Litre`}`],
                                        ]}
                                    />
                                    <SurveyDataSection
                                        icon={<IconFuelPump width="25" color={cP.petrol_station_in_community === "true" ? brandBlack : brandGraySemi} />}
                                        contentArray={cP.petrol_station_in_community === "true" ? [
                                            ["Fuel station in community:", "Yes"]
                                        ] : [
                                            ["Fuel station in community:", "No"],
                                            ["Distance to nearest:", `${cP.distance_to_nearest_petrol_station_km} km`]
                                        ]}
                                    />
                                    <SurveyDataSection
                                        icon={<IconGenerator width="25" color={brandBlack} />}
                                        contentArray={[
                                            ["% households with genset:", `${cP.households_with_genset_percentage} (avg. size: ${cP.households_genset_size_avg_kva?.toFixed(2)}kVA)`],
                                            ["% businesses with genset:", `${cP.businesses_with_genset_percentage} (avg. size: ${cP.businesses_genset_size_avg_kva?.toFixed(2)}kVA)`]
                                        ]}
                                    />
                                </SurveyDataGroup>

                                <SurveyDataGroup title="Social services">
                                    <SurveyDataSection icon={<IconSchool width="20" color={cP?.count_primary_schools !== 0 ? brandBlack : brandGraySemi} />} contentArray={[["Primary school(s):", cP?.count_primary_schools], ["Secondary school(s):", cP?.count_secondary_schools]]} />
                                    <SurveyDataSection icon={<IconHealth width="20" color={cP?.count_health_facilities !== 0 ? brandBlack : brandGraySemi} />} contentArray={[["Health facilities:", cP?.count_health_facilities]]} />
                                </SurveyDataGroup>

                                <SurveyDataGroup title="Productive use">
                                    <SurveyDataSection icon={<IconGenerator width="25" color={cP?.count_productive_use_grinding_mills !== 0 ? brandBlack : brandGraySemi} />} contentArray={[["Grinding mill:", cP?.count_productive_use_grinding_mills]]} />
                                    <SurveyDataSection icon={<IconGenerator width="25" color={cP?.count_productive_use_oil_press !== 0 ? brandBlack : brandGraySemi} />} contentArray={[["Oil press:", cP?.count_productive_use_oil_press]]} />
                                    {(cP?.name_productive_use_other !== undefined) && <SurveyDataSection icon={<IconGenerator width="25" color={cP?.count_productive_use_other !== 0 ? brandBlack : brandGraySemi} />} contentArray={[[`${cP?.name_productive_use_other}:`, cP?.count_productive_use_other]]} />}
                                </SurveyDataGroup>

                                <SurveyDataGroup title="Commercial">
                                    <SurveyDataSection icon={<IconScissors width="20" color={cP?.count_commercial_barber_beauty_salon !== 0 ? brandBlack : brandGraySemi} />} contentArray={[["Barber / beauty salon:", cP?.count_commercial_barber_beauty_salon]]} />
                                    <SurveyDataSection icon={<IconDress width="13" color={cP?.count_commercial_tailor_dressmaker !== 0 ? brandBlack : brandGraySemi} />} contentArray={[["Tailor / dressmaker:", cP?.count_commercial_tailor_dressmaker]]} />
                                    <SurveyDataSection icon={<IconShopping width="18" color={cP?.count_commercial_shop_kiosk !== 0 ? brandBlack : brandGraySemi} />} contentArray={[["Shop / kiosk:", cP?.count_commercial_shop_kiosk]]} />
                                    <SurveyDataSection icon={<IconMobile width="20" color={cP?.count_commercial_phone_charging !== 0 ? brandBlack : brandGraySemi} />} contentArray={[["Phone charging:", cP?.count_commercial_phone_charging]]} />
                                    {(cP?.name_commercial_other !== undefined) && <SurveyDataSection icon={<IconNaira width="25" color={cP?.count_commercial_other !== 0 ? brandBlack : brandGraySemi} />} contentArray={[[`${cP?.name_commercial_use_other}:`, cP?.count_commercial_other]]} />}
                                </SurveyDataGroup>

                                <SurveyDataGroup title="Craft">
                                    <SurveyDataSection icon={<IconChair width="12" color={cP?.count_craft_carpenter !== 0 ? brandBlack : brandGraySemi} />} contentArray={[["Carpenter:", cP?.count_craft_carpenter]]} />
                                    <SurveyDataSection icon={<IconSpanner width="15" color={cP?.count_craft_welder !== 0 ? brandBlack : brandGraySemi} />} contentArray={[["Welder:", cP?.count_craft_welder]]} />
                                    <SurveyDataSection icon={<IconCar width="25" color={cP?.count_craft_car_repair !== 0 ? brandBlack : brandGraySemi} />} contentArray={[["Car repair:", cP?.count_craft_car_repair]]} />
                                    <SurveyDataSection icon={<IconMotorbike width="25" color={cP?.count_craft_vulcanizer !== 0 ? brandBlack : brandGraySemi} />} contentArray={[["Vulcanizer:", cP?.count_craft_vulcanizer]]} />
                                    <SurveyDataSection icon={<IconMotorbike width="25" color={cP?.count_craft_bike_repair !== 0 ? brandBlack : brandGraySemi} />} contentArray={[["Bike repair:", cP?.count_craft_bike_repair]]} />
                                    <SurveyDataSection icon={<IconGenerator width="25" color={cP?.count_craft_generator_repair !== 0 ? brandBlack : brandGraySemi} />} contentArray={[["Generator repair:", cP?.count_craft_generator_repair]]} />
                                    <SurveyDataSection icon={<IconShoe width="25" color={cP?.count_craft_shoemaker !== 0 ? brandBlack : brandGraySemi} />} contentArray={[["Shoemaker:", cP?.count_craft_shoemaker]]} />
                                    {(cP?.name_craft_other !== undefined) && <SurveyDataSection icon={<IconSpanner width="15" color={cP?.count_craft_other !== 0 ? brandBlack : brandGraySemi} />} contentArray={[[`${cP?.name_craft_other}:`, cP?.count_craft_other]]} />}
                                </SurveyDataGroup>
                            </>}
                        </div>
                    </div>}
                <div style={{ minWidth: "250px" }} className={`${styles.controlBoxContent}`}>
                    <div className={`${styles.clusterBoxButtons}`}>
                        <button name='Zoom To or From Cluster Button' className={`${styles.zoomToCluster} ${styles.buttonRight}`} onClick={() => { panToCluster(clusterCoordinates) }}> <div style={{ marginRight: "5px" }}><IconMagnify width="11px" color={CONSTS.COLOR.miniGrids} /></div> <div>{togglePanToCluster ? 'Zoom to cluster' : 'Return to state'}</div> </button>
                        {cP?.community_name && <button className={styles.expandSurveyData} name='Expand more surey data Button' onClick={() => setViewAllData(!viewAllData)}>{viewAllData ? "Collapse" : "Expand"} all survey data</button>}
                    </div>
                </div>

            </ControlBox>
        </div>

    )
}

export default PopupClusterData;