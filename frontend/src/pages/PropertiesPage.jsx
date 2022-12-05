// REACT BOOTSTRAP
import { Col, Container, Row } from "react-bootstrap";

// HOOKS
import { useEffect } from "react";

// REDUX
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import Spinner from "../components/Spinner";
import Property from "../components/Property";
import Title from "../components/Title";

// TOASTS
import { toast } from "react-toastify";

// REDUCERS
import { getProperties, reset } from "../slices/properties/PropertySlice";

const PropertiesPage = () => {
  const { properties, isLoading, isError, message } = useSelector(
    (state) => state.properties
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message, { icon: ":(" });
    }
    dispatch(getProperties());
  }, [dispatch, isError, message]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Title title="Catalogo" />
      <Container>
        <Row>
          <Col className="mg-top text-center">
            <h1>Catalogo de Propriedades</h1>
            <hr className="hr-text" />
          </Col>
          {
            <>
              <Row className="mt-3">
                {properties.map((property) => (
                  <Col key={property.id} sm={12} md={6} lg={4} xl={3}>
                    <Property property={property} />
                  </Col>
                ))}
              </Row>
            </>
          }
        </Row>
      </Container>
    </>
  );
};

export default PropertiesPage;
