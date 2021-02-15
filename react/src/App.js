import React from 'react'
import ReactDom from 'react-dom'
import './App.css'
import './index.css'
import Login from './components/login/login';
import Register from './components/register/register'
import Main from './components/main/main';
import Error from './components/error/error';
import {useState} from 'react';
import { Form } from 'semantic-ui-react';
import {BrowserRouter ,Route,Switch} from 'react-router-dom';
import HomePage from './components/homepage/homepage';
import Header from './components/header/header';
import Slider from './components/slider/slider';
import About from './components/about/about';

function App() {

  const [dishes, setDishes] = useState(['בקר', 'עוף', 'פרגית', 'שניצל', 'כבד']);
  return (

     
    <div 
     >

{/* <h1 className="div1">logo</h1>
<h2 className="div2">sign in</h2>
 <h1 className="div3">sign up</h1> */}
{/* <Register/> */}
{/* <Main dishes={dishes}/> */}
{/* <Login/> */}
{/* <Login/> */}
<Header></Header>

<Switch>
<Route path="/login" component={Login}/>
<Route path="/sign" component={Register}/>
<Route path="/about" component={About}/>
<Route path="/homepage" component={HomePage}/>
<Route path="/main" component={Main}/>
{/* <Route path="/" component={MySidebar}/> */}
<Route component={HomePage}/>

</Switch>
</div>
  );
}


export default App;
