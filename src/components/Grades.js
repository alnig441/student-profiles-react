export default function Grades(props) {
  let grades = props.grades;

  return(
    <>
      <table>
          {grades && grades.map((grade, index) => {
              if(grade) {
                return (
                  <>
                    <tr>
                      <td>Test {index + 1}</td>
                      <td>{grade}%</td>
                    </tr>
                  </>
                )
              }
          })}
      </table>
    </>
  )

}
