import { ButtonStyled } from './Button.styled';

export const Button = ({ text, clickHandler }) => {
  return <ButtonStyled onClick={clickHandler}>{text}</ButtonStyled>;
};
