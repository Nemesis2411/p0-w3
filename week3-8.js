function pasanganTerbesar(num) {
    var angka = num.toString()
    var temp = '';
    var pembanding = 0
    for (var i = 0;i<angka.length;i++){
        temp+=angka[i]+angka[i+1]
        if (pembanding < Number(temp)){
            pembanding = Number(temp)
        }
        // console.log(temp)
        temp = ''
    }
    return pembanding
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99