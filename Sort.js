const lexicographicalSort = (arr1 = [], arr2 = []) => {
    let i, j;
    const res = [];
    outer: for (j = 0; j < arr1.length; j++) {
       for (i = 0; i < arr2.length; i++) {
          if (arr2[i].includes(arr1[j])) {
             res.push(arr1[j]);
             continue outer;
          };
       };
    }
    return res.sort();
 };
 const arr2 = ["Siva", "matrix", "decimal", "binary", "armstrong"];
 const arr1 = ["xyz", "mnop", "low"];
 console.log(lexicographicalSort(arr1, arr2));