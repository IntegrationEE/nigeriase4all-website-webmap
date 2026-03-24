import React, { useState, useRef } from "react";
import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

//Services and utils
import {OFFGRID_MG_PATH,INTERCONNECTED_MG_PATH,POWER_SECTOR_PATH,SOLAR_HOME_SYSTEM_PATH} from "./utils/paths";

//Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
 

  const map = useRef(null);

  return (
    <div className="App">
      {/* Navigation bar - Minigrid, Power Sector, Solar Home System  

        When one is clicked, the map loads the layers associated on the map. It's more like a switch
      
      */}

      <div className="navbar">
        <Navbar/>
      </div>

      {/* The filters and layer controllers  */}

      <div className="sidebar">
        <Sidebar map={map} mapLoaded = {mapLoaded}
/>
      </div>

      {/* The main map  */}

      <div className="content">
        <Map
          map={map}
          mapLoaded = {mapLoaded}
          setMapLoaded = {setMapLoaded}
          dataLoaded = {dataLoaded}
          setDataLoaded = {setDataLoaded}
        />
      </div>

      {/* The footer. Static, does not change  */}

      <div className="footer">
        <Footer />
      </div>

      {/* Controls the paths and routes of the web map  */}

      <Routes>
        {/* No landing page for now, so by default the home route should navigate to the offgrid-mgrid page  */}

        <Route
          exact
          path="/"
          element={<Navigate to={OFFGRID_MG_PATH} />}
        />

        <Route
          exact
          path={INTERCONNECTED_MG_PATH}
          element={
            <MinigridInterconnectedPage/>
          }
        />

        {/* The default page that loads when the site is visited */}

        <Route
          exact
          path={OFFGRID_MG_PATH}
          element={<MinigridOffgridPage/>}
        />

        <Route
          exact
          path={POWER_SECTOR_PATH}
          element={<PowerSectorPage/>}
        />
        <Route
          exact
          path={SOLAR_HOME_SYSTEM_PATH}
          element={<SolarHomeSystemPage/>}
        />
      </Routes>
    </div>
  );
}

export default App;

const MinigridOffgridPage = () =>  null;
const MinigridInterconnectedPage = () =>  null;
const PowerSectorPage = () =>  null;
const SolarHomeSystemPage = () =>  null;
