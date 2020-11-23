let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
        {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
        },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

//soal a. merubah data dengan spread operator
data = {...data, name: 'ivan rozak', email: 'ivanrozack@gmail.com', hobby: 'programming'}

console.log(data)

//soal b. Ambilah data “street dan city” tersebut menggunakan destructuring
const {street, city} = data.address
console.log(`street = ${street} city = ${city}`)