// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../../../lib/prisma';

import { getCookie, deleteCookie } from 'cookies-next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  const { complement, address, city, state, cep, district, number, descript } =
    req.body;

  console.log(req.body);
  const tokenAnimal = getCookie('@localize:idAnimal', { req, res });
  const tokenQrcode = getCookie('@localize:idQrcode', { req, res });
  const isExist = await prisma.viewRegister.findUnique({
    where: {
      view_Animal: String(tokenAnimal)
    }
  });

  if (isExist) {
    return res.status(400).json({
      message: 'Este endedereço ja está sendo utilizada ou não existe.'
    });
  }

  const user = await prisma.viewRegister.create({
    data: {
      view_Animal: String(tokenAnimal),
      view_QrCode: String(tokenQrcode),
      state: state,
      CEP: cep,
      address: address,
      city: city,
      district: district,
      number: number,
      descript: descript,
      complement: complement
    }
  });

  if (res.status(200)) {
    console.log('To aqui ?');
    console.log(user);
    deleteCookie('@localize:idAnimal', { res, req });
    deleteCookie('@localize:idQrcode', { res, req });
  }
  return res.status(200).json(user);
}
