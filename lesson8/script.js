const obj = {
    name: 'Alina',
    age: 23,
    adress: { country: 'UA', city: 'Kyiv' }
}


function cloneObject(obj) {
    let newObj = {}
    for (let key in obj) {
        if (obj[key === 'object'] && obj[key] !== null) {
            newObj[key] = cloneObject(obj[key])
        } else {
            newObj[key] = obj[key]
        }
    } return newObj
}


console.log(cloneObject(obj))