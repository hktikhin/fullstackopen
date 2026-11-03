import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good - bad) / all || 0
  const positive = (good / all) * 100 || 0
  if (all === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given yet.</p>
      </div>
    )
  }
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={all} />
          <StatisticsLine text="average" value={average} />
        </tbody>
      </table>
      <p>positive: {positive} %</p>
    </div>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
    <h2>give feedback</h2>
    <button onClick={() => setGood(good + 1)}>good</button>
    <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
    <button onClick={() => setBad(bad + 1)}>bad</button>
    <button onClick={() => {
      setGood(0)
      setNeutral(0)
      setBad(0)
    }}>reset</button>
    <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App