const kelilingPersegiPanjang = (panjang, lebar) => {
    return new Promise((resolve, reject) => {
        if (typeof panjang === 'number' && typeof lebar === 'number') {
            resolve(keliling = 2 * (panjang + lebar))
            console.log(`Keliling Persegi Panjang = ${keliling}`)
        } else {
            reject(new Error('data harus berupa number'))
        }
    })
}

async function hasilAsync(){
    try {
        const hasil = await luasPersegiPanjang()
        console.log(hasil)
    } catch (error) {
        console.log(error)
    }
}

kelilingPersegiPanjang(5, 2)