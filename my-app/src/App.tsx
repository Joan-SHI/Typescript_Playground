import logo from './mirror.jpg';
import './App.css';

// function App() {
//   return (
    // <div className="App">
    //   <header className="App-header">
        
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       施琼娜的简历
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://www.linkedin.com/in/joan-shi-87a152179/"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn about Joan
    //     </a>
    //   </header>
    // </div>
//   );
// }

// export default App;


import React from 'react';

// import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import ButtonsShowcase from './showcases/Buttons';
import ToastsShowcase from './showcases/Toasts';

const App: React.FC = () => {
  return (
    
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          施琼娜的简历
        </p> */}
        {/* <a
          className="App-link"
          href="https://www.linkedin.com/in/joan-shi-87a152179/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about Joan
        </a> */}
        <Container className="p-3">
      {/* <Jumbotron>
        <h1 className="header">
          Welcome To React-Bootstrap TypeScript Example
        </h1>
      </Jumbotron> */}
      <p>&nbsp;</p>
      <h2>Joan's skills</h2>
      <ButtonsShowcase />
      <p>&nbsp;</p>
      <h2>Joan's strenths</h2>
      <ToastsShowcase />
    </Container>
      </header>
    
    
  );
};

export default App;
