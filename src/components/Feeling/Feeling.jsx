import { useHistory } from "react-router";
import Header from "../Header/Header.jsx";

function Feeling() {

    const history = useHistory();

    const handleBack = () => {
        history.push(`/`);
    }

    const handleNext = () => {
        history.push(`/understanding`);
    }

    return (<>
        <Header />

        <h1>How are you feeling today?</h1>
        <form onSubmit={handleNext}>
            <p>Please enter a value from 1-5</p>
            <input
                type="number"
                min="1"
                max="5"
                required />
            <div>
                <button onClick={handleBack}>Back</button>
                <button type="submit">Next</button>
            </div>
        </form>
    </>)
}
export default Feeling;