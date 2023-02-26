import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";
import certificate from "../assets/images/certificate.gif";
import project from "../assets/images/project.gif";
import notes from "../assets/images/notes.gif";
import html from "../assets/images/html.gif";
import css from "../assets/images/css.gif";
import github from "../assets/images/github.gif";
import bootstrap from "../assets/images/bootstrap.png";
import javascript from "../assets/images/javascript.gif";
import arya from "../assets/images/ARYA_SAH.png";
import ayush from "../assets/images/AYUSH_PRATAP_SINGH.png";
import rishav from "../assets/images/RISHAV_JHA.png";
import debjit from "../assets/images/DEBJIT_SHARMA.png";
import aishika from "../assets/images/AISHIKA_MIDDER.png";
import tanmay from "../assets/images/TANMAY_MONDAL.png";


import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();



function LearnMore() {
  const mentors = [
    {
      name: "Ayush Pratap Singh ",
      img: ayush,
      li: 'https://www.linkedin.com/in/apsingh1843/' ,
      git: 'https://github.com/apsingh1843',
    },
    {
      name: "Aishika Midder ",
      img: aishika,
      li: 'https://www.linkedin.com/in/aishika-midder-05/' ,
      git: 'https://github.com/aishikamidder05',
    },
    {
      name: "Tanmay Mondal",
      img: tanmay,
      li: 'https://www.linkedin.com/in/tanmay-mondal-4180581a7/' ,
      git: 'https://github.com/10mayje',
    }
  ]
  const coordinators = [
    {
      name: "Arya Sah",
      img: arya,
      li: 'https://www.linkedin.com/in/arya-sah-5100121b3/',
      git: 'https://github.com/Aryasah',
    },
	{
	  name: "Rishav Jha",
	  img: rishav,
    li: 'https://www.linkedin.com/in/rishav-jha-549b45203/',
    git: 'https://github.com/rishav-jha-mech'
	},
    {
      name: "Debjit Sharma",
      img: debjit,
      li: 'https://www.linkedin.com/in/debjit-sharma-7a8471209/',
      git: 'https://github.com/debjitsharma'
    },
  ];
  return (
    <>
      <div className="learn container pb-5">
      <div data-aos="fade-up">
        <div id="desc" className="description">
          <h2 className="pb-3">Description</h2>
          <p className="descTxt pb-3">
          Join our Dev Workshop led by our Web, Design and Creative Team, CCA and learn the latest web technologies, frameworks and best practices to build responsive and dynamic websites that stand out from the crowd. Gain hands-on experience through practical exercises, real-world projects and personalized guidance from experts.
          </p>
        </div>
        <div className="details">
          <div className="day">
            <p className="descTxtday pe-5">Day1: </p>
            <p>
              Learn Basic Tools, effects and special features. Create characters
              of your own and a simple background.
            </p>
          </div>
          <div className="day">
            <p className="descTxtday pe-5">Day2: </p>
            <p>Learn how to animate a simple character in After Effects.</p>
          </div>
        </div>
        </div>

        <div data-aos="zoom-in-up">
        <div id="tech-stack" className="tech-stack pt-5 pb-5">
          <h2>Tech-Stacks</h2>
        </div>
        <Row className="cards-stack">
          <div className='col-lg-2 my-1'>
            <Card className="card card-html">
              <Card.Img
                variant="top"
                className="html"
                src={html}
              />
              <Card.Body>
                <Card.Title align="center">HTML</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-2 my-1'>
            <Card className="card card-css">
              <Card.Img className="css" variant="top" src={css} />
              <Card.Body>
                <Card.Title align="center">CSS</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-2 my-1'>
            <Card className="card card-bootstrap">
              <Card.Img
                variant="top"
                className="bootstrap"
                src={bootstrap}
              />
              <Card.Body>
                <Card.Title align="center">Bootstrap</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-2 my-1'>
            <Card className="card card-github">
              <Card.Img
                variant="top"
                className="github"
                src={github}
              />
              <Card.Body>
                <Card.Title align="center">Git-Github</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-2 my-1'>
            <Card className="card card-javascript">
              <Card.Img
                variant="top"
                className="javascript"
                src={javascript}
              />
              <Card.Body>
                <Card.Title align="center">JavaScript</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </Row>
        </div>

        <div data-aos="zoom-in-up">
        <div className="description py-5">
          <h2 className="pb-3">What’s in for you</h2>
          <p>
            Apart from learning the basics of design theory, you get to know
            more about WDCT, CCA. Every participant will be awarded with a
            certificate, the work of the best performers will be featured in
            WDCT Corner and the performers would stand an advantage in the
            auditions!
          </p>
        </div>
        <Row className="">
          <div className='col-lg-4 my-1'>
            <Card className="card">
              <Card.Img
                variant="top"
                className="certificate"
                src={certificate}
              />
              <Card.Body>
                <Card.Title align="center">Certificate</Card.Title>
                <Card.Text align="center">
                Recognized proof of completion for all the participants
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4 my-1'>
            <Card className="card">
              <Card.Img className="project" variant="top" src={project} />
              <Card.Body>
                <Card.Title align="center">Real-World Projects</Card.Title>
                <Card.Text align="center">
                Demonstrated project-based experience that can be added to your CV.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4 my-1'>
            <Card className="card">
              <Card.Img
                variant="top"
                className="notes"
                src={notes}
              />
              <Card.Body>
                <Card.Title align="center">Study Material</Card.Title>
                <Card.Text align="center">
                Access to valuable learning and well-curated resources.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Row>
        </div>

        <div data-aos="zoom-in-down">
        <div id="coordinator" className="description pt-5 pb-5">
          <h2>Mentors</h2>
        </div>
        <Row>
          {mentors.map((mentors) => {
            return (
              <Col sm={4}>
                <Card className="coordinatorCard pb-2">
                  <Card.Img
                    variant="top"
                    className="coordinatorImg"
                    src={mentors?.img}
                  />
                  <Card.Body>
                    <Card.Title align="center" className="coordinatorName">
                      {mentors?.name}
                    </Card.Title>
                    <Card.Text align="center">
                     {mentors?.name == "Ayush Pratap Singh " ? "Head" : "Executive Member"}
                      <br />
                      WDCT,CCA
                    </Card.Text>
                    <Card.Title align="center">
                      <h4>
                        {
                          <a href={mentors?.li} class="fa-brands mx-1 fa-linkedin" target="_blank" rel="noopener noreferrer" />
                        }
                        {
                          <a href={mentors?.git} class="fa-brands mx-1 fa-github" target="_blank" rel="noopener noreferrer" />
                        }
                      </h4>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        </div>

        <div data-aos="zoom-in-down">
        <div id="coordinator" className="description pt-5 pb-5">
          <h2>Coordinators</h2>
        </div>
        <Row>
          {coordinators.map((coordinator) => {
            return (
              <Col sm={4}>
                <Card className="coordinatorCard pb-2">
                  <Card.Img
                    variant="top"
                    className="coordinatorImg"
                    src={coordinator?.img}
                  />
                  <Card.Body>
                    <Card.Title align="center" className="coordinatorName">
                      {coordinator?.name}
                    </Card.Title>
                    <Card.Text align="center">
                      Senior member
                      <br />
                      WDCT,CCA
                    </Card.Text>
                    <Card.Title align="center">
                      <h4>
                        {
                          <a href={coordinator?.li} class="fa-brands mx-1 fa-linkedin" target="_blank" rel="noopener noreferrer" />
                        }
                        {
                          <a href={coordinator?.git} class="fa-brands mx-1 fa-github" target="_blank" rel="noopener noreferrer" />
                        }
                      </h4>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        </div>
        <div className="my-5"></div>
      </div>
    </>
  );
}

export default LearnMore;
