import { useCallback, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Greeting from "./Components/Greeting.jsx";
import Tools from "./Components/Tools.jsx";
import Projects from "./Components/Projects.jsx";
import Experience from "./Components/Experience.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  const [theme, setTheme] = useState("light");

  const wrapperSetTheme = useCallback(
    (val) => {
      let newTheme = val === true ? "light" : "dark";
      setTheme(newTheme);
    },
    [setTheme]
  );
  return (
    <>
      {/* Navbar */}
      <Navbar
        theme={theme}
        themeSetter={wrapperSetTheme}
        currentTheme={theme}
      />
      {/* Greetings Panel, My greeting */}
      <Greeting theme={theme} />
      {/* Tools/Knowledge */}
      <Tools theme={theme} />
      {/* Portfolio Projects */}
      <Projects theme={theme} />
      {/* Experience */}
      <Experience theme={theme} />
      {/* Contact */}
      <Contact theme={theme} />
    </>
  );
}

export default App;
