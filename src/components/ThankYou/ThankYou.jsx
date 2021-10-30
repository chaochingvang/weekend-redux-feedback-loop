import { useHistory } from "react-router";

function ThankYou() {
    
    const history = useHistory();

    return (<>
        <h1>Thank you!</h1>

        <h4>Feedback successfully submitted!</h4>

        <button onClick={() => history.push(`/`)}>Go Back To Home</button>
    </>)
}
export default ThankYou;