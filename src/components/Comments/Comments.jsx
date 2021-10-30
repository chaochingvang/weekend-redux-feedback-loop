import { useState } from "react";
import { useHistory } from "react-router";
import Header from "../Header/Header.jsx";

function Comments() {
    const history = useHistory();
    const [comment, setComment] = useState(``);

    const handleBack = () => {
        history.push(`/support`);
    }

    const handleNext = () => {
        history.push(`/review`);
    }

    return (<>
        <Header />

        <h1>Any comments you want to leave?</h1>
        <form onSubmit={handleNext}>
            <p>Please enter your comments below:</p>
            <textarea
                name="comments"
                value={comment}
                onChange={(event) => setComment(event.target.value)}>
                </textarea>
            <div>    
                <button onClick={handleBack}>Back</button>
                <button type="submit">Next</button>
            </div>
        </form>
    </>)
}
export default Comments;