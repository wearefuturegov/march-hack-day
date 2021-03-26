import React from "react"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

const Map = ({plans}) => (
  <MapContainer
    style={{ height: "300px" }}
    center={[51.505, -0.09]}
    zoom={13}
    scrollWheelZoom={false}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
      plans.map(plan => (
        <Marker position={[plan.latitude, plan.longitude]}>
          <Popup>
            {plan.development_description} <br /> {plan.registered_date}
          </Popup>
        </Marker>
      ))
    }
  </MapContainer>
)

export default Map
