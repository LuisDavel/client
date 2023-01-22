import { ReactNode } from 'react';
import * as S from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from 'components/Button';
import { signIn, useSession } from 'next-auth/react';

type TempFormProp = {
  children: ReactNode;
};

const link = [
  {
    href: '/profile/menu',
    name: 'Menu'
  },
  {
    href: '/profile/animal',
    name: 'Perfil do animal'
  },
  {
    href: '/profile/user',
    name: 'Perfil'
  }
];

console.log(link.map((v) => v));

export default function TProfile({ children }: TempFormProp) {
  const session = useSession();
  const router = useRouter();
  console.log(router.asPath);
  return (
    <>
      {session?.status == 'unauthenticated' ? (
        <Button onClick={() => signIn('google')}> Google</Button>
      ) : (
        <S.Container>
          <S.ContetHead>
            <nav>
              {link.map((v, index) => (
                <>
                  {router.asPath == v.href ? (
                    <Link
                      style={{
                        border: 'none',
                        borderBottom: '2px solid white'
                      }}
                      key={index}
                      href={v.href}
                    >
                      {v.name}
                    </Link>
                  ) : (
                    <Link key={index} href={v.href}>
                      {v.name}
                    </Link>
                  )}
                </>
              ))}
            </nav>
            <S.ContentImg
              src={
                'https://th.bing.com/th?id=OP.ReF3ql7gkcUtAw474C474&o=5&pid=21.1'
              }
            />
            <Button onClick={() => router.push('/cadastro/formAnimals')}>
              Cadastrar novo animal
            </Button>
          </S.ContetHead>

          {children}
        </S.Container>
      )}
    </>
  );
}
