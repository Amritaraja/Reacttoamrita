import { Container, Row, Col} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj1 from "../assets/img/WeatherWizard.png";
import proj2 from "../assets/img/Culture Cruncher.png";
import proj3 from "../assets/img/MoMart.png";
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "Weather Wizard",
      description: "Weather dashboard that displays the weather for multiple cities. Displays the current weather as well as the 5 day forecast.",
      imgUrl: proj1,
      link: "https://amritaraja.github.io/Weather-Wizard/",
    },
    {
      title: "Culture Cruncher",
      description: "This application is designed to inform users about cultures and cuisines of different countries.",
      imgUrl: proj2,
      link: "https://dbradley555.github.io/culture-cruncher/",
    },
    {
      title: "MoMart",
      description: "With MoMart, users are able to quickly view items by category & have the unique items shipped directly to their homes.",
      imgUrl: proj3,
      link: "https://momart.herokuapp.com/",
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
          <div>
                <h2>Projects</h2><br></br>
                <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
