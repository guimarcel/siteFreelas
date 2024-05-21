import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  margin: 20px;
  padding: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageWrapper = styled.div`
  width: 420px;
  height: 400px;
  background-size: cover;
  background-position: top;
  border-radius: 8px;
`;

const NameWrapper = styled.h3`
  font-size: 18px;
  color: #333;
  margin-top: 10px;
`;

const CandidateCard = ({ candidate }) => (
  <CardWrapper onClick={() => (window.location.href = candidate.url)}>
    <ImageWrapper
      style={{ backgroundImage: `url(${candidate.image})` }}
    ></ImageWrapper>
    <NameWrapper>{candidate.name}</NameWrapper>
  </CardWrapper>
);

export default CandidateCard;
