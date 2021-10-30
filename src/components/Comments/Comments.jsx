import { useState } from "react";
import Header from "../Header/Header.jsx";

function Comments() {
    const [comment, setComment] = useState(``);

    console.log(comment);

    return (<>
        <Header />

        <h1>Any comments you want to leave?</h1>
        <form>
            <label htmlFor="comments">Comments:</label>
            <textarea
                name="comments"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                required></textarea>
            <button>Next</button>
        </form>
    </>)
}
export default Comments;