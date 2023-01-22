import * as S from './styles';
import { AnimalProps } from 'utils/helpers/types';
import { yearDog } from 'utils/helpers/functions';
import Button from 'components/Button';
import { useRouter } from 'next/router';

type TempFormProp = {
  data: [];
};

export default function TAnimal({ data }: TempFormProp) {
  const result = data;
  const router = useRouter();
  // console.log(result);
  return (
    <S.Container>
      {result &&
        result.map((v: AnimalProps) => (
          <S.Content key={v.id}>
            <S.ContentImage
              src={
                'https://th.bing.com/th/id/OIP.3JOcDiDKA3mUV9t_C0fkmQHaGv?pid=ImgDet&rs=1'
              }
              alt={v.name}
            />
            <S.ContentBody>
              <p>
                Nome: <span> {v.name}</span>
              </p>
              <p>Idade: {yearDog(v.dt_born)}</p>
              <p>Animal: {v.type_animal}</p>
              <p>
                {v.qrCode == null ? (
                  <Button
                    size="small"
                    onClick={() =>
                      router.push(`/cadastro/formQrcode?id=${v.id}`)
                    }
                  >
                    Vincular QrCode
                  </Button>
                ) : (
                  <>
                    <Button size="small">Editar Perfil</Button>
                    {v.qrCode.view != null && (
                      <Button
                        style={{ marginLeft: '10px' }}
                        size="small"
                        onClick={() => router.push(`/view/${v.qrCode.hash}`)}
                      >
                        Visualizar
                      </Button>
                    )}
                  </>
                )}
              </p>
            </S.ContentBody>
          </S.Content>
        ))}
    </S.Container>
  );
}
