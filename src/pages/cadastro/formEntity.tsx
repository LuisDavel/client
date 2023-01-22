import Button from 'components/Button';
import TextField from 'components/TextField';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import TempForm from 'template/Tform';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { api } from '../../lib/axios';
import { AxiosError } from 'axios';
import ComboBox from 'components/ComboBox';

export default function FormEntity() {
  const router = useRouter();
  const [values, setValues] = useState({
    email: String,
    name: String,
    cpf: String,
    image: String,
    dt_born: String,
    number: String,
    gender: 'M'
  });
  const { handleSubmit } = useForm();

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const session = useSession();
  async function handleRegister() {
    try {
      await api.post('/users', {
        email: session.data?.user?.email,
        name: values.name,
        cpf: values.cpf,
        image: values.image,
        dt_born: values.dt_born,
        number: values.number,
        gender: values.gender
      });

      await router.push('/cadastro/formAnimals');
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        alert(error.response.data.message);
        return;
      }

      console.log(error);
    }
  }

  console.log(values);
  return (
    <TempForm>
      {session?.status == 'unauthenticated' ? (
        <Button onClick={() => signIn('google')}> Google</Button>
      ) : (
        <div>
          <form method="POST" onSubmit={handleSubmit(handleRegister)}>
            <TextField
              label="Imagem"
              type={'file'}
              name="image"
              accept="image/*"
              onInputChange={(v) => handleInput('image', v)}
              required
            />
            <TextField
              label="Nome Completo"
              type={'text'}
              name="name"
              onInputChange={(v) => handleInput('name', v)}
              required
            />
            <TextField
              label="CPF"
              type={'text'}
              name="cpf"
              onInputChange={(v) => handleInput('cpf', v)}
              required
            />
            <TextField
              label="Data de nascimento"
              type={'date'}
              name="dt_born"
              onInputChange={(v) => handleInput('dt_born', v)}
              required
            />
            <TextField
              label="Celular"
              type={'text'}
              name="number"
              onInputChange={(v) => handleInput('number', v)}
              required
            />
            <ComboBox
              label="Genêro"
              onChange={(v) => handleInput('gender', v.target.value)}
              required
            >
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
              <option value="O">Outros</option>
            </ComboBox>
            <Button type="submit"> Cadastrar</Button>
          </form>
          <Button onClick={() => signOut()}> Logout</Button>
        </div>
      )}
    </TempForm>
  );
}
