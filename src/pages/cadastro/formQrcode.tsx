import Button from 'components/Button';
import TextField from 'components/TextField';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import TempForm from 'template/Tform';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { api } from '../../lib/axios';
import { setCookie } from 'cookies-next';
import { AxiosError } from 'axios';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

export default function FormQrCode() {
  const router = useRouter();
  const [values, setValues] = useState({
    hash: String
  });
  const {
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };
  const session = useSession();
  console.log(session.data?.user?.email);
  async function handleRegister() {
    try {
      await api.post('/qrcode', {
        hash: values.hash
      });

      await router.push('/cadastro/formProfile');
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
      <form method="POST" onSubmit={handleSubmit(handleRegister)}>
        <TextField
          label="Digite uma Hash"
          type={'text'}
          name="hash"
          onInputChange={(v) => handleInput('hash', v)}
        />

        <Button type="submit"> Cadastrar</Button>
        {/* <Button onClick={() => signOut()}> Logout</Button> */}
        <Link href={'../profile/menu'}>Não sei a minha hash</Link>
      </form>
    </TempForm>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const router = context.query.id;

  if (router != undefined) {
    setCookie('@localize:idAnimal', String(router), context);
  }

  return {
    props: {}
  };
};
