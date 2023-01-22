// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../../../lib/prisma';

import { getCookie, setCookie } from 'cookies-next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  const { hash } = req.body;
  const token = getCookie('@localize:idAnimal', { req, res });
  // console.log('SOU UMA HASH=========================================');
  // console.log(token);
  const existHash = await prisma.qrCode.findUnique({
    where: {
      hash: hash
    }
  });

  if (existHash?.animals || !existHash) {
    return res.status(400).json({
      message: 'Esta hash ja está sendo utilizada ou não existe.'
    });
  }

  const qrcode = await prisma.qrCode.update({
    where: {
      hash: hash
    },
    data: {
      animals: String(token)
    }
  });

  if (res.status(200)) {
    // console.log('To aqui ?');
    setCookie('@localize:idQrcode', qrcode.id, { res, req });
  }
  return res.status(200).json(qrcode);
}
