const url = 'https://japceibal.github.io/emercado-api/cats_products/101.json' 


fetch (url)
.then (response => response .json())
.then (data => {

    let element = document.getElementById('elem')
    element.innerHTML= `
    <p> ${data.id}
    <p>${data.name}</p> 
    <p>${data.description}</p> 
    <p> ${data.currency}</p>
    <p> ${data.soldCount}</p>
    <img src='${data.image}'/>

    
    `; 

    

	console.log (data)
})

.catch(err => console.log (err))