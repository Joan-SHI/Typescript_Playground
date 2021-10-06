import logo from './mirror.jpg';
import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import ButtonsShowcase from './showcases/Buttons';
import ToastsShowcase from './showcases/Toasts';
import ReachOut from './showcases/Reachout';

const App: React.FC = () => {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container className="p-3">
      <p>&nbsp;</p>
      <h2 className="font-link">Joan's skills</h2>
      <ButtonsShowcase />
      <p>&nbsp;</p>
      <h2 className="font-link">Joan's strenths</h2>
      <ToastsShowcase />
      <p>&nbsp;</p>
      <h2 className="font-link">Contact Info</h2>
      <ReachOut />
    </Container>
      </header>
  );
};

export default App;
