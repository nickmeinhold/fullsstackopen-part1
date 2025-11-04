import { useState } from "react";
import Button from "./Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button label="Good" onClick={() => setGood(good + 1)} />
      <Button label="Neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button label="Bad" onClick={() => setBad(bad + 1)} />
      <h2>Statistics</h2>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
    </div>
  );
};

export default App;
