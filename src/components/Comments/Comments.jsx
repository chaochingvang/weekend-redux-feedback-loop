import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Header from "../Header/Header.jsx";

function Comments() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState(``);

    const handleBack = () => {
        history.push(`/support`);
    }

    const handleNext = (event) => {
        event.preventDefault();

        dispatch({
            type: `ADD_COMMENTS`,
            payload: comments
        })

        history.push(`/review`);
    }

    return (<>
        <Header />

        <h1>Any comments you want to leave?</h1>
        <form onSubmit={handleNext}>
            <p>Please enter your comments below:</p>
            <textarea
                name="comments"
                value={comments}
                onChange={(event) => setComments(event.target.value)}>
                </textarea>
            <div>    
                <button onClick={handleBack}>Back</button>
                <button type="submit">Next</button>
            </div>
        </form>
    </>)
}
export default Comments;