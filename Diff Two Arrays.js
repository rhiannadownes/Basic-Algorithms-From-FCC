/* Compare two arrays and return a new array with any items only found in one of the two given arrays,
 but not both. In other words, return the symmetric difference of the two arrays. */

function diffArray(arr1, arr2) {
    let newArr = [];
    let joinedOrderedArray = arr1.concat(arr2).sort();

    joinedOrderedArray.filter(function(a){
      if (joinedOrderedArray.indexOf(a) == joinedOrderedArray.lastIndexOf(a)) {
        newArr.push(a);
      }
  });
    return newArr;
}
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);