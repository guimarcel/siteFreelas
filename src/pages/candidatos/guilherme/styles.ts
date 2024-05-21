import styled from "styled-components";

import backgroundImage from '../../../../public/bg.jpeg';

export const Background = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  margin-top:40px;
  width:50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #3f3f3f;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  color: #3f3f3f;
  margin-bottom: 0px;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #3f3f3f;
  text-align: center;
  margin-bottom:0px;
`;

export const ContainerImage = styled.div`
  max-height: 330px;
  overflow: hidden;
`;
