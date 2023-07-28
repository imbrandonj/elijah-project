/*
  answerEvent.js

  An answer event module
  This module is used between MathPath, LitPath, and LogicPath components

  The answer event checks for correct input, if correct...
    1) Increment the correct tally
    2) If tally is 20 (standard problem set length), increment to the next problem set
    3) Triggers a level event after every third problem set 
*/

export default function answerEvent(
  inputValue, // the user's given answer
  answer, // the correct answer
  totalQuestions, // question count
  correctTally, // total correct tally (state)
  setCorrectTally, // to set total correct tally (state)
  setLevelEvent // to set a level up event and display `LevelUp` component on rerender
) {
  // correct user input:
  if (inputValue === answer) {
    console.log('correct');
    setCorrectTally(correctTally + 1); // increment total correct tally (state)
    // note:
    // correctTally does not increment until page re-render
    // thus, correctTally must be checked when correctTally == 19 & input is correct
    if (correctTally === totalQuestions) {
      setLevelEvent(true);
    }
  } // incorrect user input:
  else {
    console.log('try again');
    console.log(`Correct answer: ${answer}`);
    console.log(`Your given answer (inputValue): ${inputValue}`);
  }
}
