import { Card, Col, Container, Row, Button } from "react-bootstrap";
import Slider from "react-slick";
import searchIcon from "../../assets/images/search-icon.svg";
import favoriteImg from "../../assets/images/favorite-icon.svg";
import bedIcon from "../../assets/images/bed-icon.svg";
import bathroomIcon from "../../assets/images/bathroom-icon.svg";
import garageIcon from "../../assets/images/garage-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProperty } from "../../redux/authSlice";

const PropertyCard = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state?.api);

  useEffect(() => {
    dispatch(fetchProperty());
  }, []);

  var slideSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
  };
  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <div className="property-row-box">
            <Row>
              {data?.data?.map((item, index) => {
                return (
                  <Col xs={6} md={4} className="browser-card px-0" key={index}>
                    <Card>
                      <div className="property-new">New</div>
                      <div className="favorite-img">
                        <img
                          src={favoriteImg}
                          alt="rating"
                          className="img-fluid property-img"
                        />
                      </div>
                      <Slider {...slideSettings}>
                        {item?.photos?.map((item, index) => {
                          return (
                            <div className="img-wrapper">
                              <img
                                key={index}
                                src={item}
                                alt="rating"
                                className="img-fluid property-img"
                              />
                            </div>
                          );
                        })}
                      </Slider>
                      <div className="property-detail d-flex justify-content-between">
                        <div className="detail-content">
                          <h4>${item?.list_price}</h4>
                          <p>
                            {item?.address}, {item?.city}, ON
                          </p>
                        </div>
                        <div className="search-box d-flex justify-content-center align-items-center">
                          <img
                            src={searchIcon}
                            alt="rating"
                            className="img-fluid property-img"
                          />
                        </div>
                      </div>
                      <ul className="m-0 d-flex justify-content-between list-unstyled list-property">
                        <li>
                          <img
                            src={bedIcon}
                            alt="rating"
                            className="img-fluid property-img"
                          />
                          {item?.bedrooms} Beds
                        </li>
                        <li>
                          <img
                            src={bathroomIcon}
                            alt="rating"
                            className="img-fluid property-img"
                          />
                          {item?.bathrooms} Baths
                        </li>
                        <li>
                          <img
                            src={garageIcon}
                            alt="rating"
                            className="img-fluid property-img"
                          />
                          {item?.garage} Garages
                        </li>
                      </ul>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </>
      )}
    </>
  );
};

export default PropertyCard;
