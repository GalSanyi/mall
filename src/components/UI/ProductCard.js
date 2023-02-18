import { motion } from "framer-motion";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/product-card.css";
const ProductCard = ({ item }) => {
  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={item.imgUrl}
            alt="Product"
          />
        </div>
        <div className="p-2 product__info">
          <p className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </p>
          <span>{item.category}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 - 0.9 }}
          >
            <span className="ri-add-line plus"></span>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
