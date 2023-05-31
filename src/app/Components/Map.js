import React from 'react'
import ReactMap from 'react-map-gl';
import { useState } from 'react';
function Map() {

    const [viewport,setviewport]=useState({
        height:"100%",
        width:"100%",
        longitude: -122.27,
        latitude: 40,
        zoom: 11
    })
  return (
    <ReactMap
    mapStyle={"mapbox://styles/hemanth0107/cli8epkt000g201qyf7li09gi"}
    mapboxAccessToken={process.env.mapbox_key}
    {...viewport}
    onViewportChange={(nextViewport)=>setviewport(nextViewport)}
    >
        
    </ReactMap>
  )
}

export default Map

