import React from 'react';

import Button from 'react-bootstrap/Button';

const ButtonsShowcase: React.FC = () => (
  <div className="p-1">
    <Button variant="primary" className="mr-1">
      Drupal
    </Button> {''}
    <Button variant="secondary" className="mr-1">
      React
    </Button> {''}
    <Button variant="success" className="mr-1">
      TypeScript
    </Button> {''}
    <Button variant="warning" className="mr-1">
      Azure
    </Button> {''}
    <Button variant="danger" className="mr-1">
      Node.js
    </Button> {''}
    <Button variant="info" className="mr-1">
      SASS/CSS/HTML
    </Button> {''}
    <Button variant="light" className="mr-1">
      AR/VR
    </Button> {''}
    <Button variant="success" className="mr-1">
      Developer's Joke
    </Button> {''}
    <Button variant="link" href="https://github.com/Joan-SHI" target="_blank" className="mr-1">
      GitHub 
    </Button>
    <Button variant="link" href="https://www.linkedin.com/in/joan-shi-87a152179/" target="_blank" className="mr-1">
      LinkedIn 
    </Button>
  </div>
);

export default ButtonsShowcase;
