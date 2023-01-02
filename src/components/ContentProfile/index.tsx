import ContentBody, { BodyProfileProps } from './ContentBody';
import ContentHead, { HeadProfileProps } from './ContentHead';
import * as S from './styles';

export type ProfileProps = {
  headProps?: HeadProfileProps;
  bodyProps?: BodyProfileProps;
  latitude: number;
  longitude: number;
};

const ContentProfile = ({
  headProps,
  bodyProps,
  longitude,
  latitude
}: ProfileProps) => (
  <S.Wrapper>
    <ContentHead
      idade={headProps?.idade}
      name={headProps?.name}
      raca={headProps?.raca}
      sexo={headProps?.sexo}
      img={headProps?.img}
    />
    <ContentBody
      descricao={bodyProps?.descricao}
      endereco={bodyProps?.endereco}
      tamanho={bodyProps?.tamanho}
      telefone={bodyProps?.telefone}
      temperamento={bodyProps?.temperamento}
      longitude={longitude}
      latitude={latitude}
      disabled={true}
    />
  </S.Wrapper>
);

export default ContentProfile;
