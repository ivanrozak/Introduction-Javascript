const getmonth = (callback) => {
    setTimeout(()=>{
        let error = true;
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 'September', 'October', 'November', 'Desember']
        if(!error){
            callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000)
}

let showMonth = (kondisi, month) => {
    if (kondisi) { 
        return console.log(kondisi)
    } else {
        return month.map((item)=> console.log(item))
    }
}

getmonth(showMonth)