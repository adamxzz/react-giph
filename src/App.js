import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import GiphyViewer from './components/GiphyViewer'

const App = () => {    
    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                    <GiphyViewer />
                </Col>
            </Row>
        </Container>
    );
};

export default App;