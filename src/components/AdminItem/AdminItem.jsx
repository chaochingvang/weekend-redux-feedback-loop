import axios from 'axios';
import moment from 'moment';

function AdminItem({ item, getFeedbackList }) {
  // RvdB: I'm assuming that you didn't get to this!
  // It does seem like you were on the right track
  // since you've already imported axios. :)
  const handleDelete = () => {};

  return (
    <>
      <tr>
        {/* RvdB: Having a date here is a great feature. */}
        <td>{moment(item.date).format(`MM/DD/YYYY`)}</td>
        <td>{item.feeling}</td>
        <td>{item.understanding}</td>
        <td>{item.support}</td>
        <td>{item.comments}</td>
        <td>
          <button onClick={handleDelete}>Delete</button>
        </td>
      </tr>
    </>
  );
}
export default AdminItem;
