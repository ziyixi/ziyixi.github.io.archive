import 'mapbox-gl/dist/mapbox-gl.css'
import React from 'react'
import { useState } from 'react'
import ReactMapGL, { Popup } from 'react-map-gl'
import Emoji from '../utils/emoji'

interface mapInfo {
    latitude: number
    longitude: number
    zoom: number
}

const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 42.724078,
        longitude: -84.480916,
        zoom: 11,
    })
    return (
        <ReactMapGL
            {...viewport}
            onViewportChange={(nextViewport: React.SetStateAction<mapInfo>) =>
                setViewport(nextViewport)
            }
            mapStyle="mapbox://styles/mapbox/streets-v11"
            width="100%"
            height={400}
            mapboxApiAccessToken="pk.eyJ1Ijoieml5aXhpIiwiYSI6ImNrN2YzMWJwODE2azYzem15MmdwbnN1M2YifQ.h1UJGkPrn5mW1aqg5voOnA"
        >
            <Popup
                latitude={42.724078}
                longitude={-84.480916}
                closeButton={false}
                closeOnClick={false}
                anchor="bottom"
            >
                <div>
                    <Emoji symbol="🏢 " /> My Office
                </div>
            </Popup>
        </ReactMapGL>
    )
}

export default Map
