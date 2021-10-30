import Header from "../Header/Header.jsx";

function Support() {

    return (<>
        <Header />

        <h1>How well are you being supported?</h1>
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
export default Support;