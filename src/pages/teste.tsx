import ContentProfile from 'components/ContentProfile';
import { useEffect, useState } from 'react';
import { DataProps } from './api/hello';
import { HeadProfileProps } from 'components/ContentProfile/ContentHead';
import { BodyProfileProps } from 'components/ContentProfile/ContentBody';
// import Main from 'components/Main';

export default function Test() {
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0
  });
  const [data, setData] = useState<DataProps>({
    descricao: '',
    endereco: '',
    idade: 0,
    img: '',
    latitude: 0,
    longitude: 0,
    name: '',
    raca: '',
    sexo: '',
    tamanho: '',
    telefone: '',
    temperamento: ''
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const cordinate = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      setPosition(cordinate);
    });

    fetch('api/hello')
      .then((res) => res.json())
      .then((data: DataProps) => {
        setData(data);
      });
  }, []);

  const dataBody: BodyProfileProps = {
    endereco: data.endereco,
    telefone: data.telefone,
    temperamento: data.temperamento,
    tamanho: data.tamanho,
    descricao: data.descricao,
    latitude: data.latitude,
    longitude: data.longitude
  };

  const dataHead: HeadProfileProps = {
    name: data.name,
    idade: data.idade,
    sexo: data.sexo,
    raca: data.raca,
    img: data.img
  };

  return (
    <ContentProfile
      bodyProps={dataBody}
      headProps={dataHead}
      latitude={position.latitude}
      longitude={position.longitude}
    />
  );
}
