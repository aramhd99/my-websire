import React, {Suspense} from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import About from './About/About';
import ThankYou from './ThankYou/ThankYou';
import Error from './Error/Error';
import Spinner from './UI/Spinner/Spinner';
const Contact = React.lazy(() => import('./Contact/Contact'))

function App() {
  return (
      <Layout>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
          <Route path='/contact' render={() => (<Suspense fallback={<Spinner />}><Contact /></Suspense>)} />
        <Route path='/thankyou' component={ThankYou} />
        <Route path='/error' component={Error} />
      </Layout>
  );
}

export default App;
