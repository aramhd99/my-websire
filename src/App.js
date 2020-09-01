import React from 'react';
import { Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faHome, faInfo} from '@fortawesome/free-solid-svg-icons';

import Layout from './Layout/Layout';
import Home from './Home/Home';
import About from './About/About';
import Contact from "./Contact/Contact";
import ThankYou from './ThankYou/ThankYou';
import Error from './Error/Error';

library.add(fab, faHome, faEnvelope, faInfo)

function App() {
  return (
      <Layout>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/thankYou' component={ThankYou} />
        <Route path='/error' component={Error} />
        <Route path='/facebook' location='https://www.facebook.com/aram.alhaddad/' />
      </Layout>
  );
}

export default App;
