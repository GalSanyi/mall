import Helmet from 'components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebase.config';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');
  const navigate = useNavigate();
  const singIn = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setEmail('');
      setPassword('');
      const user = userCredential.user;
      console.log(user);
      setLoading(false);
      toast.success('SuccessFully logged in ');
      navigate('/login');
    } catch (error) {
      setLoading(false);
      toast.error(error.message || error);
    }
  };
  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Loading...</h5>
              </Col>
            ) : (
              <Col lg="6" className=" m-auto text-center">
                <h3 className="fw-bold  mb-4">Login</h3>
                <Form className="auth__form" onSubmit={singIn}>
                  <FormGroup className="form__group">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <button type="submit" className="buy__btn login__btn">
                    Login
                  </button>
                  <p>
                    Don't have account?
                    <Link to="/signup"> Create an account</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
