import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function FileTable(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.title}</td>
          <td>{props.description}</td>
          <td> 
            <Button variant="primary">Update</Button>{' '}
            <Button variant="warning">Hide</Button>{' '}
            <Button variant="danger">Delete</Button>{' '}
            <Button variant="secondary">Share</Button>{' '}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default FileTable;