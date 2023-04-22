import CommonSection from 'components/UI/CommonSection';
import Helmet from '../Helmet/Helmet.js';
import { Container, Row, Col } from 'reactstrap';
const Shop = () => {
  return (
    <Helmet title="shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select>
                  <option>Filter bu Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3"></Col>
            <Col lg="6" md="6"></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
