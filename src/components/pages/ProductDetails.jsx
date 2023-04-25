import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import products from 'assets/data/products';
// import Helmet from 'components/Helmet/Helmet';
// import CommonSection from 'components/UI/CommonSection';
import '../styles/productDetails.css';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import ProductList from 'components/UI/ProductList';
import { useDispatch } from 'react-redux';
import { cartActions } from 'redux/slices/cartSlice';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const [tab, setTab] = useState('desc');
  const dispatch = useDispatch();
  const reviewUser = useRef('');
  const reviewMsg = useRef('');

  const submitHandler = e => {
    e.preventDefault();
    // сюди попадає все що в відгуках
    const reviewsUserName = reviewUser.current.value;
    const reviewsUserMsg = reviewMsg.current.value;
    //  submit sent userName
    const reviewObj = {
      userName: reviewsUserName,
      text: reviewsUserMsg,
      rating: rating,
    };
    console.log(reviewObj);
    toast.success('Review submitted');
  };

  const [rating, setRating] = useState(null);
  const { id } = useParams();
  const product = products.find(item => item.id === id);
  const {
    productName,
    imgUrl,
    price,
    reviews,
    avgRating,
    shortDesc,
    description,
    category,
  } = product;

  // додавання продукту в корзину
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        img: imgUrl,
        productName,
        price,
      })
    );
    toast.success('Product added successfully');
  };

  const relatedProducts = products.filter(item => item.category === category);
  return (
    <>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details ">
                <h2>{productName}</h2>
                <div className="product__raiding d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <span className="ri-star-s-fill"></span>
                      <span className="ri-star-s-fill"></span>
                      <span className="ri-star-s-fill"></span>
                      <span className="ri-star-s-fill"></span>
                      <span className="ri-star-half-s-fill"></span>
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className="product__price">${price} </span>
                  <span>Category:{category.toUpperCase()}</span>
                </div>
                <p className="mt-3">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn"
                  onClick={addToCart}
                >
                  add to cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === 'desc' ? 'active-tab' : ''}`}
                  onClick={() => setTab('desc')}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === 'rev' ? 'active-tab' : ''}`}
                  onClick={() => setTab('rev')}
                >
                  Reviews({reviews.length})
                </h6>
              </div>

              {tab === 'desc' ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review">
                  <div className="review__wrapper">
                    <ul>
                      {reviews &&
                        reviews.map((item, index) => {
                          return (
                            <li key={index} className="mt-4">
                              <span>{item.rating} (rating)</span>
                              <p>{item.text}</p>
                            </li>
                          );
                        })}
                      <p>{reviews.text}</p>
                    </ul>
                    <div className="review__form">
                      <h4>Leave your experience</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder="Enter name"
                            ref={reviewUser}
                            // щоб випадково не відправити пустим
                            required
                          />
                        </div>
                        <div className="form__group  d-flex align-items-center gap-5 rating__group">
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1<span className="ri-star-fill"></span>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2<span className="ri-star-fill"></span>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3<span className="ri-star-fill"></span>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4<span className="ri-star-fill"></span>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5<span className="ri-star-fill"></span>
                          </motion.span>
                        </div>
                        <div className="form__group">
                          <textarea
                            ref={reviewMsg}
                            row={4}
                            type="text"
                            placeholder="Review message..."
                            required
                          />
                        </div>
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          type="submit"
                          className="buy__btn"
                        >
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-5">
              <h2 className="related__title">You might also like</h2>
            </Col>
            {/* відфільтрований список товарів */}
            <ProductList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
