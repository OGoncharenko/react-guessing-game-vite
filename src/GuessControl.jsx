import { useState } from "react";
import PropTypes from 'prop-types';
import Button from "./Button";

const GuessControl = ({ onGuess }) => {
  const [currentGuess, setCurrentGuess] = useState("");

  const handleInputChange = (event) => {
    const newCurrentGuess = event.target.value;
    setCurrentGuess(newCurrentGuess && Number(newCurrentGuess));
  }

  const onSubmitGuess = () => {
    if (currentGuess !== "") {
      onGuess(currentGuess);
      setCurrentGuess("");
    }
  }

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}

GuessControl.propTypes = {
  onGuess: PropTypes.func.isRequired
};

export default GuessControl;
