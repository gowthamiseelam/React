import React from 'react';
import './vote.css';
import vote from'./vote.jpg';
import party1 from './party1.jpg';
import party2 from './party2.png';
import {useState} from 'react';
import like from './like.png';
import dislike from './dislike.jpg';
function Vote(){
    const[Value1,setValue1] = useState(0);
    const[Value2,setValue2] = useState(0);



    return (
        <>
        <h1>Use your Right to your bright Future</h1>
        <img class = "image" src = {vote} alt = "vote"></img>
        <h3>“We do not have government by the majority. We have government by the majority who participate.” </h3>
        <br></br>
        <div class = "row">
            <div class = "coulmn">
                    <img class = "image" src = {party1} alt = "car"></img>
                    <h1>Vote for TRS</h1>
                    <input type = "text" value = {Value1} ></input><br></br>
                    <button onClick = {()=>setValue1(Value1+1)}><img class = "image" src = {like} alt = "like"></img></button>
                    <button onClick = {()=>setValue1(Value1-1)}><img class = "image" src = {dislike} alt = "like"></img></button>

            </div>
            <div class = "coulmn">
                    <img class = "image"  src = {party2} alt = "congress"></img>
                    <h1>Vote for BJP</h1>
                    <input type = "text" value = {Value2} ></input><br></br>
                    <button onClick = {()=>setValue2(Value2+1)}><img class = "image" src = {like} alt = "like"></img></button>
                    <button onClick = {()=>setValue2(Value2-1)}><img class = "image" src = {dislike} alt = "like"></img></button>

            </div>
            </div>

            </>

    );

}
export default Vote;
