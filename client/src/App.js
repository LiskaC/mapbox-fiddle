import React, { useState } from "react";
import ReactMapGL, {Marker} from "react-map-gl";
import * as fireData from "./data/FIRE_FACILITY_WGS84.json"; //want to have this in the server instead
import './App.css';
import './styles/Marker.css';
import './styles/Icon.css';
import './styles/Marker-Button.css';
import fireIcon from "./assets/fire-icon.jpg";

function App() {
  const [viewport, setViewport] = useState({
    latitude: 43.6532,
    longitude: -79.3832,
    width: '100vw',
    height: '100vh',
    zoom: 10,
    position: "center"
  })

  const [selectedPark, setSelectedPark] = useState(null);

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


{fireData.default.map((park) => {
  return <Marker
  key={[park]}
  latitude={[park][0][1]}
  longitude={[park][0][0]}
  offsetTop={-25}
  > 
  
  <button className="marker-btn" onClick={(e) => {
    e.preventDefault();
    setSelectedPark(park)
    console.log(selectedPark)
  }}>
    <img src={fireIcon} alt="FIRESTATION" className="icon" />
  </button>

  </Marker>
})}
      </ReactMapGL>
    </div>
  );
}

export default App;
