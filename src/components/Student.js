import Details from './Details.js';
import Grades from './Grades.js';
import Tags from './Tags.js';
import AddTag from './AddTag.js';

export function Student(props) {
  const {students, onClick, onSubmit} = props;
    return (
      <>
        {students && students.map((student, index) => {
          let {grades, tags, id, pic, email} = student
            return (
              <>
                <div id={id} className="grid-container" >
                  <div className="grid-item picture">
                    <img src={pic} alt="student profile" />
                  </div>
                  <div className="grid-item details" key={"grades" + index}>
                    <Details student={student} />
                  </div>
                  <div className="grid-item collapsible" onClick={onClick}>
                    <span id="expand" hidden >-</span>
                    <span id="collapse" >+</span>
                  </div>
                  <div className="grid-item empty grades" ></div>
                  <div className="grid-item grades" >
                    <Grades grades={grades} />
                  </div>
                  <div className="grid-item empty grades" ></div>
                  <div className="grid-item empty"></div>
                  <div className="grid-item tags">
                    <div >
                      <Tags tags={tags} />
                    </div>
                    <AddTag onSubmit={onSubmit} id={email} />
                  </div>
                  <div className="grid-item empty"></div>
                </div>
              </>
            )
        })}
      </>
    )
}
