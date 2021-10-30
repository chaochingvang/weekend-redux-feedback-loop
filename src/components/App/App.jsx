import React from 'react';
import { Route, HashRouter as Router, Link } from 'react-router-dom';


//components import
import Home from '../Home/Home.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import ThankYou from '../ThankYou/ThankYou.jsx';
import Admin from '../Admin/Admin.jsx';
import './App.css';

function App() {

  return (
    <Router>
      <div className='App'>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/feeling">
          <Feeling />
        </Route>

        <Route path="/understanding">
          <Understanding />
        </Route>

        <Route path="/support">
          <Support />
        </Route>

        <Route path="/comments">
          <Comments />
        </Route>

        <Route path="/review">
          <Review />
        </Route>

        <Route path="/thankyou">
          <ThankYou />
        </Route>

        <Route path="/admin">
          <Admin />
        </Route>

      </div>
    </Router>
  );
}

export default App;
