/* Compare two arrays and return a new array with any items only found in one of the two given arrays,
 but not both. In other words, return the symmetric difference of the two arrays. */

function diffArray(arr1, arr2) {
    let joinedOrderedArray = arr1.concat(arr2).sort();

    let newArr = [];
    for (var i = 0; i < joinedOrderedArray.length - 1; i++) {
      if (joinedOrderedArray[i + 1] !== joinedOrderedArray[i]) {
        newArr.push(joinedOrderedArray[i]);
      }
      //Works for say array[0] but then fails on array[1], not going to work like this
  }   
    return newArr;
}
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  /*Pseudo Code
  function(input = array, array that has some similar elements)
    arr0.filter(keep if arr[0][0] not match any from arr1)

- Thought of another idea, could merge the arrays and then push elements that don't have duplicates?