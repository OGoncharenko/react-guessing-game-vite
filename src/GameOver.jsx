import Button from "./Button";
import PropTypes from 'prop-types';

function GameOver({ hasWon, onReset }) {
  return (
    <div>
      {hasWon && <h2>Congratulation! You guessed my number.</h2>}
      {!hasWon && (
        <h2>You did not guess my number. Would you like to try again?</h2>
      )}
      <Button onClick={onReset}>Play Again!</Button>
    </div>
  );
}

GameOver.propTypes = {
  hasWon: PropTypes.bool.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default GameOver;
