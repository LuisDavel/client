// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  const { name, type, image, dt_born, race, email, size, temperament } =
    req.body;
  const token = getCookie('@localize:idUser', { req, res });
  console.log(email);
  const animal = await prisma.animal.create({
    data: {
      name: name,
      dt_born: dt_born,
      race: race,
      photo_profile: image,
      type_animal: type,
      size: size,
      temperament: temperament,
      relation_animal: String(token)
    }
  });

  if (res.status(200)) {
    deleteCookie('@localize:idUser', { res, req });
    setCookie('@localize:idAnimal', animal.id, { res, req });
  }

  res.status(200).json(animal);
}
