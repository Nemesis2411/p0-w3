function targetTerdekat(arr) {
    
    var temp1 = ''
    for (var i = 0;i<arr.length;i++){
        for (var j = 0;j<arr.length;j++){
        temp1+=arr[j]
        if (arr[j]==='o'){
            console.log(temp1.length)
            temp1 = '';
        }else if(arr[i]==='x'){
            temp1+=arr[i]
            console.log(temp1.length+'===')
        }
    }
  }
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
//   console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
//   console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
//   console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
//   console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2