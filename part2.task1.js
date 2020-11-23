//menuliskan 10 built in function method beserta implementasinya

//1. array.filter()
//syntaks
//var newArray = arr.filter(callback[, thisArg])

//fungsi : Fungsi berupa tes untuk mengecek elemen yang ada di dalam array. Kembalikan nilai true untuk meloloskan element, false untuk tidak lolos, dan dapat memiliki tiga argumen

//implementasi 
let array = [2, 25, 4, 14, 17, 30, 8]
a = 1
b = 10
result = array.filter(x => x > a && x < b)

console.log(result)

//2. array.sort()
// arr.sort([compareFunction])
//fungsi : The sort()Metode macam elemen dari array di tempat dan mengembalikan array diurutkan. Urutan pengurutan default adalah ascending, dibuat setelah mengonversi elemen menjadi string, lalu membandingkan urutannya dari nilai unit kode UTF-16.

let array2 = [2, 25, 4, 14, 17, 30, 8]

console.log(array2.sort(
    function(x,y){return x-y}
    ))

//3. array.splice()
//fungsi : Metode splice() mengubah konten dari array dengan menghapus elemen yang ada dan/atau menambah elemen baru.
//syntaks : array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

const name = [
    'Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirde', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'
]

result = name.splice(0, 4)
console.log(result)

//4. array.includes()
//fungsi : The includes()Metode menentukan apakah sebuah array mencakup nilai tertentu antara entri nya, kembali trueatau falseyang sesuai.
//syntaks : arr.includes(valueToFind[, fromIndex])

// [1, 2, 3].includes(2)      // true
// [1, 2, 3].includes(4)      // false
// [1, 2, 3].includes(3, 3)   // false
// [1, 2, 3].includes(3, -1)  // true
// [1, 2, NaN].includes(NaN)  // true

//5. array.pop()
//The pop()Metode menghilangkan terakhir elemen dari array dan kembali elemen. Metode ini mengubah panjang array.
//syntaks : arrName.pop()

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ] 
console.log(popped); // 'sturgeon'

//6. Array.fill()
//The fill()Metode perubahan semua elemen dalam array untuk nilai statis, dari indeks awal (default 0) untuk indeks akhir (default array.length). Ini mengembalikan array yang dimodifikasi.
//arr.fill(value[, start[, end]])

const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

//7. array.findIndex()
//The findIndex()Metode mengembalikan indeks dari elemen pertama dalam array yang memenuhi disediakan pengujian fungsi . Jika tidak, ia akan kembali -1, menunjukkan bahwa tidak ada elemen yang lulus pengujian.
//syntaks : arr.findIndex(callback( element[, index[, array]] )[, thisArg])

const array3 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array3.findIndex(isLargeNumber));
// expected output: 3


//8. 