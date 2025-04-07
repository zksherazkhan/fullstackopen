import React from "react";
import { useState } from "react";
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <br />
      <h1>Statistics</h1>
      <p>good: {good} </p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <br />
      <p>All : {good + neutral + bad}</p>
    </>
  );
}

export default App;
