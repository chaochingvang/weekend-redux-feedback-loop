import { useHistory } from "react-router";

function Review() {
    
    const history = useHistory();

    const handleBack = () => {
        history.push(`/comments`);
    }

    const handleSubmit = () => {
        history.push(`/thankyou`);
    }

    return (<>
        <h1>Review Your Feedback</h1>

        <p>Feeling: </p>
        <p>Understanding: </p>
        <p>Support: </p>
        <p>Comments: </p>

        <form onSubmit={handleSubmit}>
            <div>
                <button onClick={handleBack}>Back</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    </>)
}
export default Review;