import * as S from './styles';
import TextField from 'components/TextField';
import { PhoneVolume, LocationDot } from '@styled-icons/fa-solid';
import Map from 'components/Map';

export type BodyProfileProps = {
  telefone?: string;
  endereco?: string;
  temperamento?: string;
  tamanho?: string;
  descricao?: string;
  latitude?: any;
  longitude?: any;
};

const ContentBody = ({
  endereco,
  telefone,
  temperamento,
  tamanho,
  descricao,
  latitude,
  longitude
}: BodyProfileProps) => (
  <S.Wrapper>
    <TextField
      label="Onde me devolver ?"
      icon={<LocationDot />}
      type={'text'}
      name={'endereco'}
      disabled
      value={endereco}
    />

    <TextField
      label="Telefone"
      icon={<PhoneVolume />}
      type={'text'}
      name={'telefone'}
      disabled
      value={telefone}
    />

    <TextField
      label="Temperamento"
      type={'text'}
      name={'temperamento'}
      disabled
      value={temperamento}
    />

    <TextField
      label="Tamanho"
      type={'text'}
      name={'tamanho'}
      disabled
      value={tamanho}
    />
    <label htmlFor="">Desrição:</label>
    <S.TextArea disabled value={descricao}></S.TextArea>

    <label htmlFor="">Mapa para loc:</label>
    <S.MapContent>
      <Map latitude={latitude} longitude={longitude} />
    </S.MapContent>
    <div>
      <select name="" id="">
        <option value="01"> Exemplo City</option>
      </select>
    </div>
  </S.Wrapper>
);

export default ContentBody;
