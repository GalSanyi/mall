import '../Footer/footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">
              {/* <img src={logo} alt="Logo" /> */}
              <div>
                <h1 className="text-white">Maltimart</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Ad est incididunt anim qui sint reprehenderit est elit ex cillum
              enim minim esse consectetur. Excepteur cillum ut anim mollit do
              exercitation duis anim minim velit tempor.
            </p>
          </Col>
          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
            </div>
            <ListGroup className="mb-3">
              <ListGroupItem className=" list ps-0 border-0 ">
                <Link to="#">Mobile Phones</Link>
              </ListGroupItem>
              <ListGroupItem className=" ps-0 border-0">
                <Link to="#">Modern Sofa</Link>
              </ListGroupItem>
              <ListGroupItem className=" ps-0 border-0">
                <Link to="#">Arm Chair</Link>
              </ListGroupItem>
              <ListGroupItem className=" ps-0 border-0">
                <Link to="#">Smart Watches</Link>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links </h4>
            </div>
            <ListGroup className="mb-3">
              <ListGroupItem className=" ps-0 border-0">
                <Link to="/shop">Shop</Link>
              </ListGroupItem>
              <ListGroupItem className=" ps-0 border-0">
                <Link to="/cart">Cart</Link>
              </ListGroupItem>
              <ListGroupItem className=" ps-0 border-0">
                <Link to="/login">Login</Link>
              </ListGroupItem>
              <ListGroupItem className=" ps-0 border-0">
                <Link to="#">Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
            </div>
            <ListGroup className="mb-3 footer__contacts">
              <ListGroupItem className=" ps-0 border-0 d-flex align-items-center gap-2">
                <span>
                  <span className="ri-map-pin-line"></span>
                </span>
                <p>Agrabad 4100. Bangladesh</p>
              </ListGroupItem>
              <ListGroupItem className=" ps-0 border-0 d-flex align-items-center gap-2">
                <span>
                  <span className="ri-phone-line"></span>
                </span>
                <p> +880 31 2526918 - 21</p>
              </ListGroupItem>
              <ListGroupItem className=" ps-0 border-0 d-flex align-items-center gap-2">
                <span>
                  <span className="ri-mail-line"></span>
                </span>
                <p>example@email.com</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12">
            <p className="footer__copyrighting ">
              Copyright {year} developed by Alex. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
