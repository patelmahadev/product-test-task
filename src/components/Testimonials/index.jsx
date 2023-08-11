import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import ratingIcon from "../../assets/images/rating.png";
import { ratingData } from "../../utils/utils";

const Testimonials = () => {
  var slideSettings = {
    dots: true,
    arrows: false,
    speed: 500,
    rows: 1,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <section>
      <Container>
        <Row className="justify-content-center text-center mb-2">
          <Col md={6}>
            <h2 className="section-title">
              Don't take our word for it. Take theirs...
            </h2>
            <p>Listen to what our customers have to say.</p>
          </Col>
        </Row>
      </Container>
      <Col md={12} className="rating-slider">
        <Slider {...slideSettings}>
          {ratingData?.map((item, index) => {
            return (
              <Card key={index}>
                <div className="overlayblur"></div>
                <img
                  src={ratingIcon}
                  alt="rating"
                  className="img-fluid stars"
                />
                <p className="rating-text">{item.ratingText}</p>
                <div className="user-box">
                  <img
                    src={item.userPic}
                    alt="user"
                    className="img-fluid pic"
                  />
                  <div>
                    <h4 className="user-name">{item.userName}</h4>
                    <p>{item.userLocation}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </Slider>
      </Col>
    </section>
  );
};

export default Testimonials;
