import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const CenteredButton = ({ children }) => {
  return (
    <Container>
      <Row>
        <div className="d-flex justify-content-center">
          <Button className="my-5 px-5 py-3" variant="success" size="lg">
            {children}
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default CenteredButton;