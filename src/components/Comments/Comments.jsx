import Header from "../Header/Header.jsx";

function Comments() {

    return (<>
        <Header />

        <h1>Any comments you want to leave?</h1>
        <form>
            <label htmlFor="comments">Comments:</label>
            <textarea
                name="comments"
                required></textarea>
            <button>Next</button>
        </form>
    </>)
}
export default Comments;