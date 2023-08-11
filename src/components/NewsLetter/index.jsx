import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import mapIcon from "../../assets/images/map-icon.svg";

const NewsLetter = () => {
  return (
    <section className="section-padding">
      <Container>
        <Card className="subscribe-card">
          <h4 className="sub-title">Enter you home details and</h4>
          <h2 className="main-title">Get an instant offer.</h2>
          <p>Within 24 hours!</p>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <InputGroup className="location-input-box my-4">
                <InputGroup.Text>
                  <img src={mapIcon} alt="map" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Where's your house?"
                  aria-label="Where's your house?"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text>
                  <Button className="d-none d-md-block">
                    Get my free offer
                  </Button>
                </InputGroup.Text>
              </InputGroup>
              <Button className="d-block d-md-none subs-btn">
                Get my free offer
              </Button>
            </Col>
          </Row>
        </Card>
      </Container>
    </section>
  );
};

export default NewsLetter;
