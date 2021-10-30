import axios from "axios";
import moment from 'moment';

function AdminItem({ item, getFeedbackList }) {


    const handleDelete = () => {
        axios({
            method: `DELETE`,
            url: `/feedback/${item.id}`
        }).then((response) => {
            console.log(`Delete success!`);
            getFeedbackList();
        }).catch((error) => {
            console.log(`ERROR! Unable to delete!`, error);
        });
    }

    return (<>
        <tr>
            <td>{moment(item.date).format(`MM/DD/YYYY`)}</td>
            <td>{item.feeling}</td>
            <td>{item.understanding}</td>
            <td>{item.support}</td>
            <td>{item.comments}</td>
            <td><button onClick={handleDelete}>Delete</button></td>
        </tr>
    </>);
}
export default AdminItem;