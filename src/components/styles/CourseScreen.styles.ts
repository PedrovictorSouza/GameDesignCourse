import styled, { keyframes } from "styled-components";

// Animações
export const slideInMain = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInSidebar = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Estilos
 export const CourseContainer = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
`;

// Sidebar fixo
export const Sidebar = styled.div`
  width: 20vw;
  height: 100vh;
  
  background-color:  rgb(39, 62, 90);
  padding-left: 20px;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  animation: ${slideInSidebar} 1s ease-out;
  animation-delay: 0.3s;
  animation-fill-mode: backwards;

   h2 {
    color: #FFD700;  // Altere a cor aqui (Exemplo: dourado)
    font-weight: bold; // Opcional: deixa o título mais destacado
  }
`;

export const ModuleList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding-top: 10px;
`;

export const ModuleItem = styled.div<{ $isActive: boolean; delay?: number }>`
padding: 10px;
margin-bottom: 10px;
color: white;
background-color: ${({ $isActive }) => ($isActive ? "Black" : "rgba(255, 255, 255, 0)")};
padding-left: 20px;
cursor: pointer;
transition: background 0.3s, transform 0.3s;
font-weight: bold;

opacity: 0;  // Mantém invisível até a animação começar
animation: ${fadeIn} 0.5s ease-out forwards;
animation-delay: ${({ delay = 0 }) => `${delay}ms`}; // Define o atraso para cada item

&:hover {
  background-color: rgb(17, 17, 16);
  transform: scale(1.05);
}
`;


// Seção do topo branco
export const TopSection = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 0;
  background-image: url('/assets/Customization-bg.png'); // Substitua pelo caminho da sua imagem
  background-size: cover;       // Ajusta a imagem para cobrir toda a área
  background-position: center;  // Centraliza a imagem
  background-repeat: no-repeat; // Evita repetição
`;


export const MainContent = styled.div`
  padding: 30px;
  background-color: rgb(39, 62, 90);

  h3 {
    margin-left: 0px;
  }
  
  h2 {
    margin-left: 0px;
  }
`;

// Container principal movido para a direita para não ficar sob o sidebar
export const ContentWrapper = styled.div`
  flex: 1;
  margin-left: 20vw;
  min-height: 100vh;
  overflow-y: visible;
`;



// Mantendo suas margens e ajustes
export const ModuleTitle = styled.h2`
  font-size: 56px;
  margin-bottom: 20px;
  margin-left: 100px;
  padding-bottom: 5px;
  white-space: pre-line;
  line-height: 1.2;
  font-weight: 500;
`;

export const ModuleDescription = styled.p`
  margin-bottom: 30px;
  font-size: 18px;
  margin-left: 200px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-style: italic;
  line-height: 1.6;
  white-space: pre-line;
`;

export const FullWidthImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 30px;
  object-fit: cover;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const LessonContainer = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  color: white;
`;

export const LessonTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
  color: white;
`;

export const SideBySideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 30px;
`;

export const ContentColumn = styled.div`
  flex: 1;
  padding: 20px;
`;

export const LessonContent = styled.div`
  color: #fff;
  line-height: 1.2;
  font-size: 16px;
  margin-top: 0px;

  

  ul {
    margin-top: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    
     & > li:last-of-type {
      font-weight: bold;
      font-style: italic;
      border: 1px solid white;
      padding: 5px;
    }  
  }

  li {
    list-style-type: none;
  }

  h3 {
  margin-bottom: 0px;
  }
`;

export const StartLessonButton = styled.button`
  padding: 10px 30px;
  margin-top: 30px;
  background-color: rgb(112, 241, 47);
  border: none;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background-color: #d14b26;
    transform: scale(1.05);
  }
`;