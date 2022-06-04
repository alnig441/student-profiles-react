export const UTIL = function(){

  function getAverage(grades) {
    const total = 0;
    const sumTotal = grades.reduce(
      (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue),
      total
    );
    return sumTotal/grades.length;
  }

  function isMatch(filter, tagArray, ...name) {
    if(name.length > 0) {
      name.push(name.toString());
    }
    let result = false;
    let value = '';
    let actual = tagArray.length > 0 ? tagArray : name;

    for(var i = 0 ; i < actual.length ; i++) {

      value = actual[i];
      if (filter.toLowerCase() === value.slice(0, filter.length).toLowerCase()) {
        result = true;
      }
    }

    return result;
  }

  return { getAverage: getAverage, isMatch: isMatch }
}()
