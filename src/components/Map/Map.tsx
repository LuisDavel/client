// import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
export type CordenateProps = {
  latitude: number;
  longitude: number;
};

export default function Map({ latitude, longitude }: CordenateProps) {
  const greenIcon = new L.Icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <MapContainer
      style={{ width: '100%', height: '100%' }}
      zoom={13}
      center={[-28.681047, -49.369862]}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Circle center={[latitude, longitude]} radius={150} /> */}
      <Marker position={[latitude, longitude]} icon={greenIcon}>
        <Popup>Onde você está</Popup>
      </Marker>
      <Marker position={[-28.681047, -49.369862]}>
        <Popup>
          <h1>PetCampo</h1>
          <img
            width={150}
            height={120}
            src="https://lh5.googleusercontent.com/p/AF1QipOZPZaYwTttFiTtrsOZUm5UEjfuXA2GEuRGZH2U=w203-h152-k-no"
            alt="https://goo.gl/maps/fvDc9YZ9CooyDd5W6"
          />
        </Popup>
      </Marker>
    </MapContainer>
  );
}
