import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className='justify-content-md-center mt-5'>
        <Col xs={12} md={6}>
          <div className="glass-panel p-4 p-md-5 mb-5">
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
