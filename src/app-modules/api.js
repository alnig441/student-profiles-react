import { UTIL } from './utilities';
import {localStore} from './localStore';

export const API = function(){

  const students = localStore.getStudents();

  async function get() {

  if(students) {
    return students;
  }
  else {
   const url = 'https://api.hatchways.io/assessment/students';
   const response = await fetch( url );
   const data = await response.json();
   let population = data.students;

   for(var student in population){
     if(population[student]) {
       population[student].tags = [];
       population[student].average = UTIL.getAverage(population[student].grades);
     }
   }
   localStore.setStudents(population)
   return population;
   }
  }

  return { getStudents : get }
}()
