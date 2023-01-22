import { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type ComboBoxProps = {
  onInputChange?: (value: string) => void;
  label?: string;
  initialValue?: string;
  children: React.ReactNode;
} & InputHTMLAttributes<HTMLSelectElement>;

const ComboBox = ({
  label,
  name,
  children,
  onInputChange,
  ...props
}: ComboBoxProps) => {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.currentTarget.value;

    !!onInputChange && onInputChange(newValue);
  };

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.SelectWrapper>
        <S.Select onChange={onChange} name={name} {...props}>
          {children}
        </S.Select>
      </S.SelectWrapper>
    </S.Wrapper>
  );
};

export default ComboBox;
