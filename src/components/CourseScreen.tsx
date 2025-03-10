import React, { useState, useEffect } from "react";
import useCourseModules from "../hooks/useCourseModules";

import { 
  CourseContainer, 
  Sidebar, 
  ModuleList, 
  ModuleItem, 
  TopSection, 
  MainContent, 
  ContentWrapper, 
  ModuleTitle, 
  ModuleDescription, 
  FullWidthImage, 
  LessonContainer, 
  LessonTitle, 
  SideBySideContainer, 
  ContentColumn, 
  LessonContent, 
  //StartLessonButton 
} from "./styles/CourseScreen.styles";




// Componente principal
const CourseScreen: React.FC = () => {
  const { modules, activeModule, handleModuleChange } = useCourseModules();

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsSidebarVisible(true), 1300);
    return () => clearTimeout(timer);
  }, []);


  return (
    <CourseContainer>
      <Sidebar>
        <h2>Módulos</h2>
        <ModuleList>
          {modules.map((module, index) => (
            <ModuleItem
              key={index}
              $isActive={module.id === activeModule.id}
              delay={index * 150}
              onClick={() =>handleModuleChange(module.id)}
            >
              {module.title}
            </ModuleItem>
          ))}
        </ModuleList>
      </Sidebar>

      <ContentWrapper>
        {isSidebarVisible && (<>
        <TopSection>
          <ModuleTitle>{activeModule.title}</ModuleTitle>
          <ModuleDescription>{activeModule.description}</ModuleDescription>
        </TopSection>

        <MainContent>
          <FullWidthImage src={activeModule.imageUrl} alt="Imagem do Módulo" />

          {activeModule.lessons.map((lesson, index) => {
            const splitContent = lesson.content.split("\n\n");

            return (
              <LessonContainer key={index}>
                <LessonTitle>{lesson.title}</LessonTitle>
                
                {splitContent.length >= 2 ? (
                  <SideBySideContainer>
                    <ContentColumn>
                      <LessonContent>
                        <h2
                          dangerouslySetInnerHTML={{
                            __html: splitContent[0].replace(/\n/g, "<br>"),
                          }}
                        />
                      </LessonContent>
                    </ContentColumn>
                    <ContentColumn>
                      <LessonContent>
                        <h3
                          dangerouslySetInnerHTML={{
                            __html: splitContent[1].replace(/\n/g, "<br>"),
                          }}
                        />
                      </LessonContent>
                    </ContentColumn>
                  </SideBySideContainer>

                ) : (
                  <ContentColumn>
                    <LessonContent
                      dangerouslySetInnerHTML={{
                        __html: lesson.content.replace(/\n/g, "<br>"),
                      }}
                    />
                  </ContentColumn>
                )}
              </LessonContainer>
            );
          })}

          {/* <StartLessonButton>Start Module</StartLessonButton> */}
        </MainContent>
        </>)}
      </ContentWrapper>
    </CourseContainer>
  );
};

export default CourseScreen;
