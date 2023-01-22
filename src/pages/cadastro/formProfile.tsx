import Button from 'components/Button';
import TextField from 'components/TextField';
import { useEffect, useState } from 'react';
import TempForm from 'template/Tform';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { api } from '../../lib/axios';
import { AxiosError } from 'axios';

export default function Form() {
  const router = useRouter();
  const [cepComplete, setCepComplete] = useState({
    localidade: '',
    logradouro: '',
    bairro: '',
    uf: ''
  });
  const [values, setValues] = useState({
    state: String,
    city: String,
    CEP: String,
    address: String,
    number: String,
    district: String,
    complement: String,
    descript: String
  });

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };
  const session = useSession();

  useEffect(() => {
    async function returnCep() {
      if (values.CEP.length == 8) {
        const result = await fetch(
          `https://viacep.com.br/ws/${values.CEP}/json/`,
          {
            cache: 'default',
            method: 'GET',
            mode: 'cors'
          }
        );
        setCepComplete(await result.json());
      }
    }

    returnCep();
  }, [values.CEP]);
  console.log(session.data?.user?.email);
  async function handleRegister() {
    try {
      await api.post('/perfilAnimal', {
        state: cepComplete.uf,
        city: cepComplete.localidade,
        cep: values.CEP,
        address: cepComplete.logradouro,
        number: values.number,
        district: cepComplete.bairro,
        complement: values.complement,
        descript: values.descript
      });

      await router.push('/profile/menu');
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
        <form onSubmit={handleRegister}>
          <TextField
            label="CEP: "
            type={'text'}
            name="cep"
            onInputChange={(v) => handleInput('CEP', v)}
          />
          <TextField
            label="Estado:"
            type={'text'}
            name="state"
            defaultValue=""
            value={String(cepComplete.uf)}
            onInputChange={(v) => handleInput('state', v)}
            readOnly
          />
          <TextField
            label="Cidade:"
            type={'text'}
            name="city"
            defaultValue=""
            value={String(cepComplete.localidade)}
            readOnly
            onInputChange={(v) => handleInput('city', v)}
          />
          <TextField
            label="Endereço: "
            type={'text'}
            name="address"
            defaultValue=""
            value={String(cepComplete.logradouro)}
            readOnly
            onInputChange={(v) => handleInput('address', v)}
          />

          <TextField
            label="Bairro: "
            type={'text'}
            name="district"
            defaultValue=""
            value={String(cepComplete.bairro)}
            readOnly
            onInputChange={(v) => handleInput('district', v)}
          />
          <TextField
            label="Numero da casa: "
            type={'text'}
            name="number"
            defaultValue=""
            onInputChange={(v) => handleInput('number', v)}
          />
          <TextField
            label="Complemento: "
            type={'text'}
            name="complement"
            defaultValue=""
            onInputChange={(v) => handleInput('complement', v)}
          />

          <textarea
            onChange={(v) => handleInput('descript', String(v))}
          ></textarea>

          <Button type="submit"> Cadastrar</Button>
        </form>
      )}
    </TempForm>
  );
}
