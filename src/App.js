import React from 'react';
import './App.css';
import { API } from './app-modules/api';
import { UTIL } from './app-modules/utilities';
// import { INIT } from './app-modules/initialize';
import { localStore } from './app-modules/localStore';
import { Student } from './components/Student.js';
import { SearchBar } from './components/SearchBar.js';

let students;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      students : [],
      name_search: '',
      tag_search: ''
    };
    this.toggleGrades = this.toggleGrades.bind(this);
    this.addTag = this.addTag.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    API.getStudents().then( res => {
      this.setState({ students : res });
      students = res;
    })
  }

  toggleGrades(e) {
    e.preventDefault();
    const parentNode = e.target.parentNode;
    if(parentNode.attributes["class"].value === 'grid-item collapsible') {
      const grades = parentNode.nextSibling.nextSibling.children[0];
      const expand = parentNode.childNodes[0];
      const collapse = parentNode.childNodes[1];
      grades.toggleAttribute("hidden");
      expand.toggleAttribute("hidden");
      collapse.toggleAttribute("hidden");
    }
  }

  addTag(e) {
    e.preventDefault();
    let id = parseInt(e.target.attributes["data-id"].value);
    let tag = e.target.lastChild.value;
    students[id].tags.push(tag);
    this.setState({ students: students });
    localStore.setStudents(students);
    e.target.lastChild.value = "";
  }

  search(e) {
    e.preventDefault();
    let key = e.key.toLowerCase();
    const type = e.target.attributes["id"].value;
    this.setState({ [type] : e.target.value })

    if(key.length === 1) {
      let search = UTIL.isMatch(e.target.value.toLowerCase(), type, students, this.state.name_search, this.state.tag_search);
      this.setState({ students: search });
    }

    if(key === "backspace") {
      let search = UTIL.isMatch(e.target.value.toLowerCase(), type, students, this.state.name_search, this.state.tag_search);
      this.setState({ students: search });
    }

  }

  render() {
    return(
      <>
        <div id="header">
        <SearchBar id="search_by_name" search="name_search" placeholder="Search by name" onKeyUp={this.search} pattern="[a-zA-Z0-9]+"/>
        <SearchBar id="search_by_tag" search="tag_search" placeholder="Search by tag" onKeyUp={this.search} pattern="[a-zA-Z0-9]+"/>
        </div>
        <Student students={this.state.students} onClick={this.toggleGrades} onSubmit={this.addTag}/>
      </>
    )
  }
}

export default App;
