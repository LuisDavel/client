import Head from 'next/head';
import Link from 'next/link';
import * as S from './styles';

const Main = () => (
  <>
    <S.Wrapper>
      <Head>
        <title>Localize Pet</title>
      </Head>
      <S.Content>
        <S.ImgDog src="./output-onlinegiftools.gif" />
        <S.Text>* Em desenvolvimento *</S.Text>
      </S.Content>
    </S.Wrapper>
    <S.Footer>
      Localize Pet, 2022 🧡 / <Link href={'./teste'}> Pagina Teste</Link>
    </S.Footer>
  </>
);

export default Main;
