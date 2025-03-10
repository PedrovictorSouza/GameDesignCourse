import styled, { css, keyframes } from "styled-components";

// Animação de fade-out
export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Estilos do Container principal com background responsivo
export const Container = styled.div<{ isFadingOut: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  min-height: 100vh;
  width: 100vw;
  background-image: url('public/assets/Home-bg.png');  // Ajuste o caminho conforme necessário
  background-size: cover;       // Preenche a tela sem distorcer
  background-position: center;  // Mantém o foco centralizado
  background-repeat: no-repeat; // Evita repetição da imagem
  transition: background-image 0.5s ease-in-out;  // Transição suave se mudar a imagem

  ${({ isFadingOut }) =>
    isFadingOut &&
    css`
      animation: ${fadeOut} 1.5s forwards;
    `}
`;

// Estilos do botão animado
export const AnimatedButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: rgb(12, 11, 11);
  color: white;
  border: none;
  border-radius: 0px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  align-self: flex-start;  // Mantém o botão à esquerda

  &:hover {
    background-color: transparent;
    color: rgb(249, 249, 249);
    border: 2px solid black;
  }
`;

// Estilos para textos alinhados à esquerda
export const AlignedText = styled.div`
  text-align: left;
  margin-bottom: 20px;
  color: white;
`;


