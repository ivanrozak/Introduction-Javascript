const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa =  80

//validasi nilai
if (isNaN (mtk)){
    console.log('nilai matematika salah, periksa kembali !')
} else if (isNaN (bahasaIndonesia)){
    console.log('nilai Bahasa Indonesia salah, periksa kembali !')
} else if (isNaN (bahasaInggris)){
    console.log('nilai Bahasa Inggris salah, periksa kembali !')
} else if (isNaN (ipa)){
    console.log('nilai IPA salah, periksa kembali !')
} else {
    //menghitung rata-rata nilai
    rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4   
    console.log('Rata-rata = ' + rataRata)

    //menentukan grade dari rata-rata nilai
    if (rataRata >= 90){
        grade = 'A'
    } else if (rataRata >= 80){
        grade = 'B'
    } else if (rataRata >= 70){
        grade = 'C'
    } else if (rataRata >= 60){
        grade = 'D'
    } else {
        grade = 'E'
    }

    console.log('Grade = ' + grade)
}

