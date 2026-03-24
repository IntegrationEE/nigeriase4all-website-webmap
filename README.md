
## 🧑‍💻 Code contributers 
- [yelsre](https://github.com/yelsre)
- [jeafreezy](https://github.com/jeafreezy)
- [AWeissMotz](https://github.com/AWeissMotz)

## ⚖️ Licences & accreditation

### Project accreditation

Webmaps were created as part of the Nigerian Energy Support Programme (NESP). NESP is co-funded by the European Union and the German Federal Ministry for Economic Development and Cooperation (BMZ) and is jointly implemented by Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH in collaboration with Federal Ministry of Power.

### Licensing and copyright

Code is released as-is, without liability.
- copyright = © Integration Environment & Energy
- license = GNU Affero General Public License Version 3 (AGPL-3.0)
- url = https://www.gnu.org/licenses/agpl-3.0.en.html

## 🔧 Tools & resources

- Icons from [OpenMoji](https://openmoji.org/) or the open source [Font Awesome v4](https://fontawesome.com/v4/)
- [SVG2JSX](https://svg2jsx.com/) for converting svg to JSX
- [TinyPNG Compressor](https://tinypng.com/) or [Squoosh](https://squoosh.app/) for compressing images

## 🧑‍💼 Organisations

- [Integration environment & energy](https://www.integration.org/) 
- [Reiner Lemoine Institute](https://www.reiner-lemoine-institut.de/en/)

## ➕ Dependencies

### [React Router Dom](https://reactrouter.com/en/main)
- **React Router Dom** is a standard routing library for React, enabling dynamic routing in web applications. [React Router Documentation](https://reactrouter.com/en/main/start/tutorial)

### [Maplibre GL](https://maplibre.org/projects/maplibre-gl-js/)
- **Maplibre GL** is an open-source JavaScript library for interactive, customizable vector maps rendered in the browser. [Maplibre GL JS Documentation](https://maplibre.org/maplibre-gl-js-docs/)

### [Turf](https://turfjs.org/)
- **Turf** is a modular geospatial processing library for advanced geospatial analysis in JavaScript. This project uses several Turf modules:
	- [@turf/turf](https://turfjs.org/): Main Turf library, includes most geospatial functions.
	- [@turf/boolean-point-in-polygon](https://turfjs.org/docs/#booleanPointInPolygon): Checks if a point is inside a polygon.
	- [@turf/buffer](https://turfjs.org/docs/#buffer): Creates buffer polygons around features.
	- [@turf/points-within-polygon](https://turfjs.org/docs/#pointsWithinPolygon): Finds points within a given polygon.



## 📁 src Folder

The `src` folder contains the main source code for the application, organized as follows (one level deep):

- **App.css, App.js, App.test.js, index.css, index.js, reportWebVitals.js, setupTests.js**  
	Core React app files: main entry points, global styles, test setup, and performance reporting.

- **assets/**  
	Static assets such as icons and images.

- **components/**  
	All React UI components, organized by feature or section (e.g., Footer, Map, Navbar, Shared, Sidebar).

- **hooks/**  
	Custom React hooks for reusable logic (e.g., useDetectOutsideClick.js).

- **services/**  
	Service modules for data fetching and API interactions (e.g., clusterWfs, fetcher, geocoder).

- **utils/**  
	Utility functions and constants for use throughout the app (e.g., consts.js, dataHandler.js, paths.js).

Each subfolder under `components` (like Footer, Map, Navbar, Shared, Sidebar) contains related component files and their styles, further organized by feature.

