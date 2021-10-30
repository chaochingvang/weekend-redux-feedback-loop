import { useHistory } from "react-router";

function Home() {
    const history = useHistory();

    return (<>
        <h1>THE REFLECTION INJECTION</h1>

       
        <button onClick={() => history.push(`/feeling`)}>Create New Feedback</button>

    </>)
}
export default Home;