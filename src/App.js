import React, {Suspense} from 'react';
import { Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faHome, faInfo} from '@fortawesome/free-solid-svg-icons';

import './App.css';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import About from './About/About';
import Spinner from './UI/Spinner/Spinner';
const Contact = React.lazy(() => import('./Contact/Contact'));
const ThankYou = React.lazy(() => import('./ThankYou/ThankYou'));
const Error = React.lazy(() => import('./Error/Error'));

library.add(fab, faHome, faEnvelope, faInfo)

function App() {
  return (
      <Layout>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' render={() => (<Suspense fallback={<Spinner />}><Contact /></Suspense>)} />
        <Route path='/thankyou' render={() => (<Suspense fallback={<Spinner/>}><ThankYou /></Suspense>)} />
        <Route path='/error' render={() => (<Suspense fallback={<Spinner />}><Error /></Suspense>) } />
      </Layout>
  );
}

export default App;
