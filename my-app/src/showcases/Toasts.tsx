import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import { FaIceCream } from 'react-icons/fa';

const ToastsShowcase: React.FC = () => {
  const [show, toggleShow] = useState(true);
  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}><FaIceCream /></Button>} {''}
      <Toast show={show} onClose={() => toggleShow(false)} bg={'warning'}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto"><FaIceCream /><FaIceCream /><FaIceCream /><FaIceCream /><FaIceCream /><FaIceCream /><FaIceCream /><FaIceCream /><FaIceCream /><FaIceCream /><FaIceCream /><FaIceCream /><FaIceCream /><FaIceCream />
          <FaIceCream /><FaIceCream /><FaIceCream /><FaIceCream /><FaIceCream /></strong>
        </Toast.Header>
        <Toast.Body className="font-link" > <p className="font-size">   Resilience + Intelligent + Curious + Creative + Well travelled + Open minded + Proactive + Sporty</p> </Toast.Body>
      </Toast>

      {/*
    // @ts-ignore */}
      
    </>
  );
};

export default ToastsShowcase;