function mengelompokkanAngka(arr) {
  // you can only write your code here!
  var temp1=[]
  var temp2=[]
  var temp3 =[]
  var result=[]
  for (var i = 0 ; i < arr.length; i++){
    // console.log(arr[i])
    if ((arr[i]%2!==1)&&(arr[i]%3!==0)){
      temp1.push (arr[i])     
    }
  }   
  result.push(temp1)
  for (var j = 0;j<arr.length;j++){
          if ((arr[j]%2===1)&&(arr[j]%3!==0)){
            temp2.push(arr[j])
          }
        }
        result.push(temp2)
        for (var k = 0;k<arr.length;k++){
          if (arr[k]%3===0){
            temp3.push(arr[k])
          }
        }
        result.push(temp3)
  return result
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]