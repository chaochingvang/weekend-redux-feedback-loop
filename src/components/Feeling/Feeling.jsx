import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Header from "../Header/Header.jsx";
import "./Feeling.css";

//mui imports
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TextField } from "@mui/material";

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
            <TextField
                variant="outlined"
                type="number"
                min="1"
                max="5"
                value={feeling}
                onChange={(event) => setFeeling(event.target.value)}
                required />
            <div>
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Button
                        variant="contained"
                        startIcon={<ArrowBackIcon />}
                        type="button"
                        onClick={handleBack}
                    >
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        disabled={feeling === `` ? true : false}
                        type="submit"
                    >
                        Next
                    </Button>
                </Stack>
            </div>
        </form>
    </>)
}
export default Feeling;