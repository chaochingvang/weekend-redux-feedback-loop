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

function Support() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [support, setSupport] = useState(``);

    const handleBack = () => {
        history.push(`/understanding`);
    }

    const handleNext = (event) => {
        event.preventDefault();
        if (support >= 1 && support <= 5) {
            dispatch({
                type: `ADD_SUPPORT`,
                payload: support
            })

            history.push(`/comments`);
        }
        else {
            alert(`Please enter a value between 1 and 5!`)
        }
    }

    return (<>
        <Card
            variant="elevation"
            elevation={24}
        >
            <Header />
            <CardContent>
                <h1>How well are you being supported?</h1>
                <form onSubmit={handleNext}>
                    <p>Please enter a value from 1-5</p>
                    <TextField
                        variant="outlined"
                        type="number"
                        min="1"
                        max="5"
                        value={support}
                        onChange={(event) => setSupport(event.target.value)}
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
                                disabled={support === `` ? true : false}
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
export default Support;