function seleksiNilai(a, b, array){
    if (a>b){
        console.log('Nilai akhir harus lebih besar dari nilai awal')
    } else {
        result = array.filter(x => x > a && x < b)
        if(result.length < 1){
            console.log('Jumlah angka dalam dataArray tidak ada')
        } else {
            console.log(result.sort(
            function(x,y){return x-y}
            ))
        }        
    }    
}

seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])