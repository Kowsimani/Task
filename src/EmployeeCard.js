import EmployeeSkills from "./EmployeeSkills";
//import EmployeeCard from "/EmployeeCard"
function EmployeeCard({ employee }) {
  return (
    <center>
    <div className="student">
      <h2>Employee Details</h2>
      <p>Name: {employee.name}</p>
      <p>Role: {employee.role}</p>
      <p>Salary: ₹{employee.salary}</p>

      {/*<EmployeeSkills skills={employee.skills} />*/}
       {employee?.skills && <EmployeeSkills skills={employee.skills} />}
    </div>
    </center>
  );
}

export default EmployeeCard;