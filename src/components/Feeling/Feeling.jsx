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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Feeling() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState(``);

    const handleBack = () => {
        history.push(`/`);
    }

    const handleNext = (event) => {
        event.preventDefault();
        if (feeling >= 1 && feeling <= 5) {
            dispatch({
                type: `ADD_FEELING`,
                payload: feeling
            })

            history.push(`/understanding`);
        }
        else {
            alert(`Please enter a value between 1 and 5!`)
        }
    }

    console.log(feeling);

    return (<>
        

        <Card
            variant="elevation"
            elevation={24}
        >
            <Header />
            <CardContent>
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
                        // disabled={feeling === `` ? true : false}
                        type="submit"
                    >
                        Next
                    </Button>
                </Stack>
            </div>
            </form>
            </CardContent>
        </Card>
    </>)
}
export default Feeling;