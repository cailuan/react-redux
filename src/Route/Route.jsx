import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from '../Container/Layout/Header.jsx'

const Home = lazy(() => import('../Container/Home.jsx'));
// import Home from '../Container/Home.jsx';
// import About from '../Container/About.jsx'
const About = lazy(() => import('../Container/About.jsx'));

const App = () => (<div>
  <Header/>
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Suspense>
  </Router>
</div>
  
);

// const Home = ()=>(<div>ij</div>)

export default App;