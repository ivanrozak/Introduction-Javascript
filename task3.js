const printSegitiga = 5

if (isNaN (printSegitiga)){
  console.log('Data harus number')
} else {
  for(let i = 1; i<= printSegitiga; i++){
    let hasil = ''
    for(let j = 1; j<= (printSegitiga - i + 1); j++){
      hasil = hasil + j
    }
    console.log(hasil)
  }
}


