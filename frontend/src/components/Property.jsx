// REACT BOOSTRAP
import { Badge, Button, Card, Col, Row } from "react-bootstrap";

// ICONS
import { FaBed, FaShower } from "react-icons/fa";
import { GiStairs } from "react-icons/gi";

// ROUTER
import { Link } from "react-router-dom";

const Property = ({ property }) => {
  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Badge
        bg="success"
        className="position-absolute top-0 start-100 translate-middle rounded-pill"
      >
        {property.advert_type}
      </Badge>
      <Link to={`/property${property.slug}`}>
        <Card.Img src={property.cover_photo} variante="top" />
      </Link>
      <Card.Title className="property-price">
        ${numberWithCommas(Number(property.price))}
      </Card.Title>
      <Card.Body>
        <Card.Title as="h1">
          <strong>{property.title}</strong>
        </Card.Title>
        <Card.Text>{property.description.substring(0, 70)}...</Card.Text>
        <hr />
        <Row>
          <Col className="d-flex justify-content-between">
            <span>
              <FaBed /> {property.bedrooms}
            </span>
            <span>
              <FaShower /> {property.bathrooms}
            </span>
            <span>
              <GiStairs /> {property.total_floors}
            </span>
          </Col>
        </Row>
        <hr />
        <Link to={`/property/${property.slug}`}>
          <Button variant="primary">Detalhes</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Property;
