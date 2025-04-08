import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  );
};
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allfeedback, setAllFeedback] = useState(0);

  useEffect(() => {
    setAllFeedback(good + neutral + bad);
  }, [good, neutral, bad]);

  return (
    <>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />
      {/* <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button> */}
      <br />
      <h1>Statistics</h1>
      {/* <p>good: {good} </p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p> */}
      <Statistics
        allfeedback={allfeedback}
        goodPercentage={good}
        good={good}
        bad={bad}
        neutral={neutral}
      />
    </>
  );
}

export default App;

const Statistics = ({ allfeedback, goodPercentage, good, bad, neutral }) => {
  if (allfeedback === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <tr>
            <td>All :</td>
            <td>{allfeedback}</td>
          </tr>
          <tr>
            <td>Average : </td>
            <td>{allfeedback / 3}</td>
          </tr>
          <tr>
            <td>Positive :</td>
            <td>{(goodPercentage / allfeedback) * 100}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
