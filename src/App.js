import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import ThankYou from './ThankYou/ThankYou';
import Error from './Error/Error';

function App() {
  return (
      <Layout>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/thankyou' component={ThankYou} />
        <Route path='/error' component={Error} />
      </Layout>
  );
}

export default App;
