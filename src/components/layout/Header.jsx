import { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/images/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { resetData } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const token = sessionStorage.getItem("auth") || "";
  const username = sessionStorage.getItem("userName") || "";
  const Logout = () => {
    sessionStorage.clear("auth");
    toast.success("User logged out succussfully");
    dispatch(resetData());
    navigate("/login");
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="navbar-wrapper">
        <Container className="flex-row-reverse flex-md-row">
          <Button className="slidemenu" variant="primary" onClick={handleShow}>
            <FaBars />
          </Button>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="m-auto">
              <Link
                to="/sell"
                className={
                  location?.pathname === "/sell"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Sell
              </Link>
              {token === undefined || token === "" ? (
                <Link to="/login" className="nav-link">
                  Buy
                </Link>
              ) : (
                <Link
                  to="/browse-home"
                  className={
                    location?.pathname === "/browse-home"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Buy
                </Link>
              )}
              <Link to="/contact-us" className="nav-link">
                Contact Us
              </Link>
            </Nav>
          </Navbar.Collapse>
          <div className="ms-auto d-none d-md-block">
            {token ? (
              <>
                <Button variant="link" onClick={() => Logout()}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="link" onClick={() => navigate("/login")}>
                  Login
                </Button>
              </>
            )}
            <Button>Register</Button>
          </div>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mob-slidepush">
            <Accordion defaultActiveKey={["0", "1", "2"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Buy & Sell</Accordion.Header>
                <Accordion.Body>
                  <ul className="mob-menus">
                    <li>
                      <Link to="">Sell</Link>
                    </li>
                    <li>
                      <Link to="/browse-home">Browse Home</Link>
                    </li>
                    <li>
                      <Link to="">Buy</Link>
                    </li>
                    <li>
                      <Link to="">Down Payment</Link>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Company</Accordion.Header>
                <Accordion.Body>
                  <ul className="mob-menus">
                    <li>
                      <Link to="">About</Link>
                    </li>
                    <li>
                      <Link to="">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="">Careers</Link>
                    </li>
                    <li>
                      <Link to="">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="">Terms & Conditions</Link>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Location</Accordion.Header>
                <Accordion.Body>
                  <ul className="mob-menus">
                    <li>
                      <Link to="">Greater Toronto Area</Link>
                    </li>
                    <li>
                      <Link to="">Region of Peel</Link>
                    </li>
                    <li>
                      <Link to="">Region of Hamilton</Link>
                    </li>
                    <li>
                      <Link to="">Region of Waterloo</Link>
                    </li>
                    <li>
                      <Link to="">View All Locations</Link>
                    </li>
                    <li>
                      <Button className="map-btn">
                        <ImLocation /> map Search
                      </Button>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Offcanvas.Body>
        {username ? (
          <>
            <div className="footer-user">
              {/* <img src="" alt="user img" /> */}
              <span>{username.charAt(0)}</span>
              <p>{username}</p>
            </div>
          </>
        ) : (
          <>
            <div className="footer-offcanvas">
              <Button className="loginbtnfoot">Login</Button>
              <Button className="registration">Registration</Button>
            </div>
          </>
        )}
      </Offcanvas>
    </>
  );
};

export default Header;
