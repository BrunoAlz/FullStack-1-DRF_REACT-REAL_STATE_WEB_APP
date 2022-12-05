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
import { register, reset } from "../slices/auth/authSlice";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

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
      toast.success(
        "Um Email de Ativação foi enviado para o Seu E-mail. Aguardando Ativação..."
      );
    }

    dispatch(reset());
  }, [isError, isSuccess, message, user, navigate, dispatch]);

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (password !== repassword) {
      toast.error("As senhas devem ser iguais");
    } else {
      const userData = {
        username,
        firstname,
        lastname,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  return (
    <>
      <Title title="Cadastrar-se" />
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
              <Form.Group controlId="username">
                <Form.Label>Username: </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Insira seu Nome de Usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="firstname">
                <Form.Label>Primeiro nome:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Primeiro Nome"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="lastname">
                <Form.Label>Sobrenome:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Primeiro Nome"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>E-mail:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Senha:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="repassword">
                <Form.Label>Confirme a senha:</Form.Label>
                <Form.Control
                  type="repassword"
                  placeholder="Confirmação de Senha"
                  value={repassword}
                  onChange={(e) => setRepassword(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="mt-3">
                Cadastrar
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="py-3">
          <Col>
            Já possui cadastro ?<Link to="/login"> Entrar!</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterPage;
