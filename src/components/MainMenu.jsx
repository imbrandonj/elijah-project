// imported components:
import PathMenu from './PathMenu';
import About from './About';

// imported hooks:
import { useState } from 'react';

/*
  MainMenu

*/
export default function MainMenu() {
  const [adequateWidth, setAdequateWidth] = useState(window.innerWidth >= 1100);
  const [menuSelect, setMenuSelect] = useState('main');

  const checkViewportWidth = () => {
    setAdequateWidth(window.innerWidth >= 1100);
  };

  window.addEventListener('resize', checkViewportWidth);

  const start = () => {
    setMenuSelect('start');
  };

  const about = () => {
    setMenuSelect('about');
  };

  if (adequateWidth) {
    if (menuSelect === 'main') {
      return (
        <div id="mainMenu">
          <div className="cardWrapper">
            <h1>The Elijah Project</h1>
            <button onClick={start}>Start</button>
            <button onClick={about}>About</button>
            <button>Profile</button>
          </div>
        </div>
      );
    } else if (menuSelect === 'start') {
      return <PathMenu />;
    } else if (menuSelect === 'about') {
      return <About />;
    }
  } else {
    return (
      <div id="narrowScreen">
        <div className="cardWrapper">
          <h1>This website is only available in widescreen format.</h1>
          <ul>
            <li>Maximize the browser if you haven't.</li>
            <li>Visit the site on your desktop or laptop.</li>
            <li>
              Features of this web application are not intended for mobile
              devices.
            </li>
            <li>
              If you have the console running:
              <ul>
                <li>The viewport width minimum is 1100.</li>
                <li>
                  You can set the MainMenu component's hook 1 state to `true`.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
