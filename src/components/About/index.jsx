import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Loader from 'react-loaders';
import {
  faCss3,
  faGitAlt,
  faGolang,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              index={15}
            />
          </h1>
          <p>
            I am Oumar LAM. I am passionate about software development and
            constantly strive to expand my knowledge and stay up-to-date with
            the latest industry trends.
          </p>
          <p>
            {" "}
            I am a quick learner, adaptable, and enjoy working in a
            collaborative team environment. I am eager to contribute my skills
            and expertise to projects that push the boundaries of technology and
            create meaningful solutions.
          </p>
          <p>
            With a natural curiosity and a quiet confidence, I approach every
            design problem as an opportunity to learn and grow. If I need to
            define my self in one sentence, that would be an eternal learner, a
            sport passionate and tech-obsessed!
          </p>
        </div>

        <div className="stage-cub-container">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5eD4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGolang} color="#28a4d9" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4" />
            </div>
          </div>
        </div>
      </div>
      <Loader type='ball-beat'/>
    </>
  );
};

export default About;
