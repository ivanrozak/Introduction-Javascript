const name = [
    'Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirde', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'
]
function searchName(a, b, callback){
    callback(a,b)   
}
function filterString(a,b){
    result = name.filter(x => x.includes(a) || x.includes(a.toLowerCase()))
    result = result.splice(0, b)
    console.log(result)
}

searchName('An', 3, filterString)

