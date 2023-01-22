import { ReactNode } from 'react';
import * as S from './styles';

type TempFormProp = {
  children: ReactNode;
};

export default function TempForm({ children }: TempFormProp) {
  return <S.Container>{children}</S.Container>;
}
