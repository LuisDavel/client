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
  disabled?: boolean;
};

const ContentBody = ({
  endereco,
  telefone,
  temperamento,
  tamanho,
  descricao,
  latitude,
  longitude,
  disabled
}: BodyProfileProps) => (
  <S.Wrapper>
    <TextField
      label="Onde me devolver ?"
      icon={<LocationDot />}
      type={'text'}
      name={'endereco'}
      disabled={disabled}
      value={endereco}
    />

    <TextField
      label="Telefone"
      icon={<PhoneVolume />}
      type={'text'}
      name={'telefone'}
      disabled={disabled}
      value={telefone}
    />

    <TextField
      label="Temperamento"
      type={'text'}
      name={'temperamento'}
      disabled={disabled}
      value={temperamento}
    />

    <TextField
      label="Tamanho"
      type={'text'}
      name={'tamanho'}
      disabled={disabled}
      value={tamanho}
    />
    <label htmlFor="">Desrição:</label>
    <S.TextArea disabled={disabled} value={descricao}></S.TextArea>

    <label htmlFor="">Locais proximo que aceitam animais</label>
    <S.MapContent>
      <Map latitude={latitude} longitude={longitude} />
    </S.MapContent>
    <div>
      <select defaultValue={'1'} name="filiais">
        <option value="1"> Exemplo City</option>
        <option value="2"> Exemplo City</option>
        <option value="3"> Exemplo City</option>
        <option value="4"> Exemplo City</option>
      </select>
    </div>
  </S.Wrapper>
);

export default ContentBody;
