const reverseWord = (word) =>{
    if(typeof(word) !== "string"){
        console.log('input salah !');
    }else{
        word = word.split(' ');
        newArray = [];
        for(let x = word.length -1; x>=0 ; x--){
            newArray.push(word[x]);
        }
        hasil = newArray.join(" ");
        console.log(hasil);
    }
}

reverseWord('Saya Belajar Javascript')