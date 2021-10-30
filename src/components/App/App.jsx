import React from 'react';
import axios from 'axios';

//components import
import Home from '../Home/Home.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import ThankYou from '../ThankYou/ThankYou.jsx';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Home />

      <Feeling />

      <Understanding />

      <Support />

      <Comments />

      <Review />

      <ThankYou />


    </div>
  );
}

export default App;
