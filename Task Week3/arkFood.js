const arkFood = (harga, voucher, jarak, pajak) => {
    //menentukan potongan harga
    if(voucher = 'ARKFOOD5'){
        if(harga >= 50000){
            potongan = harga / 2;
            if(potongan >= 50000){
                potongan = 50000;
            }else{
                potongan = potongan;
            }
        } else {
            potongan = 0;
        }
    }else if(voucher = 'DITRAKTIRDEMY'){
        if(harga >= 25000){
            potongan = harga * 60 / 100;
            if(potongan >= 30.000){
                potongan = 30.000;
            }else{
                potongan = potongan
            }
        }else{
            potongan = 0;
        }
    }else{
        potongan = 0;
    }
    //menentukan biaya antar
    if(jarak <=2){
        biayaAntar = 5000;
    }else{
        biayaAntar = 5000 + (jarak-2)*3000
    }
    //menetukan pajak
    if(pajak == true){
        pajak = harga * 5/100
    }else{
        pajak = 0
    }
    //menentukan sub total
    subTotal = harga - potongan + biayaAntar + pajak;
    //output hasil
    console.log(`Harga       : ${harga}`)
    console.log(`Potongan    : ${potongan}`)
    console.log(`Biaya Antar : ${biayaAntar}`)
    console.log(`Pajak       : ${pajak}`)
    console.log(`Sub Total   : ${subTotal}`)
}

arkFood(75000, 'ARKFOOD5', 5, true)