// imported components:
import Footbox from '@root/components/Footbox/Footbox.jsx';
import Timer from '@root/components/Timer/Timer.jsx';

// imported modules:
import generateProblem from '@root/modules/generateProblem';
import answerEvent from '@root/modules/answerEvent';

import '../Arith.css';

// imported hooks:
import { useState, useRef } from 'react';

/*
    ArithLevel1 component

    `setLevelEvent` prop (state) is passed from AlphaLit view
      - if true, renders a <LevelUp /> component to display from AlphaLit view
*/
export default function ArithLevel1({ setLevelEvent }) {
  const problemHistory = useRef([]); // to store problem history
  const [correctTally, setCorrectTally] = useState(0); // total correct tally
  const [problemSet, setProblemSet] = useState(1); // question problem set

  // `problem` object sets `question` & `answer` properties depending on the subject ("math") & state (the problemSet)
  const problem = generateProblem('math', problemSet, problemHistory); // generate a unique problem

  return (
    <div id="mathWrapper">
      <div id="mathQABundle">
        <p id="mathQ">{problem.question}</p>
        <input
          id="mathAns"
          type="text"
          onKeyDown={event => {
            // listen for enter keydown
            if (event.key === 'Enter') {
              // set the value of the user's answer
              let inputValue = parseInt(event.target.value); // math answers must be parsed to int
              event.target.value = ''; // clears the input box

              // module answerEvent.js
              answerEvent(
                inputValue, // the user's given answer
                problem.answer, // the correct answer
                correctTally, // total correct tally (state)
                setCorrectTally, // to set total correct tally (set state)
                problemSet, // current problem set (state)
                setProblemSet, // to increment the problem set (state) if correct >= 20
                setLevelEvent // to set a level up event and display `LevelUp` component on rerender (set state)
              );
            }
          }}
        />
      </div>
      <Timer />
      <Footbox correct={correctTally} style={'mathFill'} />
    </div>
  );
}