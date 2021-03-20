import { BrowserRouter , Route, Switch ,HashRouter} from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from '../Container/Layout/Header.jsx'
import Footer from '../Container/Layout/Footer.jsx'
import Dialog from '../Component/Dialog'
import Modal from '../Component/Modal'
import  './index.less'

// const MyContext = React.createContext('color');
import {ThemeContext} from '../Container/Provider'

// const Home = lazy(() => import('../Container/HomeBox/Home.jsx'));
import Home from '../Container/HomeBox/Home.jsx';
import About from '../Container/AboutBox/About.jsx';
import Component404 from '../Container/404'
// const About = lazy(() => import('../Container/AboutBox/About.jsx'));
import untiObj from '../until'

const App = (props) => {
  // window.units = function(){
  //   alert(1)
  // }
  let [,setUpdate] = React.useState(1)
  window.addEventListener('units',()=>{
    // alert(1)
    // setUpdate(i=>i+1)
  })
  // setInterval(()=>{
    
  // },100)

return (

  <BrowserRouter  > 
  
  <Header/>

    {JSON.stringify(untiObj)}
    {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/dialog" component={Dialog}/>
        <Route exact path="/modal" component={Modal}/>
        <Route component={Component404}/>
      </Switch>
    {/* </Suspense> */}
    
    <Footer/>
   </BrowserRouter>

  )

};

// const Home = ()=>(<div>ij</div>)

export default App;