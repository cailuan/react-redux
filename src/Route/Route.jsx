import { BrowserRouter , Route, Switch ,HashRouter} from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from '../Container/Layout/Header.jsx'
import Footer from '../Container/Layout/Footer.jsx'
import  './index.less'

// const MyContext = React.createContext('color');
import {ThemeContext} from '../Container/Provider'

// const Home = lazy(() => import('../Container/HomeBox/Home.jsx'));
import Home from '../Container/HomeBox/Home.jsx';
import About from '../Container/AboutBox/About.jsx';
import Component404 from '../Container/404'
// const About = lazy(() => import('../Container/AboutBox/About.jsx'));

const App = (props) => {
  // console.log(props)
return (


  <BrowserRouter  > 
  <Header/>
    {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route component={Component404}/>
      </Switch>
    {/* </Suspense> */}
    
    <Footer/>
   </BrowserRouter>

  )

};

// const Home = ()=>(<div>ij</div>)

export default App;