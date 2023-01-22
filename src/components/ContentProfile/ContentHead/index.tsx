import * as S from './styles';
import Button from 'components/Button';

export type HeadProfileProps = {
  name?: string;
  idade?: string;
  sexo?: string;
  raca?: string;
  img?: string;
};

const ContentHead = ({ name, idade, sexo, raca, img }: HeadProfileProps) => (
  <S.Wrapper>
    <S.ImagenProfile alt={raca} width={150} height={150} src={img} />
    <S.Profile>
      <S.TittleProfile>{name}</S.TittleProfile>
      <S.TextProfile>
        <p>{idade}</p>
        <p>{sexo}</p>
        <p>{raca}</p>
      </S.TextProfile>
      <S.ContentButton>
        <Button type={'submit'} size={'small'}>
          Pet Encontrado
        </Button>
        <Button type={'submit'} size={'small'}>
          Compartilhar
        </Button>
      </S.ContentButton>
    </S.Profile>
  </S.Wrapper>
);

export default ContentHead;
