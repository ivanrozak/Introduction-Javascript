const divideAndSort = (value) =>{
    if(typeof(value) == 'number' && Number.isInteger(value)){
        let ubahValue = value.toString().split(0);
        let hasil =''
        for(let i = 0; i < ubahValue.length; i++){
            hasil = hasil + ubahValue[i].split('').sort((a,b) => a-b).join('') 
        }
        console.log(hasil)
    }else{
        console.log('Input Harus Deret Angka & Integer!');
    }
}

divideAndSort(5956560159466056);
// divideAndSort(0.5);