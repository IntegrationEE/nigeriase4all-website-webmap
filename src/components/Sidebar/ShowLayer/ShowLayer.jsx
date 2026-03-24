import React, { useMemo } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import IconLayers from '../../Shared/Icons/IconLayers';
import TileLayer from './TileLayer';
import Headline from '../../Shared/Headline';

import * as CONSTS from '../../../utils/consts';
import styles from '../Sidebar.module.css';
import { searchParamsObj, getSelectedMap } from '../../../utils/dataHandler';

function ShowLayer(props) {
	const { map, toggleView, mapLoaded } = props;
	const [searchParams] = useSearchParams();
	const pathname = useLocation().pathname;
	const searchParamsInit = useMemo(() => {
		return { ...searchParamsObj(searchParams) };
	}, [searchParams]);
	const selectedMap = getSelectedMap(pathname);

	return (
		<div
			className={`${!(toggleView === 'show-layer') && styles.showmobile} ${
				styles.layerControl
			} `}
		>
			<Headline icon={<IconLayers width="17px" />} text="Show layers" />
			<div className={styles.interraction}>
				{selectedMap.NAME === CONSTS.PAGE_NAMES.INTERCONNECTED && (
					<>
						<TileLayer
							map={map}
							layerIdArray={['clusterAllSimple', 'clusterAllRed']}
							layerId="clusterAllSimple"
							layerName="Interconnected clusters"
							toggleInit={!!searchParamsInit.state}
							active={!!searchParamsInit.state}
							mapLoaded={mapLoaded}
							attribution={<AttClustersMicrosoft />}
						/>
						<TileLayer
							map={map}
							layerIdArray={['nightLightZScore2019']}
							layerId="nightLightZScore2019"
							layerName="Night light"
							toggleInit={!!searchParamsInit.state}
							active={!!searchParamsInit.state}
							mapLoaded={mapLoaded}
							attribution={<AttNightLight />}
						/>
					</>
				)}
				{selectedMap.NAME === CONSTS.PAGE_NAMES.OFFGRID && (
					<TileLayer
						map={map}
						layerIdArray={[
							'clusterOffgridSimple',
							'clusterOffgrid',
							'clusterOffgridSurveyed',
							'clusterOffgridSurveyedGrid',
						]}
						layerId="clusterOffgridSimple"
						layerName="Offgrid clusters"
						toggleInit={!!searchParamsInit.state}
						active={!!searchParamsInit.state}
						mapLoaded={mapLoaded}
						attribution={<AttClustersOsm />}
					/>
				)}
				{selectedMap.NAME === CONSTS.PAGE_NAMES.POWER_SECTOR && (
					<TileLayer
						map={map}
						layerIdArray={['powerSectorClusters', 'clusterAll']}
						layerId="powerSectorClusters"
						layerName="Settlement clusters"
						toggleInit={!!searchParamsInit.state}
						active={!!searchParamsInit.state}
						mapLoaded={mapLoaded}
						attribution={<AttClustersMicrosoft />}
					/>
				)}
				{selectedMap.NAME === CONSTS.PAGE_NAMES.SHS && (
					<TileLayer
						map={map}
						layerIdArray={['markets', 'marketsBuffer', 'marketsHighlight']}
						layerId="markets"
						layerName="Markets"
						toggleInit={!!searchParamsInit.state}
						active={!!searchParamsInit.state}
						mapLoaded={mapLoaded}
						attribution={<AttMarkets />}
					/>
				)}
				{selectedMap.NAME === CONSTS.PAGE_NAMES.SHS && (
					<TileLayer
						map={map}
						layerIdArray={['shsClusters', 'clusterAll']}
						layerId="shsClusters"
						layerName="Settlement clusters"
						toggleInit={!!searchParamsInit.state}
						active={!!searchParamsInit.state}
						mapLoaded={mapLoaded}
						attribution={<AttClustersMicrosoft />}
					/>
				)}
				<TileLayer
					map={map}
					layerIdArray={['se4allMvGrid']}
					layerId="se4allMvGrid"
					layerName="MV grid"
					toggleInit={true}
					mapLoaded={mapLoaded}
					attribution={<AttMvGrid />}
				/>
				<TileLayer
					map={map}
					layerIdArray={['se4allMvModelledGrid']}
					layerId="se4allMvModelledGrid"
					layerName="MV modelled grid"
					toggleInit={true}
					mapLoaded={mapLoaded}
					attribution={<AttMvGridModel />}
				/>
				{selectedMap.NAME === CONSTS.PAGE_NAMES.POWER_SECTOR && (
					<TileLayer
						map={map}
						layerIdArray={['transmissionLine']}
						layerId="transmissionLine"
						layerName="HV transmission lines"
						toggleInit={selectedMap.NAME === CONSTS.PAGE_NAMES.POWER_SECTOR}
						active={selectedMap.NAME === CONSTS.PAGE_NAMES.POWER_SECTOR}
						mapLoaded={mapLoaded}
						attribution={<AttTransmissionLine />}
					/>
				)}
				<TileLayer
					map={map}
					layerIdArray={['minigrids']}
					layerId="minigrids"
					layerName="Minigrids"
					toggleInit={true}
					mapLoaded={mapLoaded}
					attribution={<AttMinigrids />}
				/>
				{selectedMap.NAME === CONSTS.PAGE_NAMES.POWER_SECTOR && (
					<TileLayer
						map={map}
						layerIdArray={['powerPlants']}
						layerId="powerPlants"
						layerName="Power plants"
						toggleInit={selectedMap.NAME === CONSTS.PAGE_NAMES.POWER_SECTOR}
						active={selectedMap.NAME === CONSTS.PAGE_NAMES.POWER_SECTOR}
						mapLoaded={mapLoaded}
					/>
				)}
			</div>
		</div>
	);
}

export default ShowLayer;

const Att = ({ title, license = 'odbl', att }) => (
	<div>
		<div>{title}</div>
		<div>
			<b>Licensed under:</b>
			{license === 'odbl'
				? ' an Open Database License (ODbL) v1.0 License'
				: license === 'ccby'
				? ' a Creative Commons Attribution 4.0 International License'
				: license}
		</div>
		<div>
			<b>Attribution: </b>
			{att}
		</div>
	</div>
);

const AttClustersMicrosoft = () => (
	<Att
		title="Nation wide settlements are generated from Microsoft building footprints and processed by Nigeria SE4ALL."
		license="odbl"
		att="Microsoft, © Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH and the Federal Ministry of Power (FMP)."
	/>
);

const AttClustersOsm = () => (
	<Att
		title="Off-grid settlements are generated from OpenStreetMap data and processed by Nigeria SE4ALL."
		license="odbl"
		att="OpenStreetMap contributors (https://www.openstreetmap.org/copyright), © Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH and the Federal Ministry of Power (FMP)."
	/>
);

const AttNightLight = () => (
	<Att
		title="Dataset was procesed from distance to grid and mean Hexagon values are calculated."
		license=" a World Bank Open Database License (ODbL)"
		att="Min, Brian and O'Keeffe, Zachary. 2021. High Resolution Electricity Access Indicators Dataset. Ann Arbor, MI: Center for Political Studies, University of Michigan."
	/>
);

const AttMvGrid = () => (
	<div>
		<div>The medium voltage grid is made up of 3 data sources.</div>
		<br></br>
		<Att
			title="Data for Katsina, Kano and Jigawa is available from energydata.info. The license the dataset is published under and attribution is given below."
			license="ccby"
			att="© Columbia University Earth Institute. Accessed from energydata.info."
		/>
		<br></br>
		<Att
			title="Data for Sokoto, Kebbi, Zamfara and Kaduna was gathered from Kaduna electric DISCO."
			license="ccby"
			att="Kaduna Electricity Distribution Plc (Kaduna Electric), © Columbia University Earth Institute. Modified by fixing errors in North East Sokoto by © Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH and the Federal Ministry of Power (FMP)."
		/>
		<br></br>
		<Att
			title="All other grid data was collected in the field by the Nigeria SE4ALL project."
			license="odbl"
			att="© Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH and the Federal Ministry of Power (FMP)."
		/>
	</div>
);

const AttTransmissionLine = () => (
	<div>
		<div>The HV transmission line is made up of two data sources</div>
		<br></br>
		<Att
			title="Data for areas in Benue state and Taraba state was taken from grid diagrams provided at the FMP."
			license="odbl"
			att="OpenStreetMap contributors (https://www.openstreetmap.org/copyright), © Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH and the Federal Ministry of Power (FMP)."
		/>
	</div>
);

const AttMvGridModel = () => (
	<Att
		title="Medium-Voltage Distribution (Predictive) is available on energydata.info."
		license="ccby"
		att="Facebook"
	/>
);

const AttMarkets = () => (
	<Att
		title="National Markets dataset is taken from the GRID3 project (grid3.gov.ng)."
		license="All datasets/resources including metadata published on grid3.gov.ng are licensed under GRID."
		att="GRID"
	/>
);

const AttMinigrids = () => (
	<Att
		title="The mini-grid dataset was created under the Nigerian Energy Support Programme."
		license="odbl"
		att="© Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH and the Federal Ministry of Power (FMP)."
	/>
);
