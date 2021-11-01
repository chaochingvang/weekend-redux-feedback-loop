import { useHistory } from 'react-router';

function Home() {
  const history = useHistory();
  // RvdB: Absolutely love the title. :)
  return (
    <>
      <h1>THE REFLECTION INJECTION</h1>

      <button onClick={() => history.push(`/feeling`)}>
        Create New Feedback
      </button>
    </>
  );
}
export default Home;
