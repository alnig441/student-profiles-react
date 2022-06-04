export default function Details(props) {
  let student = props.student;

  return(
    <>
      <h1>{student.firstName} {student.lastName}</h1>
      <p>Email: {student.email} </p>
      <p>Company: {student.company}</p>
      <p>Skill: {student.skill}</p>
      <p>Average: {student.average}</p>
    </>
  )
}
