import Header from "../Header/Header.jsx";

function Feeling() {

    return (<>
        <Header />

        <h1>How are you feeling today?</h1>
        <form>
            <input
                type="number"
                placeholder="1-5"
                min="1"
                max="5"
                required />
            <div>
                <button>Back</button>
                <button>Next</button>
            </div>
        </form>
    </>)
}
export default Feeling;