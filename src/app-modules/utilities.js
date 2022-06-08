export const UTIL = function(){

  function getAverage(grades) {
    const total = 0;
    const sumTotal = grades.reduce(
      (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue),
      total
    );
    return sumTotal/grades.length;
  }

  function setStudentTags(state, students, id, tag) {

    let stateId, populationId, match;

    if(state){
      match = state.filter((student, index) => {
        if(student.email === id) {
          stateId = index;
          student.tags.push(tag);
          return student;
        }
      })
    }

    return {student: match, stateId: stateId}
  }

  function isMatch(key, type, students, ...previousSearch) {
    const previousNameSearch = previousSearch[0];
    const previousTagSearch = previousSearch[1];
    const isNameSearch = (type === 'name_search');
    const isTagSearch = (type === 'tag_search');
    let section;

    let result = [];

    if(isNameSearch && previousTagSearch) {
      section = filter(students, previousTagSearch, 'tag_search');
    }
    else if(isTagSearch && previousNameSearch) {
      section = filter(students, previousNameSearch, 'name_search');
    }

    if((isNameSearch && !previousTagSearch) || (isTagSearch && !previousNameSearch)) {
      section = students;
    }

    result = filter(section, key, type)

    return result;

  }

  function filter(students, term, type) {
    let result = [];
    const end = term.length;


    if(type === "tag_search") {
      // eslint-disable-next-line
      result = students.filter((student) => {
        const tags = student.tags;

        if(tags.length > 0 && term.length > 0) {
          for(const tag of tags) {
            if((tag.slice(0,end).toLowerCase()) === term && term.length > 0) {
              return student;
            }
          }
        }

      })
    }

    if(type === "name_search") {
      // eslint-disable-next-line
      result = students.filter((student) => {
        const first = student.firstName.toLowerCase();
        const last = student.lastName.toLowerCase();

        if(first.slice(0,end) === term || last.slice(0,end) === term) {
          return student;
        }

      })
    }

    if(result.length > 0) {
      return result;
    } else {
      return students;
    }

  }

  return { getAverage: getAverage, isMatch: isMatch , setTags: setStudentTags}
}()
