/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let result = 0;
  preferences.unshift(0);
    
  for(let lover = 1; lover < preferences.length; lover++){
      let secondLover = preferences[lover];
      let thirdLover = preferences[secondLover];               
      result += lover == preferences[thirdLover];
  }
  return ((result - result % 3) / 3);
}
 

