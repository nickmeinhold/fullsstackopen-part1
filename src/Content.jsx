import Part from "./Part";

const Content = (props) => {
  return (
    <>
      <Part name={props.part1} exercises={props.exercises1}></Part>
      <Part name={props.part2} exercises={props.exercises2}></Part>
      <Part name={props.part2} exercises={props.exercises2}></Part>
    </>
  );
};

export default Content;
