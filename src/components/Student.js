import Details from './Details.js';
import Grades from './Grades.js';
import Tags from './Tags.js';
import AddTag from './AddTag.js';

export function Student(props) {
  const students = props.students;

    return (
      <>
        {students && students.map((student, index) => {
          let {grades, tags} = student
          if(student) {
            return (
              <>
                <div id={student.id} className="grid-container" key={"student" + student.id} >
                  <div className="grid-item picture">
                    <img src={student.pic} alt="student picture" />
                  </div>
                  <div className="grid-item details">
                    <Details student={student} />
                  </div>
                  <div className="grid-item collapsible" onClick={props.onClick}>
                    <span id="expand" hidden >-</span>
                    <span id="collapse" >+</span>
                  </div>
                  <div className="grid-item empty-left"></div>
                  <div className="grid-item grades" hidden>
                    <Grades grades={grades} />
                  </div>
                  <div className="grid-item empty-right"></div>
                  <div className="grid-item empty-left"></div>
                  <div id={"tags" + student.id} className="grid-item tags">
                    <Tags tags={tags} />
                    <AddTag onSubmit={props.onSubmit} id={index} />
                  </div>
                  <div class="grid-item empty-right"></div>
                </div>
              </>
            )
          }
        })}
      </>
    )
}
