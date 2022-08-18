const url = 'https://japceibal.github.io/emercado-api/cats_products/101.json'

fetch (url)
.then (response => response .json())
.then (data => {

    let probando = document.getElementById('probando')
    probando.innerHTML= `
    <p>${data.name}</p> 
    <p>${data.order}
    `; 

    

	console.log (data)
})

.catch(err => console.log (err))
