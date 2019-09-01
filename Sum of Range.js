/* We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first. */

function sumAll(arr) {
  let integerList = [];
  if (arr[0] < arr[1]) {
    for(let i = arr[0]; i <= arr[1]; i++) {
      integerList.push(i);
    }
  }
  else if (arr[0] > arr[1]) {
    for(let i = arr[0]; i >= arr[1]; i--) {
      integerList.push(i);
    }
  }
    return integerList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  sumAll([1, 4]);
