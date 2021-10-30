import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Header from "../Header/Header.jsx";

function Support() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [support, setSupport] = useState(``);

    const handleBack = () => {
        history.push(`/understanding`);
    }

    const handleNext = (event) => {
        event.preventDefault();

        dispatch({
            type: `ADD_SUPPORT`,
            payload: support
        })

        history.push(`/comments`);
    }

    return (<>
        <Header />

        <h1>How well are you being supported?</h1>
        <form onSubmit={handleNext}>
            <p>Please enter a value from 1-5</p>
            <input
                type="number"
                min="1"
                max="5"
                value={support}
                onChange={(event) => setSupport(event.target.value)}
                required />
            <div>
                <button onClick={handleBack}>Back</button>
                <button type="submit">Next</button>
            </div>
        </form>
    </>)
}
export default Support;