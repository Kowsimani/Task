function Student({ student }) {
  return (
    <div>
        <center>
            <div className="student">
      <h2>Student Information</h2>
      <p>Name: {student.name}</p>
      <p>Department: {student.department}</p>
      </div>
      </center>
    </div>
  );
}

export default Student;