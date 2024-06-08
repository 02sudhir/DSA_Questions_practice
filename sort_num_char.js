let myarr = [1, 'ss', 11, 2, 'aa'];
function compareNumbers(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }
  if (typeof a === 'number' && typeof b === 'string') {
    return -1;
  }
  if (typeof a === 'string' && typeof b === 'number') {
    return 1;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    if (a < b) return -1;
    else return 1;
  }
  return 0;
}
myarr.sort(compareNumbers);
console.log(myarr);
