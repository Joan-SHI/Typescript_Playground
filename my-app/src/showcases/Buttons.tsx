import React from 'react';
import Button from 'react-bootstrap/Button';

const ButtonsShowcase: React.FC = () => (
  <div className="font-link">
    <Button variant="info" className="mr-1" href="https://en.wikipedia.org/wiki/Drupal" target="_blank">
      Drupal
    </Button> {''}
    <Button variant="secondary" className="mr-1" href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank">
      React
    </Button> {''}
    <Button variant="success" className="mr-1" href="https://en.wikipedia.org/wiki/TypeScript" target="_blank">
      TypeScript
    </Button> {''}
    <Button variant="warning" className="mr-1" href="https://en.wikipedia.org/wiki/Microsoft_Azure" target="_blank">
      Azure
    </Button> {''}
    <Button variant="danger" className="mr-1" href="https://en.wikipedia.org/wiki/Node.js" target="_blank">
      Node.js
    </Button> {''}
    <Button variant="info" className="mr-1" href="https://en.wikipedia.org/wiki/HTML" target="_blank">
      SASS/CSS/HTML
    </Button> {''}
    <Button variant="danger" className="mr-1" href="https://en.wikipedia.org/wiki/Augmented_reality" target="_blank">
      AR
    </Button> {''}
    <Button variant="info" className="mr-1" href="https://en.wikipedia.org/wiki/Virtual_reality" target="_blank">
      VR
    </Button> {''}
    <Button variant="success" className="mr-1" href="https://en.wikipedia.org/wiki/Computer_humour" target="_blank">
      Computer humour
    </Button> 
  </div>
);

export default ButtonsShowcase;
