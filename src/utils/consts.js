import * as PATHS from './paths';

export const WEBSITE_BASE = process.env.REACT_APP_WEBSITE_BASE;;

export const WEBSITE_PATHS = {
	MINIGRIDS: '/mini-grids',
	POWER_SECTOR: '/power-sector',
	SHS: '/solar-home-systems',
	ABOUT: '/about',
	ACCREDITATION: '/accreditation',
	TC: '/terms-of-service',
};

export const COLOR = {
	logoYellow: '#FFBB00',
	miniGrids: '#57C494',
	powerSector: '#085064',
	solarHomeSystems: '#F76906',
	brandGreen: '#1DD069',
	brandGray: '#313131',
	brandGrayLight: '#EEEFF1',
	brandGraySemi: '#E0E2E9',
	brandGrayGray: '#C5C4Cf',
	brandGrayDark: '#93939F',
	brandBlack: '#313131',
	hydroBlue: '#3DC7F2',
	clusterYellow: `#DFD662`,
	clusterBlue: '#085064',
	mvGrid: '#B91109',
	hvGrid: '#F54A2B',
	colorSecondaryRedDark: '#7C0E14',
	colorSecondaryRed: '#B91109',
	colorSecondaryRedLight: '#F54A2B',
	colorSecondaryYellowDark: '#FFBB00',
	colorSecondaryYellow: '#FFCC15',
	colorSecondaryYellowLight: '#FFEA62',
};

export const DISTRIBUTION_COMPANIES = [
	{ NAME: 'Kaduna', ABBV: 'Kaduna Electric', COLOR: '#84BFA4' },
	{ NAME: 'Kano', ABBV: 'KEDCO', COLOR: '#BB6764' },
	{ NAME: 'Yola', ABBV: 'YEDC', COLOR: '#F8D059' },
	{ NAME: 'Jos', ABBV: 'JED PLC', COLOR: '#F59A8B' },
	{ NAME: 'Abuja', ABBV: 'AEDC', COLOR: '#225766' },
	{ NAME: 'Ibadan', ABBV: 'IBEDC', COLOR: '#FBF5B5' },
	{ NAME: 'Ikeja & Eko', ABBV: 'Ikeja Electric & EKEDC', COLOR: '#5EC8D5' },
	{ NAME: 'Benin', ABBV: 'BEDC', COLOR: '#3E92A2' },
	{ NAME: 'Port harcourt', ABBV: 'PHED', COLOR: '#FBE06A' },
	{ NAME: 'Enugu', ABBV: 'EEDC', COLOR: '#734043' },
];

export const DISCOS = {
	kaduna: { COLOR: '#84BFA4' }, //'#734043'
	kano: { COLOR: '#BB6764' },
	yola: { COLOR: '#F8D059' },
	jos: { COLOR: '#F59A8B' }, //'#F8D059'
	abuja: { COLOR: '#225766' }, //'#FBE06A'
	ibadan: { COLOR: '#FBF5B5' },
	'ikeja-and-eko': { COLOR: '#5EC8D5' }, // '#5EC8D5'
	benin: { COLOR: '#3E92A2' },
	'port-harcourt': { COLOR: '#FBE06A' }, //'#5EC8D5'N
	enugu: { COLOR: '#734043' }, // '#84BFA4'
};

export const NAVBAR_DATA = [
	{
		circle: true,
		color: COLOR.miniGrids,
		path: PATHS.OFFGRID_MG_PATH,
		externalPath: `${WEBSITE_BASE}${WEBSITE_PATHS.MINIGRIDS}`,
		text: 'Mini-grids',
	},
	{
		circle: true,
		color: COLOR.powerSector,
		path: PATHS.POWER_SECTOR_PATH,
		externalPath: `${WEBSITE_BASE}${WEBSITE_PATHS.POWER_SECTOR}`,
		text: 'Power Sector',
	},
	{
		circle: true,
		color: COLOR.solarHomeSystems,
		path: PATHS.SOLAR_HOME_SYSTEM_PATH,
		externalPath: `${WEBSITE_BASE}${WEBSITE_PATHS.SHS}`,
		text: 'Solar Home Systems',
	},
	{
		circle: false,
		color: COLOR.brandGray,
		path: '/',
		externalPath: `${WEBSITE_BASE}${WEBSITE_PATHS.ABOUT}`,
		text: 'About',
		Icon: true,
	},
];

export const STYLES = {
	POLYGON: {
		CLUSTERS: {
			FILL: { 'fill-opacity': 0 },
			LINE: {
				'line-color': COLOR.clusterYellow,
				'line-width': 3,
				'line-opacity': [
					'interpolate',
					['exponential', 0.5],
					['zoom'],
					12,
					0,
					18,
					1,
				],
			},
			LINE_RED: {
				'line-color': COLOR.mvGrid,
				'line-width': 3,
				'line-opacity': [
					'interpolate',
					['exponential', 0.5],
					['zoom'],
					12,
					0,
					18,
					1,
				],
			},
		},
		MARKETS: {
			FILL: {
				'fill-color': COLOR.solarHomeSystems,
				'fill-opacity': 0.25,
			},
		},
		STATES: {
			FILL: {
				'fill-color': [
					'case',
					['boolean', ['feature-state', 'hover'], false],
					'#93939F',
					'#E0E2E9',
				],
				'fill-opacity': 1,
			},
			FILL_DISCO: {
				'fill-color': [
					'case',
					[
						'any',
						['==', ['get', 'adm1_en'], 'Abia'],
						['==', ['get', 'adm1_en'], 'Imo'],
						['==', ['get', 'adm1_en'], 'Enugu'],
						['==', ['get', 'adm1_en'], 'Anambra'],
						['==', ['get', 'adm1_en'], 'Ebonyi'],
					],
					`${DISCOS.enugu.COLOR}`,
					[
						'any',
						['==', ['get', 'adm1_en'], 'Kebbi'],
						['==', ['get', 'adm1_en'], 'Sokoto'],
						['==', ['get', 'adm1_en'], 'Zamfara'],
						['==', ['get', 'adm1_en'], 'Kaduna'],
					],
					`${DISCOS.kaduna.COLOR}`,
					[
						'any',
						['==', ['get', 'adm1_en'], 'Katsina'],
						['==', ['get', 'adm1_en'], 'Kano'],
						['==', ['get', 'adm1_en'], 'Jigawa'],
					],
					`${DISCOS.kano.COLOR}`,
					[
						'any',
						['==', ['get', 'adm1_en'], 'Yobe'],
						['==', ['get', 'adm1_en'], 'Borno'],
						['==', ['get', 'adm1_en'], 'Adamawa'],
						['==', ['get', 'adm1_en'], 'Taraba'],
					],
					`${DISCOS.yola.COLOR}`,
					[
						'any',
						['==', ['get', 'adm1_en'], 'Bauchi'],
						['==', ['get', 'adm1_en'], 'Gombe'],
						['==', ['get', 'adm1_en'], 'Plateau'],
						['==', ['get', 'adm1_en'], 'Benue'],
					],
					`${DISCOS.jos.COLOR}`,
					[
						'any',
						['==', ['get', 'adm1_en'], 'Niger'],
						['==', ['get', 'adm1_en'], 'Federal Capital Territory'],
						['==', ['get', 'adm1_en'], 'Nasarawa'],
						['==', ['get', 'adm1_en'], 'Kogi'],
					],
					`${DISCOS.abuja.COLOR}`,
					[
						'any',
						['==', ['get', 'adm1_en'], 'Kwara'],
						['==', ['get', 'adm1_en'], 'Oyo'],
						['==', ['get', 'adm1_en'], 'Osun'],
						['==', ['get', 'adm1_en'], 'Ogun'],
					],
					`${DISCOS.ibadan.COLOR}`,
					[
						'any',
						['==', ['get', 'adm1_en'], 'Ekiti'],
						['==', ['get', 'adm1_en'], 'Ondo'],
						['==', ['get', 'adm1_en'], 'Edo'],
						['==', ['get', 'adm1_en'], 'Delta'],
					],
					`${DISCOS.benin.COLOR}`,
					[
						'any',
						['==', ['get', 'adm1_en'], 'Cross River'],
						['==', ['get', 'adm1_en'], 'Akwa Ibom'],
						['==', ['get', 'adm1_en'], 'Rivers'],
						['==', ['get', 'adm1_en'], 'Bayelsa'],
					],
					`${DISCOS['port-harcourt'].COLOR}`,
					`${DISCOS['ikeja-and-eko'].COLOR}`,
				],
				'fill-opacity': [
					'case',
					['boolean', ['feature-state', 'hover'], false],
					0.5,
					1,
				],
			},
			LINE: {
				'line-width': 1,
			},
			STATE_FILL: {
				'fill-color': [
					'case',
					['boolean', ['feature-state', 'hover'], false],
					'#E0E2E9',
					'#eeeeee',
				],
				'fill-opacity': 1,
			},
			STATE_OVERLAY: {
				'fill-color': COLOR.brandBlack,
				'fill-opacity': 0.2,
			},
			STATE_LINE: {
				'line-width': 3,
			},
		},
		NIGHT_LIGHT: {
			'fill-color': [
				'case',
				['>', ['to-number', ['get', '_mean']], 3],
				`${COLOR.colorSecondaryYellowLight}`,
				['>', ['to-number', ['get', '_mean']], 2.5],
				`${COLOR.colorSecondaryYellow}`,
				['>', ['to-number', ['get', '_mean']], 2],
				`${COLOR.colorSecondaryYellowDark}`,
				['>', ['to-number', ['get', '_mean']], 1.5],
				`${COLOR.colorSecondaryRedLight}`,
				['>', ['to-number', ['get', '_mean']], 1],
				`${COLOR.colorSecondaryRed}`,
				['>', ['to-number', ['get', '_mean']], 0.5],
				`${COLOR.colorSecondaryRed}`,
				`${COLOR.brandGrayDark}`,
			],
			'fill-opacity': 0.5,
		},
	},
	LINE: {
		MV_GRID: {
			'line-color': `${COLOR.mvGrid}`,
		},
		MV_GRID_MODELLED: {
			'line-color': `${COLOR.mvGrid}`,
			// "line-opacity": 0.5,
			'line-dasharray': [2, 2],
			// "line-width": 1.5,
		},
		HV_GRID: {
			'line-color': `${COLOR.hvGrid}`,
			'line-width': 5,
		},
	},
	POINT: {
		CLUSTERS_SELECTED: {
			'circle-color': `${COLOR.colorSecondaryYellowDark}`,
			'circle-stroke-color': `${COLOR.colorSecondaryYellowDark}`,
			'circle-stroke-width': 2,
			'circle-radius': 9,
		},
		CLUSTERS: {
			'circle-color': `${COLOR.clusterYellow}`,
			'circle-stroke-color': '#FFF',
			'circle-stroke-width': 1,
		},
		CLUSTERS_INTERCONNECTED: {
			'circle-color': `${COLOR.mvGrid}`,
			'circle-stroke-color': '#FFF',
			'circle-stroke-width': 1,
		},
		CLUSTERS_SURVEY: {
			'circle-color': [
				'case',
				['==', ['get', 'grid_functionality'], 'everything_functional'],
				`${COLOR.mvGrid}`,
				`${COLOR.clusterBlue}`,
			],
			'circle-stroke-color': '#FFF',
			'circle-stroke-width': 1,
		},
		CLUSTERS_SURVEY_GRID: {
			'circle-radius': 7,
			'circle-opacity': 0,
			'circle-stroke-color': `${COLOR.mvGrid}`,
			'circle-stroke-width': 1.5,
			'circle-stroke-opacity': [
				'case',
				['!=', ['get', 'grid_presence'], 'no'],
				1,
				0,
			],
		},
		CLUSTERS_POWER_SECTOR: {
			'circle-color': `${COLOR.clusterYellow}`,
			'circle-stroke-color': '#FFF',
			'circle-stroke-width': 1,
			'circle-radius': 3.5,
		},
		CLUSTERS_SHS: {
			'circle-color': `${COLOR.clusterYellow}`,
			'circle-stroke-color': '#FFF',
			'circle-stroke-width': 1,
			'circle-radius': [
				'case',
				['>', ['to-number', ['get', 'number_of_buildings']], 500],
				10,
				2,
			],
		},
		MINIGRIDS: {
			'circle-color': `${COLOR.miniGrids}`,
			'circle-radius': 7,
			'circle-stroke-color': '#FFF',
			'circle-stroke-width': 2,
		},
		MARKETS: {
			'circle-color': `${COLOR.solarHomeSystems}`,
			'circle-stroke-color': '#FFF',
			'circle-stroke-width': 1,
		},
		POWER_PLANTS: {
			'circle-color': [
				'case',
				['==', ['get', 'types_of_plants'], 'Hydro'],
				`${COLOR.hydroBlue}`,
				`${COLOR.brandBlack}`,
			],
			'circle-radius': 7,
			'circle-stroke-color': '#FFF',
			'circle-stroke-width': 2,
		},
	},
};

export const NIGERIA_CONTEXT = {
	center: [8.679, 9.015],
	zoom: 5,
	bbox: [
		[2.683, 3.883],
		[15.314, 13.867],
	],
	bboxBounds: [
		[-8, -5],
		[23, 20],
	],
	zoomDelta: 0.01,
	zoomSnap: 0.01,
	minZoom: 4,
	maxZoom: 17,
};

export const PAGES = [
	{ NAME: 'Off-grid mini-grids', PATH: PATHS.OFFGRID_MG_PATH },
	{ NAME: 'Interconnected mini-grids', PATH: PATHS.INTERCONNECTED_MG_PATH },
	{ NAME: 'Power sector data explorer', PATH: PATHS.POWER_SECTOR_PATH },
	{ NAME: 'Solar home system', PATH: PATHS.SOLAR_HOME_SYSTEM_PATH },
];

export const PAGE_NAMES = {
	HOME: 'Select a map',
	OFFGRID: 'Off-grid mini-grids',
	INTERCONNECTED: 'Interconnected mini-grids',
	POWER_SECTOR: 'Power sector data explorer',
	SHS: 'Solar home system',
};

const buildingFaq = {
	title: 'Number of buildings / rooftops',
	content: [
		<>
			The number referencing number of buildings or rooftops is calculated from
			viewing satellite imagery and seeing how many rooftops are visible within
			a specific area.
		</>,
	],
};

const settlementFaq = {
	title: 'Settlement clusters',
	content: [
		<>
			A settlement cluster is a collection of buildings, generated by GIS
			analysis. It implies a built up area, although it does not necessarily
			match with administrative settlement boundaries.
		</>,
	],
};

export const SELECTED_OFFGRID = {
	STATE_SELECTOR: true,
	ADM_LAYER: true,
	OFF_GRID_LAYER: true,
	INTERCONNECTED_LAYER: false,
	TRANSMISSION_LINE: false,
	SUB_STATIONS: false,
	DROPDOWN: true,
	NAME: PAGE_NAMES.OFFGRID,
	COLOR: COLOR.miniGrids,
	FILTER: { BUILDING: { MIN: 100, MAX: 2000 }, GRID_DIST: { MIN: 5, MAX: 40 } },
	DESC: 'Explore off-grid mini-grid locations and filter in terms of distance to grid, likely connections and economic potential.',
	MORE_INFO: [
		{
			title: 'Purpose of the map',
			content: [
				<>
					The off-grid minigrids map supports the location of the{' '}
					<b>best possible</b> off-grid mini grid sites in Nigeria.
				</>,
			],
		},
		{
			title: 'Ground truth data',
			content: [
				<>
					The map contains ground truth data collected via <b>on-site survey</b>
					. This can be seen in certain states with the blue locations for sites
					which were visited. The data collected is presented here.
				</>,
			],
		},
		buildingFaq,
		settlementFaq,
	],
};

export const SELECTED_INTERCONNECTED = {
	STATE_SELECTOR: true,
	ADM_LAYER: true,
	OFF_GRID_LAYER: false,
	INTERCONNECTED_LAYER: true,
	TRANSMISSION_LINE: false,
	SUB_STATIONS: false,
	DROPDOWN: true,
	NAME: PAGE_NAMES.INTERCONNECTED,
	COLOR: COLOR.miniGrids,
	FILTER: { BUILDING: { MIN: 100, MAX: 2000 }, GRID_DIST: { MIN: 0, MAX: 5 } },
	DESC: 'View settlements connected to the grid that could be suitable for a mini-grid with pre-existing grid cover. See recommended locations from Nigeria SE4ALL based upon building count.',
	MORE_INFO: [
		{
			title: 'Purpose of the map',
			content: [
				<>
					Interconnected mini-grids are increasing in their presence in Nigeria.
					This map focuses specifically on this potential, comparing the number
					of building footprints at a location to the distance to Medium Voltage
					grid and Night light intensity.
				</>,
			],
		},
		{
			title: 'Why is night light intensity interesting?',
			content: [
				<>
					Interconnected mini-grids are within reach of the national Medium
					Voltage (MV) grid. In some cases, this can also mean a potential to be
					connected to the MV grid. Connection to the MV grid will affect the
					financial status of the mini-grid. Night light intensity can give an
					initial indication about the quality of grid supply.
				</>,
			],
		},
		buildingFaq,
		settlementFaq,
	],
};

export const SELECTED_POWER_SECTOR = {
	STATE_SELECTOR: true,
	ADM_LAYER: true,
	OFF_GRID_LAYER: false,
	INTERCONNECTED_LAYER: false,
	TRANSMISSION_LINE: true,
	SUB_STATIONS: true,
	DROPDOWN: false,
	NAME: PAGE_NAMES.POWER_SECTOR,
	COLOR: COLOR.powerSector,
	FILTER: { AREA: { MIN: 0.2 }, GRID_DIST: { MIN: 0, MAX: 40, INIT: 3 } },
	DESC: 'View power sector infrastructure (grid, substations, power plants, etc.) and analyze grid coverage by state and settlement area.',
	MORE_INFO: [
		{
			title: 'Purpose of the map',
			content: [
				<>
					The power sector data explorer aims to give a consolidated view of the
					power sector in Nigeria. At the national level, distribution
					companies, generation assets and High Voltage grid can be seen. At the
					state level, an overview is given about the ratio of off grid to on
					grid settlements.
				</>,
			],
		},
		buildingFaq,
		settlementFaq,
	],
};

export const SELECTED_SHS = {
	STATE_SELECTOR: true,
	ADM_LAYER: true,
	OFF_GRID_LAYER: true,
	INTERCONNECTED_LAYER: false,
	TRANSMISSION_LINE: false,
	SUB_STATIONS: false,
	DROPDOWN: false,
	NAME: PAGE_NAMES.SHS,
	COLOR: COLOR.solarHomeSystems,
	FILTER: {
		GRID_DIST: { MIN: 0, MAX: 40, INIT_MIN: 0 },
		MARKET_DIST: { MIN: 0, MAX: 15, INIT: 10 },
	},
	DESC: 'Identify smaller settlements  potentially suitable for solar home systems, filter on size, distance to grid and cluster on distance to market.',
	MORE_INFO: [
		{
			title: 'Purpose of the map',
			content: [
				<>
					The off-grid minigrids map supports the location of the{' '}
					<b>best possible</b> off-grid mini grid sites in Nigeria.
				</>,
			],
		},
		buildingFaq,
		settlementFaq,
	],
};

export const GEOCODER = {
	BASE_URL: process.env.REACT_APP_GEOCODER_BASE_URL,
	FILTER_OPTIONS: '&limit=5&format=json&countrycodes=ng&addressdetails=1',
};

export const SE4ALL_GEOSERVER = process.env.REACT_APP_SE4ALL_GEOSERVER;
export const SE4ALL_TMS = {
	start: `${SE4ALL_GEOSERVER}/gwc/service/tms/1.0.0/se4allWS%3A`,
	end: '@EPSG%3A3857@png/{z}/{x}/{y}.png',
};
export const SE4ALL_MVT = {
	start: `${SE4ALL_GEOSERVER}/gwc/service/wmts?request=GetTile&service=WMTS&LAYER=se4allWS:`,
	end: '&FORMAT=application/vnd.mapbox-vector-tile&TILEMATRIXSET=EPSG:3857&TILEMATRIX=EPSG:3857:{z}&TILECOL={x}&TILEROW={y}',
};
//
export const SE4ALL_WFS = {
	start: `${SE4ALL_GEOSERVER}/se4allWS/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=`,
	end: '&outputFormat=application%2Fjson&srsName=EPSG%3A4326',
};
export const SE4ALL_WMS = `${SE4ALL_GEOSERVER}/se4allWS/wms?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256`;

export const STYLE = {
	version: 8,
	sources: {
		osm: {
			type: 'raster',
			tiles: [process.env.REACT_APP_OSM_TILE_URL],
			tileSize: 256,
			attribution:
				'&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
			maxzoom: 19,
			// layout: {visibility: 'visible'}
		},
		osmhot: {
			type: 'raster',
			tiles: [process.env.REACT_APP_HOTOSM_TILE_URL],
			tileSize: 256,
			attribution:
				'&copy; <a href="httsp://osm.org/copyright">OpenStreetMap</a> contributors. Tiles style by <a href="https://www.hotosm.org/">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://www.openstreetmap.fr/">OpenStreetMap France</a>',
			maxzoom: 19,
		},
        satellite: {
            type: "raster",
            tiles: [
                process.env.REACT_APP_SATELLITE_TILE_URL,
            ],
            tileSize: 256,
            attribution: '<a xmlns:dct="http://purl.org/dc/terms/" href="https://s2maps.eu" property="dct:title">Sentinel-2 cloudless - https://s2maps.eu</a> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://eox.at" property="cc:attributionName" rel="cc:attributionURL">EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data 2016 &amp; 2017) released under <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">CC by 4.0 International License</a>.',
            maxzoom: 19,
        },
		se4allMvGrid: {
			type: 'vector',
			tiles: [
				`${SE4ALL_MVT.start}distribution_line_all_no_modell_mv${SE4ALL_MVT.end}`,
			],
			attribution:
				'&copy; <a href="https://energydata.info/dataset/kano-electricity-distribution-plc-kedco-mv-lines-2016">Columbia University Earth Institute</a> | <a href="https://kadunaelectric.com/">Kaduna Electricity Distribution Plc</a> (Kaduna Electric) | <a href="https://www.giz.de/de/html/index.html">Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH</a> and the <a href="https://www.power.gov.ng/">Federal Ministry of Power</a> (FMP)',
			maxzoom: 6,
			minZoom: 19,
			bounds: [
				2.97905490437294, 4.531101558597295, 10.957510596820885,
				13.861244228640953,
			],
		},
		se4allMvModelledGrid: {
			type: 'vector',
			tiles: [`${SE4ALL_MVT.start}modelled_grid_no_mapped${SE4ALL_MVT.end}`],
			attribution:
				'<a href="https://energydata.info/dataset/medium-voltage-distribution-predictive">Facebook</a>',
			maxzoom: 6,
			minZoom: 6,
			bounds: [
				2.714583355070804, 4.377083368346602, 14.481250115864233,
				13.14375010514292,
			],
		},
		boundaries: {
			type: 'vector',
			tiles: [`${SE4ALL_MVT.start}nigeria_state_boundaries${SE4ALL_MVT.end}`],
			attribution:
				'<a href="https://data.humdata.org/dataset/cod-ab-nga">Office for the Surveyor General of the Federation of Nigeria (OSGOF), Ehealth, United Nations Cartographic Section (UNCS)</a>',
			maxzoom: 19,
			promoteId: 'adm1_en', // This ensures that all features have unique IDs
			bounds: [
				2.668533417940767, 4.273007159482855, 14.67881647100326,
				13.894419731428973,
			],
		},
		minigrids: {
			type: 'vector',
			tiles: [`${SE4ALL_MVT.start}minigrids${SE4ALL_MVT.end}`],
			maxzoom: 19,
			bounds: [
				3.207876580779128, 4.539364808530118, 11.821951534470362,
				13.619975300648976,
			],
			// promoteId: 'adm1_en' // Force a field to be the ID
		},
		clusterOffgrid: {
			type: 'vector',
			tiles: [
				`${SE4ALL_MVT.start}all_remotely_mapped_settlements${SE4ALL_MVT.end}`,
			],
			attribution:
				'&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
			bounds: [
				2.7182105338761025, 4.293324608346438, 13.752401884796482,
				13.751458705107662,
			],
			maxzoom: 10,
			minzoom: 5,
		},
		clusterOffgridSimple: {
			type: 'vector',
			tiles: [`${SE4ALL_MVT.start}cluster_offgrid_simple${SE4ALL_MVT.end}`],
			// maxzoom: 19,
			bounds: [
				2.6545135235909236, 4.247569978408232, 14.709528747673202,
				13.794970613747262,
			],
			// promoteId: 'adm1_en' // Force a field to be the ID
		},
		clusterOffgridSurveyed: {
			type: 'vector',
			tiles: [`${SE4ALL_MVT.start}cluster_offgrid_survey${SE4ALL_MVT.end}`],
			// maxzoom: 19,
			bounds: [
				2.7395404688504676, 4.62733447991313, 10.545937343354579,
				12.968637227399533,
			],
			// promoteId: 'adm1_en' // Force a field to be the ID
		},
		clusterAll: {
			type: 'vector',
			tiles: [`${SE4ALL_MVT.start}cluster_all_new${SE4ALL_MVT.end}`],
			// maxzoom: 19,
			bounds: [
				2.6825740858315545, 4.280618497681176, 14.675074987844903,
				13.888889902237587,
			],
			maxzoom: 10,
			minzoom: 5,
			// promoteId: 'adm1_en' // Force a field to be the ID
		},
		clusterAllSimple: {
			type: 'vector',
			tiles: [`${SE4ALL_MVT.start}cluster_all_simple_new${SE4ALL_MVT.end}`],
			attribution:
				'<a href="https://github.com/microsoft/KenyaNigeriaBuildingFootprints">Microsoft</a>',
			// maxzoom: 19,
			bounds: [
				2.6594320804950042, 4.250969713718409, 13.720872141217992,
				13.794954256179702,
			],
			// promoteId: 'adm1_en' // Force a field to be the ID
		},
		transmissionLine: {
			type: 'vector',
			tiles: [
				`${SE4ALL_MVT.start}osm_power_line_with_fmp_data${SE4ALL_MVT.end}`,
			],
			attribution:
				'&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors © Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH and the Federal Ministry of Power (FMP).',
			maxzoom: 10,
			bounds: [
				2.134681488000112, 4.559695671787624, 13.139745246556442,
				13.509507186668749,
			],
			// promoteId: 'adm1_en' // Force a field to be the ID
		},
		powerPlants: {
			type: 'vector',
			tiles: [`${SE4ALL_MVT.start}power_plants${SE4ALL_MVT.end}`],
			maxzoom: 19,
			bounds: [
				4.537670662166938, 3.289554189631646, 10.002052354584414,
				8.298282256706264,
			],
			// promoteId: 'adm1_en' // Force a field to be the ID
		},
		markets: {
			type: 'vector',
			tiles: [`${SE4ALL_MVT.start}grid3_market_edited${SE4ALL_MVT.end}`],
			attribution:
				'<a href="https://grid3.gov.ng/dataset/national-markets/resources">GRID</a>',
			maxzoom: 19,
			bounds: [
				2.64711475372314, 4.25366973876953, 14.6974754333496, 13.802170753479,
			],
			promoteId: 'gid', // Force a field to be the ID
		},
		marketsBuffer: {
			type: 'vector',
			tiles: [`${SE4ALL_MVT.start}grid3_market_buffer_merged${SE4ALL_MVT.end}`],
			attribution:
				'<a href="https://grid3.gov.ng/dataset/national-markets/resources">GRID</a>',
			maxzoom: 10,
			bounds: [
				2.5110200087879866, 4.117421807429444, 14.833570367892635,
				13.933569497185696,
			],
			promoteId: 'gid', // Force a field to be the ID
		},
		nightLightZScore2019: {
			type: 'vector',
			tiles: [
				`${SE4ALL_MVT.start}night_light_z_score_2019_hex${SE4ALL_MVT.end}`,
			],
			attribution:
				'<a href="http://www-personal.umich.edu/~brianmin/HREA/data.html">Min, Brian and O\'Keeffe, Zachary. 2021. High Resolution Electricity Access Indicators Dataset. Ann Arbor, MI: Center for Political Studies, University of Michigan.</a>',
			maxzoom: 10,
			bounds: [
				2.701334558369812, 4.341644187172128, 14.521199194145753,
				13.895871657603074,
			],
			// promoteId: 'gid' // Force a field to be the ID
		},
	},
	layers: [
		{
			id: 'osm',
			type: 'raster',
			source: 'osm',
			layout: { visibility: 'visible' },
			paint: { 'raster-saturation': -1 },
		},
		{
			id: 'osmhot',
			type: 'raster',
			source: 'osmhot',
			layout: { visibility: 'none' },
		},
		{
			id: 'satellite',
			type: 'raster',
			source: 'satellite',
			layout: { visibility: 'none' },
		},
		{
			id: 'nightLightZScore2019',
			type: 'fill',
			'source-layer': 'night_light_z_score_2019_hex',
			source: 'nightLightZScore2019',
			paint: STYLES.POLYGON.NIGHT_LIGHT,
			layout: { visibility: 'none' },
		},
		{
			id: 'clusterAll',
			type: 'line',
			'source-layer': 'cluster_all_new',
			source: 'clusterAll',
			paint: STYLES.POLYGON.CLUSTERS.LINE,
			layout: { visibility: 'none' },
		},
		{
			id: 'clusterOffgrid',
			type: 'line',
			'source-layer': 'all_remotely_mapped_settlements',
			source: 'clusterOffgrid',
			paint: STYLES.POLYGON.CLUSTERS.LINE,
			layout: { visibility: 'none' },
		},
		{
			id: 'clusterAllRed',
			type: 'line',
			'source-layer': 'cluster_all_new',
			source: 'clusterAll',
			paint: STYLES.POLYGON.CLUSTERS.LINE_RED,
			layout: { visibility: 'none' },
		},
		{
			id: 'boundaries-viz',
			type: 'fill',
			'source-layer': 'nigeria_state_boundaries',
			source: 'boundaries',
			paint: STYLES.POLYGON.STATES.FILL_DISCO,
			layout: { visibility: 'none' },
		},
		{
			id: 'boundaries-line-viz',
			type: 'line',
			'source-layer': 'nigeria_state_boundaries',
			source: 'boundaries',
			paint: {
				'line-color': '#93939F',
			},
			layout: { visibility: 'none' },
		},
		{
			id: 'marketsBuffer',
			type: 'fill',
			'source-layer': 'grid3_market_buffer_merged',
			source: 'marketsBuffer',
			paint: STYLES.POLYGON.MARKETS.FILL,
			layout: { visibility: 'none' },
		},
		{
			id: 'se4allMvGrid',
			type: 'line',
			'source-layer': 'distribution_line_all_no_modell_mv',
			source: 'se4allMvGrid',
			paint: STYLES.LINE.MV_GRID,
			layout: { visibility: 'visible' },
		},
		{
			id: 'se4allMvModelledGrid',
			type: 'line',
			'source-layer': 'modelled_grid_no_mapped',
			source: 'se4allMvModelledGrid',
			paint: STYLES.LINE.MV_GRID_MODELLED,
			layout: { visibility: 'visible' },
		},
		{
			id: 'transmissionLine',
			type: 'line',
			'source-layer': 'osm_power_line_with_fmp_data',
			source: 'transmissionLine',
			paint: STYLES.LINE.HV_GRID,
			layout: { visibility: 'none' },
		},
		{
			id: 'boundaries-vizOverlay',
			type: 'fill',
			'source-layer': 'nigeria_state_boundaries',
			source: 'boundaries',
			paint: STYLES.POLYGON.STATES.STATE_OVERLAY,
			layout: { visibility: 'none' },
		},
		{
			id: 'selected-state-viz',
			type: 'line',
			'source-layer': 'nigeria_state_boundaries',
			source: 'boundaries',
			paint: {
				'line-color': `${COLOR.miniGrids}`,
				'line-width': 4,
			},
			layout: { visibility: 'none' },
		},
		{
			id: 'clusterOffgridSimple',
			type: 'circle',
			'source-layer': 'cluster_offgrid_simple',
			source: 'clusterOffgridSimple',
			paint: STYLES.POINT.CLUSTERS,
			layout: { visibility: 'none' },
		},
		{
			id: 'clusterOffgridSurveyed',
			type: 'circle',
			'source-layer': 'cluster_offgrid_survey',
			source: 'clusterOffgridSurveyed',
			paint: STYLES.POINT.CLUSTERS_SURVEY,
			layout: { visibility: 'none' },
		},
		{
			id: 'clusterOffgridSurveyedGrid',
			type: 'circle',
			'source-layer': 'cluster_offgrid_survey',
			source: 'clusterOffgridSurveyed',
			paint: STYLES.POINT.CLUSTERS_SURVEY_GRID,
			layout: { visibility: 'none' },
		},
		{
			id: 'clusterAllSimple',
			type: 'circle',
			'source-layer': 'cluster_all_simple_new',
			source: 'clusterAllSimple',
			paint: STYLES.POINT.CLUSTERS_INTERCONNECTED,
			layout: { visibility: 'none' },
		},
		{
			id: 'shsClusters',
			type: 'circle',
			'source-layer': 'cluster_all_simple_new',
			source: 'clusterAllSimple',
			paint: STYLES.POINT.CLUSTERS_SHS,
			layout: { visibility: 'none' },
		},
		{
			id: 'powerSectorClusters',
			type: 'circle',
			'source-layer': 'cluster_all_simple_new',
			source: 'clusterAllSimple',
			paint: STYLES.POINT.CLUSTERS_POWER_SECTOR,
			layout: { visibility: 'none' },
		},
		{
			id: 'minigrids',
			type: 'circle',
			'source-layer': 'minigrids',
			source: 'minigrids',
			paint: STYLES.POINT.MINIGRIDS,
			layout: { visibility: 'visible' },
		},
		{
			id: 'powerPlants',
			type: 'circle',
			'source-layer': 'power_plants',
			source: 'powerPlants',
			paint: STYLES.POINT.POWER_PLANTS,
			layout: { visibility: 'none' },
		},
		{
			id: 'markets',
			type: 'circle',
			'source-layer': 'grid3_market_edited',
			source: 'markets',
			paint: STYLES.POINT.MARKETS,
			layout: { visibility: 'none' },
		},
	],
};

export const STATE_NAMES = [
	'Abia',
	'Adamawa',
	'Akwa Ibom',
	'Anambra',
	'Bauchi',
	'Bayelsa',
	'Benue',
	'Borno',
	'Cross River',
	'Delta',
	'Ebonyi',
	'Edo',
	'Ekiti',
	'Enugu',
	'Gombe',
	'Imo',
	'Jigawa',
	'Kaduna',
	'Kano',
	'Katsina',
	'Kebbi',
	'Kogi',
	'Kwara',
	'Lagos',
	'Nasarawa',
	'Niger',
	'Ogun',
	'Ondo',
	'Osun',
	'Oyo',
	'Plateau',
	'Rivers',
	'Sokoto',
	'Taraba',
	'Yobe',
	'Zamfara',
	'Federal Capital Territory',
];

export const ADM1BBOX = {
	type: 'FeatureCollection',
	name: 'boundaries_geoJSON_simplified_1000_bbox',
	crs: { type: 'name', properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' } },
	features: [
		{
			type: 'Feature',
			properties: {
				name: 'Yobe',
				disco: 'yola',
				'ISO3166-2': 'NG-YO',
				width: 2.829085,
				height: 2.812978,
				area: 7.958156,
				perimeter: 11.284127,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[9.6748363, 10.5676346],
						[12.5039215, 10.5676346],
						[12.5039215, 13.380613],
						[9.6748363, 13.380613],
						[9.6748363, 10.5676346],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Jigawa',
				disco: 'kano',
				'ISO3166-2': 'NG-JI',
				width: 2.474163,
				height: 2.080803,
				area: 5.148245,
				perimeter: 9.109931,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[8.1279186, 10.9467658],
						[10.6020814, 10.9467658],
						[10.6020814, 13.0275686],
						[8.1279186, 13.0275686],
						[8.1279186, 10.9467658],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Zamfara',
				disco: 'kaduna',
				'ISO3166-2': 'NG-ZA',
				width: 2.385823,
				height: 2.319029,
				area: 5.532793,
				perimeter: 9.409704,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[4.8607454, 10.8634214],
						[7.2465682, 10.8634214],
						[7.2465682, 13.1824507],
						[4.8607454, 13.1824507],
						[4.8607454, 10.8634214],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Sokoto',
				disco: 'kaduna',
				'ISO3166-2': 'NG-SO',
				width: 2.678519,
				height: 2.355331,
				area: 6.308797,
				perimeter: 10.067699,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[4.141604, 11.5303145],
						[6.820123, 11.5303145],
						[6.820123, 13.885645],
						[4.141604, 13.885645],
						[4.141604, 11.5303145],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Kebbi',
				disco: 'kaduna',
				'ISO3166-2': 'NG-KE',
				width: 2.685411,
				height: 3.144531,
				area: 8.444356,
				perimeter: 11.659883,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[3.4763165, 10.1005802],
						[6.1617271, 10.1005802],
						[6.1617271, 13.245111],
						[3.4763165, 13.245111],
						[3.4763165, 10.1005802],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Kaduna',
				disco: 'kaduna',
				'ISO3166-2': 'NG-KD',
				width: 2.733777,
				height: 2.522338,
				area: 6.895511,
				perimeter: 10.512231,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[6.0897441, 9.0014315],
						[8.8235216, 9.0014315],
						[8.8235216, 11.5237694],
						[6.0897441, 11.5237694],
						[6.0897441, 9.0014315],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Kano',
				disco: 'kano',
				'ISO3166-2': 'NG-KN',
				width: 1.685141,
				height: 2.0565,
				area: 3.465491,
				perimeter: 7.48328,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[7.6751709, 10.5433585],
						[9.3603115, 10.5433585],
						[9.3603115, 12.5998581],
						[7.6751709, 12.5998581],
						[7.6751709, 10.5433585],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Katsina',
				disco: 'kano',
				'ISO3166-2': 'NG-KT',
				width: 2.195339,
				height: 2.213437,
				area: 4.859243,
				perimeter: 8.81755,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[6.852, 11.1288363],
						[9.0473385, 11.1288363],
						[9.0473385, 13.342273],
						[6.852, 13.342273],
						[6.852, 11.1288363],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Abia',
				disco: 'enugu',
				'ISO3166-2': 'NG-AB',
				width: 0.843733,
				height: 1.219131,
				area: 1.028622,
				perimeter: 4.125729,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[7.1437678, 4.8230184],
						[7.9875011, 4.8230184],
						[7.9875011, 6.0421495],
						[7.1437678, 6.0421495],
						[7.1437678, 4.8230184],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Akwa Ibom',
				disco: 'port-harcourt',
				'ISO3166-2': 'NG-AK',
				width: 0.899169,
				height: 1.05467,
				area: 0.948326,
				perimeter: 3.907677,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[7.4602752, 4.461663],
						[8.3594437, 4.461663],
						[8.3594437, 5.5163331],
						[7.4602752, 5.5163331],
						[7.4602752, 4.461663],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Anambra',
				disco: 'yola',
				'ISO3166-2': 'NG-AN',
				width: 0.70511,
				height: 1.078841,
				area: 0.760702,
				perimeter: 3.567902,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[6.6339529, 5.7218294],
						[7.3390627, 5.7218294],
						[7.3390627, 6.8006706],
						[6.6339529, 6.8006706],
						[6.6339529, 5.7218294],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Bayelsa',
				disco: 'port-harcourt',
				'ISO3166-2': 'NG-BY',
				width: 1.238431,
				height: 1.114375,
				area: 1.380077,
				perimeter: 4.705613,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[5.36881, 4.2652807],
						[6.6072412, 4.2652807],
						[6.6072412, 5.3796559],
						[5.36881, 5.3796559],
						[5.36881, 4.2652807],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Benue',
				disco: 'jos',
				'ISO3166-2': 'NG-BE',
				width: 2.354139,
				height: 1.71549,
				area: 4.038503,
				perimeter: 8.139259,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[7.5305138, 6.4426776],
						[9.8846531, 6.4426776],
						[9.8846531, 8.1581678],
						[7.5305138, 8.1581678],
						[7.5305138, 6.4426776],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Cross River',
				disco: 'port-harcourt',
				'ISO3166-2': 'NG-CR',
				width: 1.630218,
				height: 2.221968,
				area: 3.622293,
				perimeter: 7.704373,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[7.8408742, 4.6744444],
						[9.4710922, 4.6744444],
						[9.4710922, 6.8964128],
						[7.8408742, 6.8964128],
						[7.8408742, 4.6744444],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Delta',
				disco: 'benin',
				'ISO3166-2': 'NG-DE',
				width: 1.792603,
				height: 1.489788,
				area: 2.670599,
				perimeter: 6.564782,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[4.9767991, 5.0114459],
						[6.769402, 5.0114459],
						[6.769402, 6.5012341],
						[4.9767991, 6.5012341],
						[4.9767991, 5.0114459],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Ebonyi',
				disco: 'enugu',
				'ISO3166-2': 'NG-EB',
				width: 0.915091,
				height: 1.109711,
				area: 1.015487,
				perimeter: 4.049604,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[7.5395718, 5.6847997],
						[8.454663, 5.6847997],
						[8.454663, 6.7945107],
						[7.5395718, 6.7945107],
						[7.5395718, 5.6847997],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Edo',
				disco: 'benin',
				'ISO3166-2': 'NG-ED',
				width: 1.706265,
				height: 1.843085,
				area: 3.144791,
				perimeter: 7.0987,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[5.0095036, 5.748332],
						[6.7157688, 5.748332],
						[6.7157688, 7.5914168],
						[5.0095036, 7.5914168],
						[5.0095036, 5.748332],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Ekiti',
				disco: 'benin',
				'ISO3166-2': 'NG-EK',
				width: 0.927754,
				height: 0.828059,
				area: 0.768235,
				perimeter: 3.511626,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[4.8638616, 7.2831869],
						[5.7916155, 7.2831869],
						[5.7916155, 8.1112461],
						[4.8638616, 8.1112461],
						[4.8638616, 7.2831869],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Enugu',
				disco: 'enugu',
				'ISO3166-2': 'NG-EN',
				width: 0.971728,
				height: 1.17902,
				area: 1.145687,
				perimeter: 4.301496,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[6.9316678, 5.9246402],
						[7.9033957, 5.9246402],
						[7.9033957, 7.1036601],
						[6.9316678, 7.1036601],
						[6.9316678, 5.9246402],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Federal Capital Territory',
				disco: 'abuja',
				'ISO3166-2': 'NG-FC',
				width: 0.945558,
				height: 0.951135,
				area: 0.899353,
				perimeter: 3.793386,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[6.7785225, 8.45755],
						[7.7240805, 8.45755],
						[7.7240805, 9.408685],
						[6.7785225, 9.408685],
						[6.7785225, 8.45755],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Imo',
				disco: 'enugu',
				'ISO3166-2': 'NG-IM',
				width: 0.793206,
				height: 0.743064,
				area: 0.589403,
				perimeter: 3.072539,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[6.63908, 5.1958671],
						[7.4322858, 5.1958671],
						[7.4322858, 5.938931],
						[6.63908, 5.938931],
						[6.63908, 5.1958671],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Kogi',
				disco: 'abuja',
				'ISO3166-2': 'NG-KO',
				width: 2.542598,
				height: 2.206435,
				area: 5.610077,
				perimeter: 9.498066,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[5.3228297, 6.5323563],
						[7.8654275, 6.5323563],
						[7.8654275, 8.7387915],
						[5.3228297, 8.7387915],
						[5.3228297, 6.5323563],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Kwara',
				disco: 'ibadan',
				'ISO3166-2': 'NG-KW',
				width: 3.479227,
				height: 2.160652,
				area: 7.517399,
				perimeter: 11.279758,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[2.7293088, 8.0076733],
						[6.2085361, 8.0076733],
						[6.2085361, 10.1683251],
						[2.7293088, 10.1683251],
						[2.7293088, 8.0076733],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Lagos',
				disco: 'ikeja-and-eko',
				'ISO3166-2': 'NG-LA',
				width: 1.645011,
				height: 0.329741,
				area: 0.542428,
				perimeter: 3.949504,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[2.7060443, 6.3670553],
						[4.351055, 6.3670553],
						[4.351055, 6.6967964],
						[2.7060443, 6.6967964],
						[2.7060443, 6.3670553],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Niger',
				disco: 'abuja',
				'ISO3166-2': 'NG-NI',
				width: 3.801845,
				height: 3.187879,
				area: 12.119825,
				perimeter: 13.97945,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[3.576801, 8.1830063],
						[7.3786463, 8.1830063],
						[7.3786463, 11.3708858],
						[3.576801, 11.3708858],
						[3.576801, 8.1830063],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Ogun',
				disco: 'ibadan',
				'ISO3166-2': 'NG-OG',
				width: 1.919066,
				height: 1.669112,
				area: 3.203136,
				perimeter: 7.176356,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[2.6905199, 6.2802041],
						[4.6095858, 6.2802041],
						[4.6095858, 7.949316],
						[2.6905199, 7.949316],
						[2.6905199, 6.2802041],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Ondo',
				disco: 'benin',
				'ISO3166-2': 'NG-ON',
				width: 1.62797,
				height: 1.859917,
				area: 3.027889,
				perimeter: 6.975774,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[4.3761201, 5.8874018],
						[6.0040903, 5.8874018],
						[6.0040903, 7.7473187],
						[4.3761201, 7.7473187],
						[4.3761201, 5.8874018],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Osun',
				disco: 'ibadan',
				'ISO3166-2': 'NG-OS',
				width: 1.004704,
				height: 1.114648,
				area: 1.119891,
				perimeter: 4.238704,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[4.0529289, 6.980855],
						[5.0576329, 6.980855],
						[5.0576329, 8.0955029],
						[4.0529289, 8.0955029],
						[4.0529289, 6.980855],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Adamawa',
				disco: 'yola',
				'ISO3166-2': 'NG-AD',
				width: 2.38803,
				height: 3.591025,
				area: 8.575474,
				perimeter: 11.958109,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[11.3415213, 7.358373],
						[13.729551, 7.358373],
						[13.729551, 10.949398],
						[11.3415213, 10.949398],
						[11.3415213, 7.358373],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Gombe',
				disco: 'jos',
				'ISO3166-2': 'NG-GO',
				width: 1.384725,
				height: 1.766474,
				area: 2.44608,
				perimeter: 6.302397,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[10.4731255, 9.5460062],
						[11.8578501, 9.5460062],
						[11.8578501, 11.31248],
						[10.4731255, 11.31248],
						[10.4731255, 9.5460062],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Nasarawa',
				disco: 'abuja',
				'ISO3166-2': 'NG-NA',
				width: 2.688166,
				height: 1.563072,
				area: 4.201797,
				perimeter: 8.502475,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[6.9346313, 7.7661829],
						[9.622797, 7.7661829],
						[9.622797, 9.3292549],
						[6.9346313, 9.3292549],
						[6.9346313, 7.7661829],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Oyo',
				disco: 'ibadan',
				'ISO3166-2': 'NG-OY',
				width: 1.890684,
				height: 2.104733,
				area: 3.979386,
				perimeter: 7.990835,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[2.678314, 7.0835776],
						[4.5689983, 7.0835776],
						[4.5689983, 9.1883106],
						[2.678314, 9.1883106],
						[2.678314, 7.0835776],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Plateau',
				disco: 'jos',
				'ISO3166-2': 'NG-PL',
				width: 2.082878,
				height: 2.015363,
				area: 4.197755,
				perimeter: 8.196482,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[8.5550385, 8.367342],
						[10.6379166, 8.367342],
						[10.6379166, 10.3827047],
						[8.5550385, 10.3827047],
						[8.5550385, 8.367342],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Rivers',
				disco: 'port-harcourt',
				'ISO3166-2': 'NG-RI',
				width: 1.205689,
				height: 1.422336,
				area: 1.714895,
				perimeter: 5.25605,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[6.3983941, 4.3079561],
						[7.604083, 4.3079561],
						[7.604083, 5.730292],
						[6.3983941, 5.730292],
						[6.3983941, 4.3079561],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Taraba',
				disco: 'yola',
				'ISO3166-2': 'NG-TA',
				width: 2.783002,
				height: 3.118438,
				area: 8.67862,
				perimeter: 11.802881,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[9.1203308, 6.500027],
						[11.9033327, 6.500027],
						[11.9033327, 9.6184654],
						[9.1203308, 9.6184654],
						[9.1203308, 6.500027],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Borno',
				disco: 'yola',
				'ISO3166-2': 'NG-BO',
				width: 3.145566,
				height: 3.699128,
				area: 11.635851,
				perimeter: 13.689388,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[11.5293356, 10.0221825],
						[14.674902, 10.0221825],
						[14.674902, 13.72131],
						[11.5293356, 13.72131],
						[11.5293356, 10.0221825],
					],
				],
			},
		},
		{
			type: 'Feature',
			properties: {
				name: 'Bauchi',
				disco: 'jos',
				'ISO3166-2': 'NG-BA',
				width: 2.274056,
				height: 3.018905,
				area: 6.865158,
				perimeter: 10.585921,
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[8.7492195, 9.5012255],
						[11.0232754, 9.5012255],
						[11.0232754, 12.5201302],
						[8.7492195, 12.5201302],
						[8.7492195, 9.5012255],
					],
				],
			},
		},
	],
};
