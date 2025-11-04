import StatisticsLine from "./StatisticsLine";

const Statistics = (props) => {
  if (props.all === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine label="Good" value={props.good} />
          <StatisticsLine label="Neutral" value={props.neutral} />
          <StatisticsLine label="Bad" value={props.bad} />
          <StatisticsLine label="All" value={props.all} />
          <StatisticsLine label="Average" value={props.average} />
          <StatisticsLine label="Positive" value={`${props.positive} %`} />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
