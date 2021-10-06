import React from 'react';
import Button from 'react-bootstrap/Button';

const ButtonsShowcase: React.FC = () => (
  <div className="font-link">
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
    </Button> 
  </div>
);

export default ButtonsShowcase;
