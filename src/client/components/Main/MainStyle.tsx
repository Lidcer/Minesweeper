import styled from 'styled-components';

export const MainStyled = styled.div`
  position: absolute;
  margin: auto;
  width: 50vh;
  height: 50vh;
  border: 1vh inset green;
  padding: 10px;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translateX(-25vh) translateY(-25vh);
`;

export const MainTitle = styled.h1`
  margin: auto;
  display: block;
  color: #2b5329;
  font-weight: 1000;
  padding-bottom: 20px;
`;

export const MinNumber = styled.h2`
  position: fixed;
  padding-left: 70px;
  width: 220px;
  animation: moveText 5s infinite;
  color: rgba(12, 12, 12, 0.8);

  @keyframes moveText {
    from {
      left: 10px;
    }
    to {
      left: 120px;
    }
  }
`;

export const MinBreak = styled.span`
  position: relative;
  padding-bottom: 12px;
  display: block;
  font-size: 24%;
`;

export const MinButton = styled.button`
  margin: auto;
  display: block;
  color: white;
  width: 150px;
  height: 50px;
  background-color: red;
  border-radius: 10px;
  border: 1px solid white;
  transform: background-color 5s;
  font-size: 25px;
  margin-bottom: 25px;

  background: linear-gradient(143deg, #00e6ab, #9ccc9c, #649568, #0e6b0e);
  background-size: 800% 800%;
  -webkit-animation: AnimationName 5s ease infinite;
  -moz-animation: AnimationName 5s ease infinite;
  animation: AnimationName 5s ease infinite;

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
