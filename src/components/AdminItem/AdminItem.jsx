import axios from "axios";

function AdminItem({ item, getFeedbackList }) {

    const handleDelete = () => {

    }

    return (<>
        <tr>
            <td>{item.feeling}</td>
            <td>{item.understanding}</td>
            <td>{item.support}</td>
            <td>{item.comments}</td>
            <td><button onClick={handleDelete}>Delete</button></td>
        </tr>
    </>);
}
export default AdminItem;