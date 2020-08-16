import styled from 'styled-components';

export const MainStyled = styled.div`
  position: absolute;
  margin: auto;
  width: 50vh;
  height: 50vh;
  border: 3px inset green;
  padding: 10px;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translateX(-25vh) translateY(-25vh);
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
  transform: background-color 5s;
  
  &:hover{
    background-color:purple;
  }
`;
