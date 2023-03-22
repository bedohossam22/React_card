import React from 'react';
import Header from './Header';
import Content from './Content';
import Data from "./Data"
export default function App(){
    const cards= Data.map(item => {
        return <Content 
        key = {item.Country}
        item = {item}
    
        />
        
    })
    return (
        <>
    <Header />
    <div className='container'>
       <p>{cards}</p> 
    </div>
    </>
    )
}
