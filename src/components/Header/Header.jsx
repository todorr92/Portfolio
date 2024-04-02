import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
const Header = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h3> Hi, I am a Software Developer </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Col>
          <Col>
            <Image
              src="../src/assets/images/avataaars.svg"
              alt="Profile Avatar"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
