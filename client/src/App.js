import React, { useState } from "react";
import ReactMapGL, {Marker} from "react-map-gl";
import * as fireData from "./data/FIRE_FACILITY_WGS84.json"; //want to have this in the server instead
import './App.css';
import './styles/Marker.css';

function App() {
  const [viewport, setViewport] = useState({
    latitude: 43.6532,
    longitude: -79.3832,
    width: '100vw',
    height: '100vh',
    zoom: 10,
    position: "center"
  })
  return (
    <div className="App">
      <p>maaaap</p>
      <ReactMapGL 
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      /* {process.env.REACT_APP_MAPBOX_TOKEN} <= not reading the .env .  */
      mapStyle="mapbox://styles/liskac/ckhkommsp0a8x19l9i10ihn7x"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
      >


{fireData.default.map((i) => {
  console.log([i][0])
  return <Marker
  key={[i]}
  latitude={[i][0][1]}
  longitude={[i][0][0]}
  className="marker"
  offsetTop={-25}
  />
})}
      </ReactMapGL>
    </div>
  );
}

export default App;
