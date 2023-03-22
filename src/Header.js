import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import css from "./project-two.css";
export default function Header() {
  return (
    
    <div className='header'>
      <h1> <FontAwesomeIcon className='icon' icon={faGlobe} />My Travel Journal </h1>
    </div>
  )
}