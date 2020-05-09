import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import About from './About/About';

function App() {
  return (
      <Layout>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
      </Layout>
  );
}

export default App;
