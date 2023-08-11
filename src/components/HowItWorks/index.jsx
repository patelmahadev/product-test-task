import { Col, Container, Row } from "react-bootstrap";
import howItWork from "../../assets/images/how-it-works-graphic.png";

const HowItWorks = () => {
  return (
    <section className="section-padding">
      <Container>
        <Row className="text-center mb-2">
          <Col md={12}>
            <h2 className="section-title">Let's See How it Works</h2>
            <p>Here's how we make it easier to sell your home</p>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-between mt-5">
          <Col lg={6}>
            <img src={howItWork} className="img-fluid" alt="how-it-work" />
          </Col>
          <Col lg={5}>
            <div className="process-steps">
              <ul>
                <li>
                  <p className="step">Step 1</p>
                  <h2 className="step-title">Request for an offer</h2>
                  <p className="step-info">
                    Fill in your property details and get an instant preliminary
                    home value.
                  </p>
                </li>
                <li>
                  <p className="step">Step 2</p>
                  <h2 className="step-title">Schedule an appointment</h2>
                  <p className="step-info">
                    Show us your home in-person or virtually and get our offer
                    within 24 hours of the appointment.
                  </p>
                </li>
                <li>
                  <p className="step">Step 3</p>
                  <h2 className="step-title">Sell your house</h2>
                  <p className="step-info">
                    Have complete control over your decision. Either accept our
                    offer or list with us.
                  </p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
