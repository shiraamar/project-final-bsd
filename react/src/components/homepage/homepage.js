import React from 'react'
import { Link } from 'react-router-dom'
import  Header  from '../header/header.js'
import Home from '../../assets/shutterstock_73307464.jpg'

const HomePage = () => 
 // שם
{

    // משתנים ופונקציות

    return (
        <div>
            
            <img src={Home} style={{ width: "100vw", height: "150vh" }}></img>‏

        {/* <Link to='/login' className="login" >התחבר</Link>
        <Link to='/sign' className="sign in">הרשם</Link> */}
        
              

        {/* <button class="ui button">sign in</button> */}
        </div>
    )
}


export default HomePage;
