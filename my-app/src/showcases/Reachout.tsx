import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const ReachOut: React.FC = () => (
  <div className="p-1">
    <a href="https://github.com/Joan-SHI" target="_blank" className="mr-1">
    <FaGithub />
    </a>
    {''} {''} 
    <a href="https://www.linkedin.com/in/joan-shi-87a152179/" target="_blank" className="mr-1">
    <FaLinkedin />
    </a>
    {''} {''} 
    <a href="mailto: qiongnashi@gmail.com" className="mr-1">
    <HiOutlineMail />
    </a>
  </div>
);

export default ReachOut;
