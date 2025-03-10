import React, { useState } from "react";
import { Container, AnimatedButton, AlignedText } from "./styles/Home.styles";
import SpriteAnimation from "./SpriteAnimation";
import TitleAnimation from "./TitleAnimation";
import SloganAnimation from "./SloganAnimation";
import CourseScreen from "./CourseScreen";

const Home: React.FC = () => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showCourse, setShowCourse] = useState(false);

  const handleStartCourse = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setShowCourse(true);
    }, 500);
  };

  return showCourse ? (
    <CourseScreen />
  ) : (
    <Container isFadingOut={isFadingOut}>
      {!isFadingOut && (
        <>
          <AlignedText>
            <TitleAnimation text="Homo ludens" delay={100} />
          </AlignedText>
          <AlignedText>
            <SpriteAnimation 
              imageUrl="/src/assets/spritesheet.png"
              frameCount={6}
              frameWidth={100}
              frameHeight={100}
              speed={200}
            />
          </AlignedText>
          <AlignedText>
            <SloganAnimation />
          </AlignedText>
          <AnimatedButton onClick={handleStartCourse}>
            acessar conteúdo
          </AnimatedButton>
        </>
      )}
    </Container>
  );
};

export default Home;
