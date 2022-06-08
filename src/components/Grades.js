export default function Grades(props) {
  let {grades} = props;
  return(
    <>
      <table hidden>
        <tbody>
          {grades && grades.map((grade, index) => {
              return (
                <>
                  <tr >
                    <td >Test {index + 1}</td>
                    <td >{grade}%</td>
                  </tr>
                </>
              )
          })}
        </tbody>
      </table>
    </>
  )

}
