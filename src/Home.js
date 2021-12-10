import React from 'react'
import Aboutus from './Aboutus';

const Home = (props) => {
    const {Send, location, myName}=props;
    
    console.log(Send)
    return (
        <div>
            <h1>{myName}</h1>
            
            <Aboutus location={location}/>
        </div>
    )
}

export default Home
