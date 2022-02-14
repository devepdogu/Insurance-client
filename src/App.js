import './_App.scss';
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">

        <Col md="auto">
          <div className='searchBar'>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </Col>


      </Row>
    </Container>
  );
}

export default App;
