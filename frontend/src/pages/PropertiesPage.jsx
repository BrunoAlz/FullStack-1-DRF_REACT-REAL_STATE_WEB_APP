// REACT BOOTSTRAP
import { Col, Container, Row } from 'react-bootstrap'

// HOOKS
import { useEffect } from 'react'

// REDUX
import { useDispatch, useSelector } from 'react-redux'

// COMPONENTS
import Spinner from '../components/Spinner';

// REDUCERS
import { getProperties, reset } from '../slices/properties/PropertySlice';

const PropertiesPage = () => {

  const { properties, isLoading, isSuccess } = useSelector((state) => state.properties);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProperties())
  }, [dispatch]);


if (isLoading){
  return <Spinner />;
}

  return (
    <>
      <Container>
        <Row>
          <Col className="mg-top">
            <h1>Propriedades disponíveis</h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PropertiesPage