function groupAnimals(animals) {
    // you can only write your code here!
    var result = []
    var kamus = 'abcdefghijklmnopqrstuvwxyz'
    for (var i = 0;i<kamus.length;i++){
      var temp1=[]
      for (var j = 0;j<animals.length;j++){
        if (kamus[i]===animals[j][0]){
          temp1.push(animals[j])
        }
      }
      if (temp1.length!==0){
        result.push(temp1)
      }
    }
    return result
}

  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]