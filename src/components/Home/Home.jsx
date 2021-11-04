import { useHistory } from "react-router";

import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Home() {
    const history = useHistory();

    return (<>
        <Card
            variant="elevation"
            elevation={24}
        >
            <CardContent>
            <h1>THE REFLECTION INJECTION</h1>

            <h3>A reflection journal that keeps track of you!</h3>

            
            <Button
                variant="contained"
                onClick={() => history.push(`/feeling`)}
            >
                Create New Feedback
            </Button>
            </CardContent>
        </Card>
    </>)
}
export default Home;