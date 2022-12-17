// import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
export type CordenateProps = {
  latitude: number;
  longitude: number;
};

export default function Map({ latitude, longitude }: CordenateProps) {
  // const geo = [latitude, longitude];

  return (
    <MapContainer
      style={{ width: '100%', height: '100%' }}
      zoom={17}
      center={[latitude, longitude]}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup></Popup>
      </Marker>
    </MapContainer>
  );
}
