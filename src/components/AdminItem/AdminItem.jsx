import axios from "axios";
import moment from 'moment';

function AdminItem({ item, getFeedbackList }) {


    const handleDelete = () => {

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