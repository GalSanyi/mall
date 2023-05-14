import Helmet from 'components/Helmet/Helmet';
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';
import { auth } from 'firebase.config';
import { storage } from 'firebase.config';
import { db } from 'firebase.config';

import { toast } from 'react-toastify';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loader from 'components/Loader';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(file);
  const navigator = useNavigate();

  const signUp = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const storageRef = ref(storage, `images/${Date.now() + username}`); //Отже, цей код створює посилання на файл у Firebase Storage з унікальним ідентифікатором, що містить поточну мітку часу та ім'я користувача. Ви можете використати це посилання, наприклад, для завантаження зображення на сервер.
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        error => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async downloadUrl => {
            //обновляе профіль користувача
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadUrl,
            });
            await setDoc(doc(db, 'users', user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadUrl,
            });
          });
        }
      );

      setLoading(false);
      toast.success('Account created successfully');
      navigator('/Login');
    } catch (error) {
      setLoading(false);
      toast.error('something went wrong');
      setLoading(false);
      setError(error.message);
    }
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Helmet title="Signup" />
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h6 className="fw-bold">Loading...</h6>
              </Col>
            ) : (
              <Col lg="6" className=" m-auto text-center">
                <h3 className="fw-bold mb-4">Signup</h3>
                <Form className="auth__form" onSubmit={signUp}>
                  <FormGroup className="form__group">
                    <input
                      type="text"
                      placeholder="Enter your username"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                  </FormGroup>
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
                  <FormGroup className="form__group">
                    <input
                      type="file"
                      onClick={e => setFile(e.target.files[0])}
                    />
                  </FormGroup>
                  {loading ? (
                    <Loader />
                  ) : (
                    <button type="submit" className="buy__btn login__btn">
                      Create an Account
                    </button>
                  )}
                  {error && <p className="text-danger">{error}</p>}
                  <p>
                    Already have account?
                    <Link to="/login"> Login</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Signup;
