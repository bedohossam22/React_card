import React from 'react';
import css from "./project-two.css";
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Content(props){
    return (
        <div className='sides'>
            <div className='left-side'>
            <img src={props.item.image} />
            </div>
            <div className='right-side'>
            <p> <FontAwesomeIcon className='icon2' icon={faMapMarkerAlt} /> {props.item.Country}<a>View On google maps</a> </p> 
            <h2>{props.item.Place}</h2>
            <span>12 Jan,2021-24 Jan,2021</span>
            <span className='work'>{props.item.Description}</span>
        
            </div>
           
        </div>
    )
}
