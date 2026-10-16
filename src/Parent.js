import Student from "./Student";

function Child(props) {
    //<div className="student">
  return <Student student={props.student} />;
  //</div>
}

export default Child;