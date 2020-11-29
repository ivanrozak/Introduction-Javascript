const cekHariKerja = (day) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if (cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
    .then((hasil) => {
        console.log(`hari ${hasil} adalah hari kerja`)
    }).catch((error) => {
        console.log(error)
    })
}

cekHariKerja('minggu')


// const cekHariKerja = (day) =>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
//             let cek = dataDay.find((item)=>{
//                 return item === day
//             })
//             if (cek){
//                 resolve(cek)
//                 console.log(`hari ${day} adalah hari kerja`)
//             }else{
//                 reject(new Error('Hari ini bukan hari kerja'))
//             }
//         }, 3000)
//     })
// }

// async function hasilAsync(){
//     try {
//         const hasil = await cekHariKerja()
//         console.log(hasil)
//     } catch (error) {
//         console.log(error)
//     }
// }
// cekHariKerja('minggu')


//penggunaan then catch adalah untuk menghandle error pada function yang didalamnya menggunakan promise yang mengandung resolve dan reject.
// .then menangkap nilai resolve pada promise, sedangkan .catch menangkap nilai reject pada promise

//sedangkan try catch hampir sama tapi digunakan untuk async await
// try juga menangkap nilai resolve pada promise, sedangkan catch menangkap nilai reject pada promise