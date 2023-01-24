// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import { celebrate, Joi } from 'celebrate';
import next from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const token = getCookie('@localize:idUser', { req, res });
  try {
    celebrate({
      body: Joi.object().keys({
        name: Joi.string().required(),
        type: Joi.string().required(),
        image: Joi.string().required(),
        dt_born: Joi.date().required(),
        race: Joi.string().required(),
        email: Joi.string().required(),
        size: Joi.string().required(),
        temperament: Joi.string().required()
      })
    })(req, res);
  } catch (err) {
    return res.status(400).json({ message: 'Invalid body' });
  }
  const { name, type, image, dt_born, race, email, size, temperament } =
    req.body;
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
