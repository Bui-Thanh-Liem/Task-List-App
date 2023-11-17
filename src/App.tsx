//
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

//
import "./App.scss";
import Header from './components/Header';
import ListTask from './components/ListTask';
import Filters from './components/Filters';

function App() {

    
    return (
        <div className="app-container">
            <Container>
                <Row className='app-row'>
                    <Col lg={7}>
                        <Header />
                        <ListTask />
                        <Filters />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
