/* Compare two arrays and return a new array with any items only found in one of the two given arrays,
 but not both. In other words, return the symmetric difference of the two arrays. */

function diffArray(arr1, arr2) {
    let newArr = [];
    let joinedOrderedArray = arr1.concat(arr2).sort();

    joinedOrderedArray.filter(function(a){
      if (joinedOrderedArray.indexOf(a) == joinedOrderedArray.lastIndexOf(a)) {
        newArr.push(a);
      }
      //better solution, in an ordered set the index of a will equal the last index of a if it is a unique value
  });
    return newArr;
}
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  /*Pseudo Code
  function(input = array, array that has some similar elements)
    arr0.filter(keep if arr[0][0] not match any from arr1)
