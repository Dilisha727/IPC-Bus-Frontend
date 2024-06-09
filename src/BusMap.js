// src/BusMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for missing marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
 // iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
 // shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const BusMap = ({ buses }) => {
  return (
    <MapContainer center={[7.8731, 80.7718]} zoom={8} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {buses.map((bus, index) => (
        <Marker key={index} position={[bus.lat, bus.lng]}>
          <Popup>
            Bus ID: {bus.id} <br /> Latitude: {bus.lat} <br /> Longitude: {bus.lng} <br /> Bus Speed:
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default BusMap;
