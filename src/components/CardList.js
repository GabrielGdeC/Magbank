import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import posts from "../Data/Posts";

const CardList = ({ Posts }) => {
  return (
    <Container>
      <Row>
        {posts &&
          posts.map(({ id, image, title, description, action }) => {
            return (
              <Col xs={12} lg={4} Key={id}>
                <Card className="mx-auto my-3">
                  <Card.Img src={image} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="danger">{action}</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default CardList;
