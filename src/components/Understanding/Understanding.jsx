import Header from "../Header/Header.jsx";

function Understanding() {

    return (<>
        <Header />

        <h1>How well are you understanding the content?</h1>
        <form>
            <input
                type="number" placeholder="1-5"
                min="1"
                max="5"
                required />
            <button>Next</button>
        </form>
    </>)
}
export default Understanding;