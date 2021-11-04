import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Header from "../Header/Header.jsx";

//mui imports
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Comments() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState(``);

    const handleBack = () => {
        history.push(`/support`);
    }

    const handleNext = (event) => {
        event.preventDefault();

        dispatch({
            type: `ADD_COMMENTS`,
            payload: comments
        })

        history.push(`/review`);
    }

    return (<>
        <Card
            variant="elevation"
            elevation={24}
        >
            <Header />
            <CardContent>
                <h1>Any comments you want to leave?</h1>
                <form onSubmit={handleNext}>
                    <p>Please enter your comments below:</p>
                    <textarea
                        name="comments"
                        rows={4}
                        cols={50}
                        value={comments}
                        onChange={(event) => setComments(event.target.value)}>
                    </textarea>
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
                                onClick={handleBack}
                            >
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                endIcon={<ArrowForwardIcon />}
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
export default Comments;