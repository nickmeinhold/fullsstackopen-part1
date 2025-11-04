import Part from "./Part";

const Content = (props) => {
  return (
    <>
      <Part
        name={props.parts[0].name}
        exercises={props.parts[0].exercises}
      ></Part>
      <Part
        name={props.parts[1].name}
        exercises={props.parts[1].exercises}
      ></Part>
      <Part
        name={props.parts[2].name}
        exercises={props.parts[2].exercises}
      ></Part>
    </>
  );
};

export default Content;
