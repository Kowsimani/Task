import React, { useState } from "react";
import "./Test1.css";

function Test1() {
  // 1. Object State for form
  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: ""
  });

  // 2. Array of students
  const [students, setStudents] = useState([]);

  // 3. Counter
  const [count, setCount] = useState(0);

  // 4. Theme
  const [dark, setDark] = useState(false);

  // 5. Accordion
  const [showAnswer, setShowAnswer] = useState(false);

  // 6. Modal
  const [deleteIndex, setDeleteIndex] = useState(null);

  // Form handling
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  // Add student
  const addStudent = (e) => {
    e.preventDefault();

    if (student.name && student.age && student.course) {
      setStudents([...students, student]);

      setStudent({
        name: "",
        age: "",
        course: ""
      });
    }
  };

  // Delete student
  const deleteStudent = () => {
    setStudents(
      students.filter((_, index) => index !== deleteIndex)
    );

    setDeleteIndex(null);
  };

  return (
    <center>
    <div className={dark ? "app dark" : "app"}>

      <h1>Student Management App</h1>

      {/* Theme Button */}
      <button onClick={() => setDark(!dark)}>
        {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Student Form */}
      <h2>Add Student</h2>

      <form onSubmit={addStudent}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={student.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={student.age}
          onChange={handleChange}
        />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={student.course}
          onChange={handleChange}
        />

        <button type="submit">Add Student</button>
      </form>

      {/* Student List */}
      <h2>All Students</h2>

      {students.length === 0 ? (
        <p>No students added.</p>
      ) : (
        students.map((s, index) => (
          <div className="student" key={index}>
            <p>
              <b>Name:</b> {s.name}
            </p>

            <p>
              <b>Age:</b> {s.age}
            </p>

            <p>
              <b>Course:</b> {s.course}
            </p>

            <button onClick={() => setDeleteIndex(index)}>
              Delete
            </button>
          </div>
        ))
      )}

      {/* Students 18 or above */}
      <h2>Students 18 or Above</h2>

      {students
        .filter((s) => Number(s.age) >= 18)
        .map((s, index) => (
          <p key={index}>
            {s.name} - {s.age} years
          </p>
        ))}

      {/* Counter */}
      <h2>Counter</h2>

      <h3>{count}</h3>

      <button onClick={() => setCount(count + 1)}>+</button>

      <button onClick={() => setCount(count - 1)}>−</button>

      <button onClick={() => setCount(0)}>Reset</button>

      {/* Accordion */}
      <h2>Accordion</h2>

      <button onClick={() => setShowAnswer(!showAnswer)}>
        What is React?
      </button>

      {showAnswer && (
        <p>
          React is a JavaScript library used to build user interfaces.
        </p>
      )}

      {/* Modal */}
      {deleteIndex !== null && (
        <div className="modal">
          <div className="modal-box">
            <h3>Are you sure?</h3>

            <button onClick={() => setDeleteIndex(null)}>
              Cancel
            </button>

            <button onClick={deleteStudent}>
              Delete
            </button>
          </div>
        </div>
      )}

    </div>
    </center>
  );
}
export default Test1;
