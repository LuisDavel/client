// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export type DataProps = {
  name: string;
  idade: number;
  sexo: string;
  raca: string;
  img: string;
  endereco: string;
  telefone: string;
  temperamento: string;
  tamanho: string;
  descricao: string;
  latitude: number;
  longitude: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    name: 'Lucky',
    idade: 12,
    sexo: 'Macho',
    raca: 'Shih Tzu',
    img: '../image/r.jpeg',
    endereco: 'Rua José Bonifácio nº70 APT 505',
    telefone: '+55 (48) 99844-7068',
    temperamento: 'Manso',
    tamanho: 'Pequeno',
    descricao:
      'O Lucky possui problemas respiratorios então ele não aguenta uma caminhada longa 😭',
    latitude: 12,
    longitude: 45
  });
}
