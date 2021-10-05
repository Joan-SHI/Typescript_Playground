import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import { GiDolphin } from 'react-icons/gi';

const ToastsShowcase: React.FC = () => {
  const [show, toggleShow] = useState(true);
  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}><GiDolphin /></Button>} {''}
      <Toast show={show} onClose={() => toggleShow(false)} bg={'warning'}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto"><GiDolphin /><GiDolphin /><GiDolphin /><GiDolphin /><GiDolphin /><GiDolphin /><GiDolphin /><GiDolphin /><GiDolphin /><GiDolphin /><GiDolphin /><GiDolphin /><GiDolphin /><GiDolphin />
          <GiDolphin /><GiDolphin /><GiDolphin /><GiDolphin /><GiDolphin /><GiDolphin /></strong>
        </Toast.Header>
        <Toast.Body> <strong>   Resilience + Intelligent + Curious + Creative + Well travelled + Open minded + Proactive + Sporty</strong> </Toast.Body>
      </Toast>

      {/*
    // @ts-ignore */}
      
    </>
  );
};

export default ToastsShowcase;