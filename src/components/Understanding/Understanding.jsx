import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Header from "../Header/Header.jsx";

//mui imports
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TextField } from "@mui/material";

function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [understanding, setUnderstanding] = useState(``);

    const handleBack = () => {
        history.push(`/feeling`);
    }

    const handleNext = (event) => {
        event.preventDefault();

        dispatch({
            type: `ADD_UNDERSTANDING`,
            payload: understanding
        })

        history.push(`/support`);
    }

    return (<>
        <Header />

        <h1>How well are you understanding the content?</h1>
        <form onSubmit={handleNext}>
            <p>Please enter a value from 1-5</p>
            <TextField
                variant="outlined"
                type="number"
                min="1"
                max="5"
                value={understanding}
                onChange={(event) => setUnderstanding(event.target.value)}
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
                        disabled={understanding === `` ? true : false}
                        type="submit"
                    >
                        Next
                    </Button>
                </Stack>
            </div>
        </form>
    </>)
}
export default Understanding;