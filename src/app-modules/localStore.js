export const localStore = function() {

  function get() {
    let students = localStorage.getItem("students");
    let result = JSON.parse(students);
    return result;
  }

  function set(value) {
    let obj = JSON.stringify(value);
    localStorage.setItem("students", obj);
    return;
  }

  return { getStudents: get, setStudents: set }

}()
