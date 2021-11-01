import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Header from "../Header/Header.jsx";

function Feeling() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState(``);

    const handleBack = () => {
        history.push(`/`);
    }

    const handleNext = (event) => {
        event.preventDefault();
        
        dispatch({
            type: `ADD_FEELING`,
            payload: feeling
        })

        history.push(`/understanding`);
    }

    console.log(feeling);

    return (<>
        <Header />

        <h1>How are you feeling today?</h1>
        <form onSubmit={handleNext}>
            <p>Please enter a value from 1-5</p>
            <input
                type="number"
                min="1"
                max="5"
                value={feeling}
                onChange={(event) => setFeeling(event.target.value)}
                required />
            <div>
                <button type="button" onClick={handleBack}>Back</button>
                <button type="submit">Next</button>
            </div>
        </form>
    </>)
}
export default Feeling;