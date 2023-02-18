import '../Header/header.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import { Container, Row } from 'reactstrap';
import { motion } from 'framer-motion';

const nav__links = [
  {
    path: 'home',
    display: 'Home',
  },
  {
    path: 'shop',
    display: 'Shop',
  },
  {
    path: 'Cart',
    display: 'cart',
  },
];

const Header = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = e => {
    const header = document.querySelector('.header');
    const scrollTop = window.scrollY;
    scrollTop >= 80
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  };

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="Logo" />
              <div>
                <h1>Maltimart</h1>
                {/* <p>Since 1995</p> */}
              </div>
            </div>

            <div
              className={
                show ? ['navigation', 'mobile__menu'].join(' ') : ['navigation']
              }
            >
              <ul className="menu">
                <span
                  className="ri-close-line close__menu"
                  onClick={() => setShow(!show)}
                ></span>
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={nav => (nav.isActive ? 'nav__active' : '')}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path fill="none" d="M0 0H24V24H0z" />
                  <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                </svg>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 0 0-6 0v2z" />
                </svg>
                <span className="badge">1</span>
              </span>
              <span>
                <motion.img
                  whileHover={{ scale: 1.6 }}
                  whileTap={{ scale: 2.4 }}
                  src={userIcon}
                  alt="icon"
                />
              </span>
              <div className="mobile__menu" onClick={() => setShow(!show)}>
                <span className="ri-menu-line"></span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
