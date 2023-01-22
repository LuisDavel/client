import { setCookie } from 'cookies-next';
import prisma from 'lib/prisma';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { useSession, getSession } from 'next-auth/react';
import TProfile from 'template/Tprofile';
import { AnimalProps } from 'utils/helpers/types';

export default function ProfileMenu({ user }: any) {
  // const session = useSession();
  const data = JSON.parse(user);
  const animal = data.animals;
  console.log(animal);
  return (
    <TProfile>
      <div>Cabecalho</div>
      <div>
        {animal.map((v: AnimalProps, index: number) => (
          <>
            <div key={index}>{v.name}</div>
            <div key={index}>{v.dt_born}</div>
            <div key={index}>{v.photo_profile}</div>
            <div key={index}>{v.race}</div>
            <div key={index}>{v.type_animal}</div>
          </>
        ))}
      </div>
    </TProfile>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  // setCookie('@localize:idUser',);
  const user = await prisma.entity.findMany({
    where: {
      email: session?.user?.email
    },
    include: {
      animals: {
        include: {
          qrCode: true
        }
      }
    }
  });
  return {
    props: {
      user: JSON.stringify(user[0]),
      email: session?.user?.email,
      oi: '?'
    }
  };
};
