import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import './App.css';

function App() {
  const [viewport, setViewport] = useState({
    latitude: 45,
    longitude: -75,
    width: '100vw',
    height: '100vh',
    zoom: 10
  })
  return (
    <div className="App">
      <p>maaaap</p>
      <ReactMapGL 
      {...viewport}
      mapboxApiAccessToken={""}
      /* {process.env.REACT_APP_MAPBOX_TOKEN} <= not reading the .env .  */
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
      >
        markers here
      </ReactMapGL>
    </div>
  );
}

export default App;
