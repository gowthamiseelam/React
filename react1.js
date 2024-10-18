import React from 'react';
import pic1 from './pic1.jpg'; 
import Funcmp from './react2';
import './index.css';
class Classcmp extends React.Component{
    render(){
        return(
            <>
                <center>

                <img class="Women" src={pic1} alt="Women"/>
                <br/><br/>
                <h1>Dust Storm by Steve McCurry</h1>
                <h2>Dust storm in Jaisalmer by Steve McCurry.
                     Ladies gathered in a group to stay together during tough times of the dust storm, 
                     all in vibrant red traditional Rajasthani costumes. 
                     Balanced in middle of a vertical frame with trees dancing in background to the song of storm.
                      The Energy of nature is felt flowing in this photograph.
                       This is lively, the count of 6 trees balancing the heads of visible 6 ladies and the pattern at which they 
                       all fall in place inside the picture is phenomenal. The Least said the pots in the foreground close to the viewer’s 
                       eye are the x-factor in this picture. It creates the space, the dimension in 3D, a perfect balancing composition to a 
                       masterpiece photograph.</h2>
                </center>
                <br/><br/>
                <Funcmp cmp="Dorothea Lange"/>
            </>
        );
    }
}
export default Classcmp;
