import ContentProfile from 'components/ContentProfile';
import { useEffect, useState } from 'react';
// import Main from 'components/Main';

export default function Home() {
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const cordinate = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      setPosition(cordinate);
    });
  }, []);
  return (
    <ContentProfile
      latitude={position.latitude}
      longitude={position.longitude}
    />
  );
}
