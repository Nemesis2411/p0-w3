function balikString(kata) {
    var x = kata.length-1;
    var j = '';  
    
      for (var i = x; i >= 0;i--) {
        j = j + kata[i];
      }
      return j;
    }
    console.log(balikString('hello world!'));
   