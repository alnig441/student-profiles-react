import React from 'react';
import './App.css';
import { API } from './app-modules/api';
import { Student } from './components/Student.js';
import { SearchBar } from './components/SearchBar.js';

let students;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      students : [],
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
      const grades = parentNode.nextSibling.nextSibling;
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
    this.setState({ students: students })
    e.target.lastChild.value = "";
  }

  search(e) {
    e.preventDefault();
    console.log('e key ', e.key, e.code)
    if(e.key) {
      console.log('what ', e.target.value)
    }
  }

  render() {
    return(
      <>
        <div id="header">
        <SearchBar id="search_by_name" placeHolder="Search by name" onKeyUp={this.search} pattern="[a-zA-Z0-9]+"/>
        <SearchBar id="search_by_tag" placeHolder="Search by tag" onKeyUp={this.search} pattern="[a-zA-Z0-9]+"/>
        </div>
        <Student students={this.state.students} onClick={this.toggleGrades} onSubmit={this.addTag}/>
      </>
    )
  }
}

export default App;
