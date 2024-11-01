import React,{useState} from 'react';
function Incre(){
    const [value,setValue]=useState(0);
    return(
        <div class="I">
        <center>
        <h1>Increment/Decrement </h1>
        <input type= "text" value={value}/>
        <br/><br/>
        <button onClick={()=>setValue(value+1)}>Increment </button><br/><br/>
        <button onClick={()=>setValue(value-1)}>Decrement </button><br/>
        </center>
        </div>

    );
}
export default Incre;

