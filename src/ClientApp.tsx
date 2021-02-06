import React from 'react';
import WelcomeArea from './components/welcome-area/WelcomeArea';
import ReadingArea from './components/reading-area/ReadingArea';
import "./assests/theme/main.scss";


const ClientApp:React.FC = () => {
  return (
      <React.Fragment>
        <WelcomeArea/>
        <ReadingArea/>
      </React.Fragment>
  )
};

export default ClientApp;
