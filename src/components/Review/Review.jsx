import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";

//mui imports
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Review() {

    const history = useHistory();
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.feedbackReducer);

    const handleBack = () => {
        history.push(`/comments`);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios({
            method: `POST`,
            url: `/feedback`,
            data: feedback
        }).then((response) => {
            console.log(`Feedback successfully submitted`);
            dispatch({
                type: `ON_SUBMIT`
            });
            history.push(`/thankyou`);
        }).catch((error) => {
            console.log(`ERROR! Unable to submit`, error);
        })


    }

    return (<>
        <Card
            variant="elevation"
            elevation={24}
        >
            <CardContent>
                <h1>Review Your Feedback</h1>

                <p>Feeling: {feedback.feeling}</p>
                <p>Understanding: {feedback.understanding}</p>
                <p>Support: {feedback.support}</p>
                <p>Comments: {feedback.comments}</p>

                <form onSubmit={handleSubmit}>
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

                                type="submit"
                            >
                                Submit
                            </Button>
                        </Stack>
                    </div>
                </form>
            </CardContent>
        </Card>
    </>)
}
export default Review;