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

	background: linear-gradient(red, blue);
	background-size: 600% 600%;

	-webkit-animation: AnimationName 0.001 ease infinite;
	-moz-animation: AnimationName 0.001 ease infinite;
	animation: AnimationName 0.001 ease infinite;

	@-webkit-keyframes AnimationName {
	0%{background-position:0% 50%}
	50%{background-position:100% 50%}
	100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
	0%{background-position:0% 50%}
	50%{background-position:100% 50%}
	100%{background-position:0% 50%}
}
@keyframes AnimationName {
	0%{background-position:0% 50%}
	50%{background-position:100% 50%}
	100%{

`;