// given two arrays given function should merge the arrays.

const mergeTwoArrays = (arr1,arr2) => console.log(arr1.concat(arr2));

mergeTwoArrays([1,2,3],[2,3,5]);

// for n number of arrays

const arrayMerger = (...arrays)=> console.log(arrays.flat());

arrayMerger([1,2,3],[2,4,2],[2,7,2]);