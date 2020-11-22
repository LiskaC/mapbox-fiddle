import React, { useState} from "react";
import ReactMapGL, {Marker, Popup} from "react-map-gl";
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

  const [selectedFirehouse, setSelectedFirehouse] = useState(null);


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


{fireData.default.map((location) => {
  return <Marker
  key={[location]}
  latitude={[location][0][1]}
  longitude={[location][0][0]}
  offsetTop={-25}
  > 
  
  <button className="marker-btn" onClick={(e) => {
    e.preventDefault();
    setSelectedFirehouse(location)
    console.log(selectedFirehouse[0])
  }}>
    <img src={fireIcon} alt="FIRESTATION" className="icon" />
  </button>

  </Marker>
})}



{selectedFirehouse ? (
  <Popup
  latitude={selectedFirehouse[1]}
  longitude={selectedFirehouse[0]}
  offsetTop={-25}
  onClose={() => {
    setSelectedFirehouse(null)
  }}
  >
<div>
  <h2>Firehouse</h2>
  <p>latitude: {selectedFirehouse[1]}</p>
  <p>longitude: {selectedFirehouse[0]}</p>
</div>
  </Popup>
) : null}


      </ReactMapGL>
    </div>
  );
}

export default App;
