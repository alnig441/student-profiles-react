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
            return (
              <>
                <div id={student.id} className="grid-container">
                  <div className="grid-item picture">
                    <img src={student.pic} alt="student profile" />
                  </div>
                  <div className="grid-item details" key={"grades" + index}>
                    <Details student={student} />
                  </div>
                  <div className="grid-item collapsible" onClick={props.onClick}>
                    <span id="expand" hidden >-</span>
                    <span id="collapse" >+</span>
                  </div>
                  <div className="grid-item empty grades" ></div>
                  <div className="grid-item grades" >
                    <Grades grades={grades} />
                  </div>
                  <div className="grid-item empty grades" ></div>
                  <div className="grid-item empty"></div>
                  <div id={"tags" + student.id} className="grid-item tags">
                    <div>
                      <Tags tags={tags} />
                    </div>
                    <AddTag onSubmit={props.onSubmit} id={index} />
                  </div>
                  <div className="grid-item empty"></div>
                </div>
              </>
            )
        })}
      </>
    )
}
