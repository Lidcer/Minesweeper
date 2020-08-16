import styled from 'styled-components';

export const MainStyled = styled.div`
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
`;

export const MainTitle = styled.h1`
  margin:auto;
  display:block;
  color:blue;
`;

export const MinButton = styled.button`
  margin:auto;
  display:block;
  color:white;
  width: 60px;
  background-color:red;
  border-radius:5px;
  border: 1px solid white;
  transform: color 5s;
  
  &:focus{
    background-color:purple;
  }
`;
