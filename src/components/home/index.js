import React, { useEffect, useRef } from "react";
import { Card, Button, Media, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import debounce from "../../constants/debounce";
import ProgramPic from "../../resources/ipadframe1.png";
import Dancer_1 from "../../resources/dancer_f_1.png";
import Dancer_2 from "../../resources/dancer_f_2.png";
import Comments from "../../constants/comments";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  const techList = ["pencil-alt", "layer-group", "cloud-download-alt", "cube"];
  const techCards = techList.map((icon, id) => {
    return (
      <div key={`point_${id}`} className="col-12 col-sm-6 col-lg-3 my-4">
        <div className="flex-col center">
          <FontAwesomeIcon className="text-white display-4" icon={icon} />
          <hr className="bg-white w-75" />
          <p className="text-white w-75 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
      </div>
    );
  });

  const featureList = ["Limitless Poses", "3d Models", "References"];
  const poseList = ["Pic2pose", "Face Tracking", "Video"];

  const createCards = arr => {
    const result = arr.map((pt, id) => {
      return (
        <div key={`sellPt_${id}`} className="col-12 col-md-4 my-4">
          <div className="flex-col center">
            <h3>{pt}</h3>
            <hr className="w-75 bg-light" />
            <p className="w-75 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>
      );
    });
    return result;
  };

  const bgStyle = {
    background:
      "url('https://images5.alphacoders.com/491/thumb-1920-491120.png')",
    backgroundSize: "cover"
  };

  const commentStyle = {
    background:
      "url('https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?cs=srgb&dl=art-background-blue-370799.jpg&fm=jpg')",
    backgroundSize: "cover"
  };

  const currComment = useRef(0);
  const createComment = () => {
    let result = [];
    for (let i = 0; i <= 1; i++) {
      result.push(
        <div
          key={`comment_${i}`}
          className="col-12 col-lg-6 p-2 fade-in"
          id={`comment_${i}`}
        >
          <Media className="bg-light p-2">
            <img
              width={64}
              height={64}
              className="mr-3"
              src={Comments[currComment.current + i].picture}
              alt="customer"
              id={`commentImg_${i}`}
            />
            <Media.Body>
              <h5 id={`commentTitle_${i}`}>
                {Comments[currComment.current + i].title}
              </h5>
              <p id={`commentBody_${i}`}>
                {Comments[currComment.current + i].comment}
              </p>
            </Media.Body>
          </Media>
        </div>
      );
    }
    return result;
  };

  const changeComment = () => {
    for (let i = 0; i <= 1; i++) {
      setTimeout(() => {
        document.getElementById(`comment_${i}`).className =
          "col-12 col-lg-6 p-2 fade-out";
      }, i * 500);

      setTimeout(() => {
        document.getElementById(`commentImg_${i}`).src =
          Comments[currComment.current + i].picture;
        document.getElementById(`commentTitle_${i}`).innerHTML =
          Comments[currComment.current + i].title;
        document.getElementById(`commentBody_${i}`).innerHTML =
          Comments[currComment.current + i].comment;
        document.getElementById(`comment_${i}`).className =
          "col-12 col-lg-6 p-2 fade-in";
      }, 2000 + i * 500);
    }
  };

  useEffect(() => {
    const commentInterval = setInterval(
      () => {
        currComment.current = (currComment.current + 2) % Comments.length;
        changeComment();
      },
      10000,
      currComment
    );
    return () => clearInterval(commentInterval);
  }, []);

  return (
    <div className="flex-col overflow-hidden">
      <div className="section-100" id="Landing-section">
        <div className="row h-100 no-gutters">
          <div className="col h-100 d-none d-md-flex center overflow-hidden">
            <img
              className="h-100"
              src="https://uploads.codesandbox.io/uploads/user/9bf5a9bd-541f-471d-bbc2-96b4e4ddf464/cWQN-running_man.png"
              alt="pic"
            />
          </div>
          <div className="col flex-col center">
            <Card className="w-75 mt-3" style={{ maxWidth: "600px" }}>
              <Card.Body>
                <Card.Title>
                  <h2 className="text-center">Art Program</h2>
                </Card.Title>
                <Card.Subtitle>
                  <p className="text-center">A digital arts tool</p>
                </Card.Subtitle>
                <hr />
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </Card.Text>
                <div className="row">
                  <div className="col-6 d-flex center w-100">
                    <Button className="m-2 btn btn-info w-100">
                      <a
                        href="#Reasons-section"
                        className="text-decoration-none text-white"
                      >
                        About
                      </a>
                    </Button>
                  </div>
                  <div className="col-6 d-flex center w-100">
                    <Button className="m-2 btn btn-info w-100">
                      <a
                        href="https://6ntnx.csb.app"
                        className="text-decoration-none text-white"
                      >
                        Try
                      </a>
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <div className="mt-3">
              <FontAwesomeIcon
                className="mx-2 display-4 text-info"
                icon={["fab", "google"]}
              />
              <FontAwesomeIcon
                className="mx-2 display-4 text-info"
                icon={["fab", "facebook"]}
              />
              <FontAwesomeIcon
                className="mx-2 display-4 text-info"
                icon={["fab", "twitter"]}
              />
              <FontAwesomeIcon
                className="mx-2 display-4 text-info"
                icon={["fab", "instagram"]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section-75" id="Reasons-section">
        <div className="row h-100 no-gutters bg-light">
          <div className="col-12 col-md-6 d-none d-md-flex center overflow-hidden p-3">
            <div data-aos="zoom-out-right" data-aos-duration="2000">
              <img className="max p-5" src={ProgramPic} alt="program pic" />
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex center p-3">
            <Card
              className="w-75"
              data-aos="zoom-out-left"
              data-aos-duration="3000"
            >
              <Card.Body>
                <Card.Title>
                  <h2 className="text-center">Product Information</h2>
                </Card.Title>
                <hr />
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div>
        <div className="row no-gutters px-5 py-5 bg-dark">{techCards}</div>
      </div>

      <div className="section-75" id="Integration-section">
        <div className="row h-100" style={bgStyle}>
          <div className="d-md-flex d-none col-sm-6 center">
            <img
              data-aos="zoom-out-right"
              data-aos-duration="2000"
              src="https://uploads.codesandbox.io/uploads/user/9bf5a9bd-541f-471d-bbc2-96b4e4ddf464/vDgx-onground.png"
              alt="mannequin"
            />
          </div>
          <div className="col-12 col-md-6 d-flex center">
            <Card
              className="w-75 mt-3 bg-dark text-white"
              data-aos="zoom-out-left"
              data-aos-duration="3000"
            >
              <Card.Body>
                <Card.Title>
                  <h2 className="text-center">3D Integration</h2>
                </Card.Title>
                <hr className="bg-white" />
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="row no-gutters bg-dark text-white">
        {createCards(featureList)}
      </div>

      <div className="section-75" id="pose-section">
        <div className="row h-100 w-100 bg-light">
          <div className="d-md-flex d-none col-sm-6 center ">
            <img
              className="position-absolute max m-3"
              src={Dancer_2}
              alt="dancer"
            />
            <img
              className="position-absolute max m-3"
              src={Dancer_1}
              alt="dancer"
              data-aos="zoom-out-left"
              data-aos-duration="2000"
            />
          </div>
          <div className="col-12 col-md-6 d-flex center">
            <Card
              className="w-75 mt-3"
              data-aos="flip-left"
              data-aos-duration="3000"
            >
              <Card.Body>
                <Card.Title>
                  <h2 className="text-center">Pose to Model</h2>
                </Card.Title>
                <hr className="bg-dark" />
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="row no-gutters bg-dark text-white">
        {createCards(poseList)}
      </div>

      <div
        className="flex-col center py-5"
        style={commentStyle}
        id="comment-section"
      >
        <h2 className="text-white">Our Customers Say</h2>
        <hr className="bg-white w-75" />
        <div className="container-fluid">
          <div className="row px-5" id="customerComments">
            {createComment()}
          </div>
        </div>
      </div>

      <div className="section-50 bg-light py-5 flex-col center">
        <h2>Contact Us</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Questions & Comments</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <div className="bg-dark text-white section-25 p-3 flex-col">
        <div className="container">
          <div className="row">
            <h5 className="col text-center">LINKS</h5>
            <h5 className="col text-center">LINKS</h5>
            <h5 className="col text-center">LINKS</h5>
          </div>
          <div className="row">
            <h5 className="col text-center">LINKS</h5>
            <h5 className="col text-center">LINKS</h5>
            <h5 className="col text-center">LINKS</h5>
          </div>
        </div>
        <div className="mt-auto text-center">Copyright Derek Root</div>
      </div>
    </div>
  );
};

export default Home;
