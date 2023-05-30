import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={10} sm={6}>
            <img class="pt-3" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>You can contact me at amritachatarpal@gmail.com or visit my <a href="https://github.com/Amritaraja" target="_blank">GitHub</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
