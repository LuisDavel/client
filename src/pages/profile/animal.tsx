import prisma from 'lib/prisma';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import TAnimal from '../../template/Tprofile/TAnimal';
import TProfile from 'template/Tprofile';
// import { removeCookies } from 'cookies-next';

export default function ProfileAnimal({ user }: any) {
  const data = JSON.parse(user);
  const animal = data.animals;
  console.log(animal);
  return (
    <TProfile>
      <TAnimal data={animal} />
    </TProfile>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  // removeCookies('@localize:idAnimal', context);
  const session = await getSession(context);
  const user = await prisma.entity.findMany({
    where: {
      email: session?.user?.email
    },
    include: {
      animals: {
        include: {
          qrCode: {
            include: {
              view: true
            }
          }
        }
      }
    }
  });
  return {
    props: {
      user: JSON.stringify(user[0])
    }
  };
};
