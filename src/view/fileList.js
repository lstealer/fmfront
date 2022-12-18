import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import FileTable from './fileTable';


function FileList() {
  return (  
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row><h1>Files View</h1></Row>
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Link 2
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
                <FileTable title="title1" description="des1"/>
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
                <FileTable title="title2" description="des2"/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default FileList;