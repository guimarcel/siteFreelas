import React from "react";
import CandidateCard from "./CandidateCard";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-image: linear-gradient(to right, #e91c5d 40%, transparent 70%),
    linear-gradient(to left, black 20%, transparent 100%);
  animation: transitionBackground 5s ease infinite;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const HeaderWrapper = styled.header`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  width: 100%; // Ajuste para ocupar toda a largura disponível
`;

const Title = styled.h1`
  margin: 0;
  color: #e91c5d;
  font-size: 24px;
`;

const Description = styled.p`
  margin: 10px 0;
  font-size: 16px;
`;

const Home = () => {
  const candidates = [
    {
      name: "Margareth Moscardini de Oliveira",
      image: "/margareth.png",
      url: "/candidatos/margareth",
    },
    {
      name: "Rodrigo Rodrigues dos Santos Guilherme",
      image: "/rodrigo.png",
      url: "/candidatos/rodrigo",
    },
    {
      name: "Ezio Moreira Tristão Junior",
      image: "/ezio.png",
      url: "/candidatos/ezio",
    },
    {
      name: "Guilherme Marcel de Almeida",
      image: "/background.png",
      url: "/candidatos/guilherme",
    },
    // Adicione mais candidatos conforme necessário
  ];

  return (
    <>
      <HeaderWrapper>
        <Title>Bem-vindo ao Site de Freelas!</Title>
        <Description>
          Aqui você pode encontrar diversos profissionais de freelancer. Escolha
          o seu e confira a biografia clicando no card.
        </Description>
      </HeaderWrapper>
      <Container>
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.name} candidate={candidate} />
        ))}
      </Container>
    </>
  );
};

export default Home;
