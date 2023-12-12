import PropTypes from 'prop-types'
import "./index.scss";

const AnimatedLetters = ({ letterClass, strArray, index }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + index} className={`${letterClass} _${i}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

// Define PropTypes for my AnimatedLetters component props
AnimatedLetters.propTypes = {
    letterClass: PropTypes.string.isRequired,
    strArray: PropTypes.arrayOf(PropTypes.string).isRequired,
    index: PropTypes.number.isRequired,
}

export default AnimatedLetters;
