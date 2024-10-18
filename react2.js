import React from 'react';
import pic2 from './pic2.jpg';
import './index.css';
import {useState} from 'react';

function Funcmp(props){
    const[color,setColor]=useState("red");
    const changeColor = () => {
        const newColor = color === 'red' ? 'green' : 'red'; // Toggle between colors
        setColor(newColor);
    };
    return (
        <>
        <center>
       <img class="women" src={pic2} alt="women"/>
       <h1 style={{ color: color }}>Migrant Mother by {props.cmp}</h1>
       
       <button onClick={changeColor}> Change </button>
       <h2>Migrant Mother is one of the most iconic pictures in our history by {props.cmp}, 
        taken while covering migratory farmworkers in California in 1936. 
        Strong emotions all over the frame, the gesture by the mother, her least interest towards the photographer makes it even more dramatic, 
        a sense of reality just before your eyes. The kids turning the faces away creates a wonderful perspective to the picture and brings
         more dominance into the sorrows of mother here. The Questions and the very act of survival and dependency. 
         The Baby close to her sleeping poignantly creates more uncertainty within their lives and adds much to the mood and 
         trauma of the mother.</h2>
       <br/><br/>
       </center>
       </>
    );
}
export default Funcmp;