import { setCookie } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, cpf, image, email, dt_born, gender, number } = req.body;
  const userExists = await prisma.entity.findUnique({
    where: {
      cpf: cpf
    }
  });

  if (userExists) {
    return res.status(400).json({
      message: 'Já existe um usuário com este nome.'
    });
  }

  const user = await prisma.entity.create({
    data: {
      name: name,
      email: email,
      cpf: cpf,
      photo_user: image,
      dt_born: dt_born,
      gender: gender,
      number: number,
      userGoogle: email
    }
  });

  if (res.status(200)) {
    setCookie('@localize:idUser', user.email, { res, req });
  }
  res.status(200).json(user);
  return;
}
