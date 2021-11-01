import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Header from '../Header/Header.jsx';

function Feeling() {
  const history = useHistory();
  const dispatch = useDispatch();
  // RvdB: I think you probably know this, but it would be helpful to have some
  // comments here - even though I think it's clear what you're doing (but then, I
  // had the same assignment.)
  const [feeling, setFeeling] = useState(``);

  const handleBack = () => {
    history.push(`/`);
  };

  const handleNext = (event) => {
    event.preventDefault();

    dispatch({
      type: `ADD_FEELING`,
      payload: feeling,
    });

    history.push(`/understanding`);
  };

  console.log(feeling);

  return (
    <>
      <Header />

      <h1>How are you feeling today?</h1>
      {/* RvdB: I just realized that I didn't use forms! This is great, because you can submit
      on enter. */}
      <form onSubmit={handleNext}>
        <p>Please enter a value from 1-5</p>
        {/* RvdB: The min and max and the required is great - excellent validation. */}
        <input
          type="number"
          min="1"
          max="5"
          value={feeling}
          onChange={(event) => setFeeling(event.target.value)}
          required
        />
        <div>
          <button onClick={handleBack}>Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </>
  );
}
export default Feeling;
