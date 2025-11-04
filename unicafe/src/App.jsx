import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = all ? (good - bad) / all : 0;
  const positive = all ? (good / all) * 100 : 0;
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button label="Good" onClick={() => setGood(good + 1)} />
      <Button label="Neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button label="Bad" onClick={() => setBad(bad + 1)} />
      <h2>Statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      ></Statistics>
    </div>
  );
};

export default App;
