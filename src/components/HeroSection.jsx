import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => {
    return (
        <div className="hero-section text-center text-light py-5">
            <Container>
                <Row>
                    <Col>
                        <h1>Welcome to Download Center</h1>
                        <p className="lead">Find and download all the resources you need, conveniently organized in one place.</p>
                        <Button variant="primary" size="lg" className="mt-3">Get Started</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroSection;