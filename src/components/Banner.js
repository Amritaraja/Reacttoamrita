import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "I'm Amrita" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`Hello,`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "I am Amrita" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Full stack developer, graduated from UT Coding Bootcamp in May 2023.</p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <section className="skill " id="skills">
        <div className="container ">
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="skill-bx ">
                        <h2>Skills</h2>
                        <p>JavaScript, React, HTML/CSS, jQuery, Bootstrap, Responsive Design, PWAs & Handlebars, API (REST, JSON, HTTP request methods), Node.js, Express.js, MySQL, MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </section>
    
    
  )
}
