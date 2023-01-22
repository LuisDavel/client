import Button from 'components/Button';
import TextField from 'components/TextField';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import TempForm from 'template/Tform';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { api } from '../../lib/axios';
import { AxiosError } from 'axios';
import ComboBox from 'components/ComboBox';
import { Comportamento, RaceCat, RaceDog } from 'utils/help-animal';

export default function FormAnimal() {
  const router = useRouter();
  const [values, setValues] = useState({
    email: String,
    name: String,
    type: 'Cachorro',
    image: String,
    dt_born: String,
    temperament: 'Agitado',
    race: '',
    size: 'Pequeno'
  });
  const { handleSubmit } = useForm();

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };
  const session = useSession();
  async function handleRegister() {
    try {
      await api.post('/animals', {
        name: values.name,
        type: values.type,
        image: values.image,
        dt_born: values.dt_born,
        race: values.race,
        temperament: values.temperament,
        size: values.size
      });

      await router.push('/cadastro/formQrcode');
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        alert(error.response.data.message);
        return;
      }

      console.log(error);
    }
  }
  session?.status == 'unauthenticated' && router.push('/cadastro/formEntity');

  console.log(values);
  return (
    <TempForm>
      <form onSubmit={handleSubmit(handleRegister)}>
        <TextField
          label="Imagem"
          type={'file'}
          name="image"
          accept="image/*"
          required
          onInputChange={(v) => handleInput('image', v)}
        />
        <TextField
          label="Nome do pet"
          type={'text'}
          name="name"
          required
          onInputChange={(v) => handleInput('name', v)}
        />
        <ComboBox
          label="Temperamento"
          onChange={(v) => handleInput('temperament', v.target.value)}
          required
        >
          <option disabled value="">
            Escolha
          </option>
          {Comportamento.map((v, index) => (
            <option key={index} value={v}>
              {v}
            </option>
          ))}
        </ComboBox>
        <ComboBox
          label="Tipo de animal"
          onChange={(v) => handleInput('type', v.target.value)}
          required
        >
          <option value="Cachorro">Cachorro</option>
          <option value="Gato">Gato</option>
        </ComboBox>

        <ComboBox
          label="Raça"
          onChange={(v) => handleInput('race', v.target.value)}
          required
        >
          {values.type == 'Cachorro'
            ? RaceDog.map((v, index) => (
                <option key={index} disabled={index == 0} value={v}>
                  {v}
                </option>
              ))
            : RaceCat.map((v, index) => (
                <option key={index} disabled={index == 0} value={v}>
                  {v}
                </option>
              ))}
        </ComboBox>
        <ComboBox
          label="Porte:"
          onChange={(v) => handleInput('size', v.target.value)}
          required
        >
          {values.type == 'Cachorro' ? (
            <>
              <option value="Pequeno">Pequeno</option>
              <option value="Médio">Médio</option>
              <option value="Grande">Grande</option>
              <option value="Gigante">Gigante</option>
            </>
          ) : (
            <>
              <option value="Pequeno">Pequeno</option>
              <option value="Médio">Médio</option>
              <option value="Grande">Grande</option>
            </>
          )}
        </ComboBox>

        <TextField
          label="Data de nascimento"
          type={'date'}
          required
          name="dt_born"
          onInputChange={(v) => handleInput('dt_born', v)}
        />

        <Button type="submit"> Cadastrar</Button>
      </form>
    </TempForm>
  );
}
