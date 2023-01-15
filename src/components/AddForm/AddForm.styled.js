import styled from 'styled-components';

export const Heading = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  margin-top: 5px;
  padding: 3px;
  padding-left: 5px;

  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
`;
