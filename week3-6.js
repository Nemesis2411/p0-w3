function angkaPalindrome(num) {
    // var angka = (num+1).toString()
    // var temp = ''
    // for (var i = angka.length-1;i>=0;i--){
    //     temp+=angka[i]
    // }
    // if (temp === angka){
    //     return angka
    // }
    for (var i = num+1;true;i++){
        var angka = i.toString()
        var temp = ''
        for (var j = angka.length-1;j>=0;j--){
            temp+=angka[j]
        }
        if (temp === angka){
            return angka
        }  
    }
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001