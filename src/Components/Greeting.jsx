import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
const Greeting = (incTheme) => {
  const [theme, setTheme] = useState(incTheme);

  useEffect(() => {
    setTheme(incTheme);
  }, [incTheme]);
  return (
    <ThemeProvider theme={theme.theme == "light" ? lightTheme : darkTheme}>
      <Container>
        <RegText>
          Hello! My name is <MyName> Christopher Hall!</MyName>
        </RegText>
        <HighLightText>
          Front-End Developer - Back-End Developer - Game-Developer
        </HighLightText>
        <RegText>
          I am passionate about coding and creating new things. I am currently
          studying to enter the world of coding and create new experiences for
          others. I am looking forward to any opportunity to increase my skills
          and create!
        </RegText>
      </Container>
    </ThemeProvider>
  );
};

const lightTheme = {
  highLightText: "#be1818",
  bgColor: "white",
  textColor: "black",
};

const darkTheme = {
  highLightText: "#89f05a",
  bgColor: "#152030",
  textColor: "white",
};
const Container = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
`;
const RegText = styled.p`
  color: ${({ theme }) => theme.textColor};
`;
const MyName = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.highLightText};
`;
const HighLightText = styled.p`
  color: ${({ theme }) => theme.highLightText};
`;

export default Greeting;
