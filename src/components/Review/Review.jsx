import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import axios from 'axios';

function Review() {
  const history = useHistory();
  const dispatch = useDispatch();
  const feedback = useSelector((store) => store.feedbackReducer);

  const handleBack = () => {
    history.push(`/comments`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: `POST`,
      url: `/feedback`,
      data: feedback,
    })
      .then((response) => {
        console.log(`Feedback successfully submitted`);
        dispatch({
          type: `ON_SUBMIT`,
        }); // RvdB: This all looks good to me!
        history.push(`/thankyou`);
      })
      .catch((error) => {
        console.log(`ERROR! Unable to submit`, error);
      });
  };

  return (
    <>
      <h1>Review Your Feedback</h1>

      <p>Feeling: {feedback.feeling}</p>
      <p>Understanding: {feedback.understanding}</p>
      <p>Support: {feedback.support}</p>
      <p>Comments: {feedback.comments}</p>

      <form onSubmit={handleSubmit}>
        <div>
          <button onClick={handleBack}>Back</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
export default Review;
