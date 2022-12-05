// HOOKS
import { useState, useEffect } from "react";

// REACT BOOTSTRAP
import { Col, Container, Row, Form, Button } from "react-bootstrap";

// ICONS
import { FaSignInAlt } from "react-icons/fa";

// REDUX
import { useDispatch, useSelector } from "react-redux";

// ROUTERS
import { Link, useNavigate } from "react-router-dom";

// TOASTS
import { toast } from "react-toastify";

// COMPONENTS
import Spinner from "../components/Spinner";
import Title from "../components/Title";

// REDUCERS
import { login, reset } from "../slices/auth/authSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, user, navigate, dispatch]);

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Você deve inserir um E-mail.");
    }

    if (!password) {
      toast.error("Você deve inserir uma Senha.");
    }

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <>
      <Title title="Autenticação" />
      <Container>
        <Row>
          <Col className="mg-top text-center">
            <section>
              <h1>
                <FaSignInAlt /> Entrar
              </h1>
              <hr className="hr-text" />
            </section>
          </Col>
        </Row>
        {isLoading && <Spinner />}
        <Row className="mt-3">
          <Col className="justify-content-center">
            <Form onSubmit={handlerSubmit}>
              <Form.Group controllId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Insira seu E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controllId="password">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Insira sua Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="mt-3">
                Entrar
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="py-3">
          <Col>
            Ainda não tem cadastro?
            <Link to="/register">Registrar!</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
