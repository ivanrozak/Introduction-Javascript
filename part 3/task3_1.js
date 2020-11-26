// Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1

const luasPersegiPanjang = (panjang, lebar) => {
    return new Promise((resolve, reject) => {
        if (typeof panjang === 'number' && typeof lebar === 'number') {
            resolve(panjang * lebar)
        } else {
            reject(new Error('data harus berupa number'))
        }
    })
    .then((hasil) => {
        console.log(`Luas Persegi Panjang = ${hasil}`)
    }).catch((error) => {
        console.log(error)
    })
}

luasPersegiPanjang(5, 2)