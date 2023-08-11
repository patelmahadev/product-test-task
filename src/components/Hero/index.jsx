import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import heroGraphic from "../../assets/images/hero-graphic.svg";
import mapIcon from "../../assets/images/map-icon.svg";

const Hero = () => {
  return (
    <Container fluid className="hero-wrapper">
      <Container>
        <Row className="align-items-center justify-content-between flex-column-reverse flex-md-row">
          <Col lg={6}>
            <h2 className="hero-title">
              Get an Instant offer and sell your home
            </h2>
            <p className="d-block d-md-none">
              Receive an offer within 24 hours, it's that simple!
            </p>
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
                <Button className="d-none d-md-block">Get my free offer</Button>
              </InputGroup.Text>
            </InputGroup>
            <Button className="d-block d-md-none subs-btn">
              Get my free offer
            </Button>
            <p className="d-none d-md-block">
              Receive an offer within 24 hours, it's that simple!
            </p>
          </Col>
          <Col lg={5}>
            <img
              src={heroGraphic}
              className="img-fluid hero-graphic"
              alt="hero"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Hero;
