import axios from "axios"
import { useEffect, useState } from "react";
import AdminItem from "../AdminItem/AdminItem.jsx";

function Admin() {
    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        getFeedbackList();
    }, []);

    const getFeedbackList = () => {
        axios({
            method: `GET`,
            url: `/feedback`
        }).then((response) => {
            setFeedbackList(response.data);
            console.log(`Successfully retrieved data from db`);
        }).catch((error) => {
            console.log(`Error! Unable to get data`, error);
        });
    }

    console.log(`this is feedback list`, feedbackList);

    return (<>
        <h1>Feedback Results!</h1>

        <table>
            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Comprehension</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {feedbackList.map((item) => (
                    <AdminItem
                        key={item.id}
                        item={item}
                        getFeedbackList={getFeedbackList}
                    />
                ))}
            </tbody>
        </table>
    </>)
}
export default Admin;