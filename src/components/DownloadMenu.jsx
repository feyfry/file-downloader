import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const DownloadSection = ({ links }) => {
    return (
        <Container className="download-section py-5">
            <Row>
                {links.map((link, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <Card className="h-100 shadow">
                            <Card.Body>
                                <Card.Title>{link.name}</Card.Title>
                                <Card.Text>Click below to download.</Card.Text>
                                <Button variant="success" href={link.url} download>
                                    Download
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

DownloadSection.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default DownloadSection;