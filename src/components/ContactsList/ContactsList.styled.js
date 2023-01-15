import styled from 'styled-components';

export const List = styled.ul`
  padding: 5px;
  margin-right: 20px;
`;

export const Item = styled.li`
  padding: 8px;
  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Name = styled.p`
  margin-bottom: 3px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

export const Phone = styled.p`
  margin-bottom: 7px;
`;

export const Button = styled.button`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  color: #41403e;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  padding: 0.5rem;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
`;
