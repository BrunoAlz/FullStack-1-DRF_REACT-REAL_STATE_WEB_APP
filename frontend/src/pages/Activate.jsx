// HOOKS
import { useEffect } from "react";

// REACT BOOTSTRAP
import { Col, Container, Row, Button } from "react-bootstrap";

// ICONS
import { FaCheckCircle } from "react-icons/fa";

// REDUX
import { useDispatch, useSelector } from "react-redux";

// ROUTERS
import { useNavigate, useParams } from "react-router-dom";

// TOASTS
import { toast } from "react-toastify";

// COMPONENTS
import Spinner from "../components/Spinner";
import Title from "../components/Title";

// REDUCERS
import { activate, reset } from "../slices/auth/authSlice";

const Activate = () => {
  const { uid, token } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/login");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  const handlerSubmit = () => {
    const userData = {
      uid,
      token,
    };

    dispatch(activate(userData));
    toast.success("Sua conta foi ativada, agora você poderá fazer o Login!");
  };

  return (
    <>
      <Title title="Activate User" />
      <Container>
        <Row>
          <Col className="mg-top text-center">
            <section>
              <h1>
                <FaCheckCircle /> Ativar sua Conta!
              </h1>
              <hr className="hr-text" />
            </section>
          </Col>
        </Row>
        {isLoading && <Spinner />}
        <Row className="mt-3">
          <Col className="text-center">
            <Button
              type="submit"
              variant="outline-success"
              size="lg"
              className="mt-3 large-btn"
              onClick={handlerSubmit}
            >
              Activate
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Activate;
