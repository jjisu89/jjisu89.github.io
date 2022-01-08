import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
// import About from './routes/About';
import Open from './routes/Open';
// import Home from './routes/Home';
import Navigation from './components/Navigation';
// import Detail from './routes/Detail';
import Foryou from './routes/Foryou';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Foryou} />
      <Route path="/open" component={Open} />

      {/* <Route path="/" exact={true} component={Home} />
      <Route path="/open" component={Open} />
      <Route path="/foryou" component={Foryou} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} /> */}
    </HashRouter>
  );
}

export default App;