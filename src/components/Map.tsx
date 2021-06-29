import 'mapbox-gl/dist/mapbox-gl.css'

import { Center, Text, useColorModeValue } from '@chakra-ui/react'
import ReactMapGL, { Popup } from 'react-map-gl'

import React from 'react'
import { useState } from 'react'

interface mapInfo {
  latitude: number
  longitude: number
  zoom: number
}

const Emoji = (props: { label?: string; symbol: string }) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ''}
    aria-hidden={props.label ? 'false' : 'true'}
  >
    {props.symbol}
  </span>
)

const Map = ({ mapboxApiAccessToken }: { mapboxApiAccessToken: string }) => {
  const [viewport, setViewport] = useState({
    latitude: 42.724078,
    longitude: -84.480916,
    zoom: 11,
  })
  const styleUrl = useColorModeValue(
    'mapbox://styles/mapbox/outdoors-v11',
    'mapbox://styles/mapbox/outdoors-v11'
  )
  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(nextViewport: React.SetStateAction<mapInfo>) => setViewport(nextViewport)}
      mapStyle={styleUrl}
      width="100%"
      height={400}
      mapboxApiAccessToken={mapboxApiAccessToken}
    >
      <Popup
        latitude={42.724078}
        longitude={-84.480916}
        closeButton={false}
        closeOnClick={false}
        anchor="bottom"
      >
        <Center color="black">
          <Emoji symbol="🏢 " />
          <Text ml="2">My Office</Text>
        </Center>
      </Popup>
    </ReactMapGL>
  )
}

export default Map
