/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styled from "styled-components";

const Navbar = ({ themeSetter }) => {
  const [themeChild, setThemeChild] = useState(false);

  let lightToggleSound = new Audio("src/Assets/Sounds/switch.mp3");
  let muteSwitchSound = new Audio("src/Assets/Sounds/mute.wav");

  useEffect(() => {
    themeSetter(themeChild);
  }, [themeSetter, themeChild]);

  const [muted, setMuted] = useState(false);
  const [lightOn, setLightOn] = useState(true);

  const handleLightClick = () => {
    setThemeChild(!themeChild);
    setLightOn(!lightOn);
    if (muted === false) {
      if (lightToggleSound.paused === true) {
        lightToggleSound.play();
      } else {
        lightToggleSound.pause();
        lightToggleSound.currentTime = 0;
        lightToggleSound.play();
      }
    }
  };

  const handleSoundClick = () => {
    setMuted(!muted);
    if (muteSwitchSound.paused === true) {
      muteSwitchSound.play();
    } else {
      muteSwitchSound.pause();
      muteSwitchSound.currentTime = 0;
      muteSwitchSound.play();
    }
  };

  return (
    <Container>
      <LeftOfNav>Christopher Hall</LeftOfNav>
      <NavLinks>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>Tools</li>
        <li>Portfolio</li>
        <li>Experience</li>
        <li>Contact</li>
        <span id="light" onClick={handleLightClick}>
          <img
            src={
              lightOn ? "src/Assets/Imgs/dark.png" : "src/Assets/Imgs/light.png"
            }
            alt="dark mode"
            height="20vh"
          />
        </span>
        <span id="sound" onClick={handleSoundClick}>
          <img
            src={
              muted ? "src/Assets/Imgs/muted.png" : "src/Assets/Imgs/sound.png"
            }
            alt="sound on"
            height="20vh"
          />
        </span>
      </NavLinks>
    </Container>
  );
};

const Container = styled.nav`
  z-index: 10;
  position: sticky;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavLinks = styled.nav`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  margin-top: 1rem;
`;

const LeftOfNav = styled.div``;
export default Navbar;
