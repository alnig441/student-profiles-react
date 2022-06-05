import { UTIL } from './utilities';

export const API = function(){

  async function get() {
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
    return population;
  }

  return { getStudents : get }
}()
