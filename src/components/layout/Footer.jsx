import { Col, Container, Row } from "react-bootstrap";
import { FooterLinks } from "../../utils/utils";
import { Link } from "react-router-dom";
import fbIcon from "../../assets/images/facebook.svg";
import twIcon from "../../assets/images/twitter.svg";
import liIcon from "../../assets/images/linkedin.svg";
import inIcon from "../../assets/images/instagram.svg";
import phoneIcon from "../../assets/images/phone-icon.svg";
import emailIcon from "../../assets/images/email-icon.svg";

const Footer = () => {
  return (
    <section className="section-padding footer-wrapper">
      <Container>
        <Row className="row row-cols-2 row-cols-md-5">
          {FooterLinks?.map((item, index) => {
            return (
              <Col key={index}>
                <h4 className="subtitle-capital">{item.title}</h4>

                <ul className="footer-list">
                  {item.links?.map((ele, index) => {
                    return (
                      <li key={index}>
                        <Link>{ele.linkName}</Link>
                      </li>
                    );
                  })}
                </ul>
                <Link className="footer-link-primary">{item.linkPrimary}</Link>
              </Col>
            );
          })}
        </Row>
        <div className="footer-bottom">
          <h4 className="subtitle-capital">Contact Us</h4>
          <ul className="socials-inline">
            <li>
              <Link>
                <img src={fbIcon} alt="social" />
              </Link>
              <Link>
                <img src={twIcon} alt="social" />
              </Link>
              <Link>
                <img src={liIcon} alt="social" />
              </Link>
              <Link>
                <img src={inIcon} alt="social" />
              </Link>
            </li>
          </ul>
          <p className="d-flex gap-2">
            <img src={phoneIcon} alt="icon" />
            <span>905-567-0200</span>
          </p>
          <p className="d-flex gap-2">
            <img src={emailIcon} alt="icon" />
            <span>info@redbuyers.com</span>
          </p>
          <p>
            <b>© 2021 redbuyers.com. All rights reserved.</b>
          </p>
          <p>
            RedBuyers Realty. Brokerage, is fully registered under the Real
            Estate and Business brokerage, Act, 2002 of Ontario.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
