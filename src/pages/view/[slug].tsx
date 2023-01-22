import { GetStaticPaths, GetStaticProps } from 'next';
import { prisma } from '../../lib/prisma';
import { HeadProfileProps } from 'components/ContentProfile/ContentHead';
import { BodyProfileProps } from 'components/ContentProfile/ContentBody';
import ContentProfile from 'components/ContentProfile';
import { ViewProps } from 'utils/helpers/types';
import { yearDog } from 'utils/helpers/functions';
import { useRouter } from 'next/router';

export default function Teste({ data }: any) {
  // const router = useRouter();
  const result: ViewProps = JSON.parse(data)[0];
  if (result.view == null) {
    return alert('N possui cadastro');
  }
  console.log(result);

  const dataHead: HeadProfileProps = {
    name: result.view.fk_id_animal.name,
    idade: yearDog(result.view.fk_id_animal.dt_born),
    sexo: data.sexo,
    raca: result.view.fk_id_animal.race,
    img: result.view.fk_id_animal.photo_profile
  };

  const dataBody: BodyProfileProps = {
    endereco: `${result.view.address}, ${result.view.number}${
      result.view.complement == null ? '' : ', ' + result.view.complement
    } - ${result.view.district}, ${result.view.city} - ${result.view.state} `,
    telefone: result.view.fk_id_animal.fk_id_entity.number,
    temperamento: result.view.fk_id_animal.temperament,
    tamanho: result.view.fk_id_animal.size,
    descricao: result.view.descript,
    latitude: data.latitude,
    longitude: data.longitude
  };

  return (
    <ContentProfile
      bodyProps={dataBody}
      headProps={dataHead}
      latitude={0}
      longitude={0}
    />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const user = await prisma.qrCode.findMany({
    select: {
      hash: true
    }
  });
  const pathHash = user.map((v) => v.hash);
  return {
    paths: pathHash.map((slug) => `/view/${slug}`),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const user = await prisma.qrCode.findMany({
    where: {
      hash: String(slug)
    },
    include: {
      view: {
        include: {
          fk_id_animal: {
            include: {
              fk_id_entity: true
            }
          }
        }
      }
    }
  });

  return {
    props: {
      data: JSON.stringify(user)
    }
  };
};
