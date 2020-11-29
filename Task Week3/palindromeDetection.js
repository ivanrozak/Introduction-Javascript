const deteksiPalindrome = (teks) =>{
    if(typeof(teks) !== "string"){
        console.log("Input Salah !")
    } else {
        teks = teks.toLowerCase()
        let hasil = ''
        for (let x = teks.length -1; x>=0; x--){
            hasil = hasil + teks[x]
        }
        if(hasil == teks){
            console.log('palindrome')
        }else{
            console.log('bukan palindrome')
        }
    }
}

deteksiPalindrome('Malam')