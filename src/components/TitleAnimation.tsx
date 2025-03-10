import React from "react";
import styled from "styled-components";

// Container estilizado
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

// Animação das letras com fade-in
const Letter = styled.span<{ delay: number }>`
  opacity: 0;
  animation: fadeIn 1.5s ease-in-out forwards;
  animation-delay: ${({ delay }) => delay}ms;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Estilização do título
const StyledTitle = styled.h1`
  font-size: 5em;
  font-weight: 300;
  color: white;
  margin-bottom: 10px;
`;

// Estilização do slogan (mantendo separação)
const StyledSlogan = styled.p`
  font-size: 1em;
  color: white;
  margin-top: 10px;
`;

interface TitleAnimationProps {
  text: string;
  delay?: number;
}

const TitleAnimation: React.FC<TitleAnimationProps> = ({ text, delay = 50 }) => {
  return (
    <TitleContainer>
      {/* Animação do Título */}
      <StyledTitle>
        {text.split("").map((char, index) => (
          <Letter key={index} delay={index * delay}>
            {char}
          </Letter>
        ))}
      </StyledTitle>
    </TitleContainer>
  );
};

export default TitleAnimation;
