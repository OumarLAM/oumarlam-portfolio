import { Link } from "react-router-dom";
import LogoTitle2 from "../../assets/images/logo-s2.png";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const name = ["a", "m", "d", "e", "v"];
  const job = [
    "A",
    "n",
    " ",
    "I",
    "T",
    " ",
    "E",
    "n",
    "t",
    "h",
    "u",
    "s",
    "i",
    "a",
    "s",
    "t",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>&apos;m</span>
          <img src={LogoTitle2} alt="Developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={name}
            index={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={job}
            index={20}
          />
        </h1>
        <h2>Problem Solver | Eternal Learner | Full Stack Developer </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
