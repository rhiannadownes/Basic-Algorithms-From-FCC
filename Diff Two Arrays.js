/* Compare two arrays and return a new array with any items only found in one of the two given arrays,
 but not both. In other words, return the symmetric difference of the two arrays. */

function diffArray(arr1, arr2) {
<<<<<<< HEAD
    let newArr = [];

    arr1.filter(function check = (x) {
      if (x !== arr2.map()) {
        newArr.push(x);
      }
    })

  }   
=======
    var newArr = [];
    arr1.filter()
>>>>>>> parent of a2cb434... Test Join and Order
    return newArr;
}
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  /*Pseudo Code
  function(input = array, array that has some similar elements)
    arr0.filter(keep if arr[0][0] not match any from arr1)
