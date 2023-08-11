import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PropertyCard from "../components/PropertyCard";
import { IoMdArrowDropdown } from "react-icons/io";

const BrowseHome = () => {
  return (
    <section className="section-padding">
      <Container>
        <Row className="text-center mb-2">
          <Col md={12}>
            <h2 className="section-title">Browse Homes</h2>
            <p>View your Dream Home</p>
          </Col>
        </Row>
        <PropertyCard />
        <Row>
          <div className="view-more-btn">
            <Button>
              View More <IoMdArrowDropdown />{" "}
            </Button>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default BrowseHome;
