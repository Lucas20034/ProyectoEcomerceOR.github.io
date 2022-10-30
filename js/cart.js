const PAPEL = ('https://japceibal.github.io/emercado-api/user_cart/25801.json') 
let idinfo = localStorage.getItem('catID2');
let l15= document.getElementById("goldradio")
        let l7= document.getElementById("premiumradio")
        let l5= document.getElementById("standardradio")
        let porcentaje= 0;
 document.addEventListener("DOMContentLoaded", function(){

    fetch(PAPEL)
    .then(response => response.json())
    .then(data => {
        const ArrayDatos = data;
        prueba(ArrayDatos.articles)
        
         console.log(ArrayDatos.articles)
    });
     
 fetch(PRODUCT_INFO_URL+idinfo + EXT_TYPE)
 .then(response => response.json())
 .then(data => {
     const lll = data;
      console.log(lll)
 })
})

 

function prueba(array) {

    array.forEach(propent => {
        var ProductHTML = ` 
       
        <div class="container">
        <div class="row">
          <div class="col-sm">
          <img src="${propent.image}"  class="img-thumbnail" >
          </div>
          <div class="col-sm">
          <h3 text-center> ${propent.name}</h3>
          </div>
          <div class="col-sm">
          <h2 class="mb-1"> ${propent.unitCost} </h2>

          </div>
          <div class="col-sm">
          <h3 class="mb-1"><input id="${propent.id}" type="number" min="1"  style=" width:3em;">  </h3>
          
        </div>
        <div class="col-sm">
        <h4 <td class="SubTotal col-2"> ${propent.currency} ${propent.unitCost}</td> </h4>
      </div>
        </div>
      </div>
    `

        document.getElementById("lasterfest").innerHTML += ProductHTML;
const input = document.getElementById(propent.id);
        
// me permite la multiplicacion sell
input.addEventListener("input", () => {
  document.querySelector(".SubTotal").innerHTML = `${propent.currency} ${Number(input.value) * propent.unitCost}`;
document.getElementById("productCostText").innerHTML = `${propent.currency} ${Number(input.value) * propent.unitCost}`  
document.getElementById("totalCostText").innerHTML = `${propent.currency} ${((Number(input.value) * propent.unitCost )*porsentaje)}`

l15.addEventListener("click",()=>{
  porcentaje=0.15
  pan=15
  document.getElementById("comissionText").innerHTML = `${propent.currency} ${(Number(input.value) * propent.unitCost )*porcentaje}`
  
})
l7.addEventListener("click",()=>{
  porcentaje= 0.07
  pan=7
  document.getElementById("comissionText").innerHTML = `${propent.currency} ${(Number(input.value) * propent.unitCost )*porcentaje}`
})
l5.addEventListener("click",()=>{
  porcentaje=0.05
  pan=7
  document.getElementById("comissionText").innerHTML = `${propent.currency} ${(Number(input.value) * propent.unitCost )*porcentaje}`
})
}); 

    });
}


//Reciclo del grupal 6 
let button = document.getElementById("button");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");


let check = document.getElementById("terminos");
let btncheck = document.getElementById("btnCheck");


function validData(dato) {
    if (dato.value.length == 0) {
        dato.classList.add("is-invalid")
    }
    else { 
        dato.classList.add("is-valid")
    }
}

function validPassword() {

    if (pass1.value.length < 6) {
        pass1.classList.add("is-invalid")
    }
    else {
        pass1.classList.add("is-valid")
    }

    if (pass2.value == pass1.value && pass1.value.length >= 6) {
        pass2.classList.add("is-valid")
    }
    else {
        pass2.classList.add("is-invalid")
    }

}

function validCheck() {
    if (check.checked == false) {
        btncheck.classList.add("is-invalid")
        btncheck.style.color = "red"
        check.classList.add("is-invalid")
    }
    else {
        btncheck.classList.add("is-valid")
        check.classList.add("is-valid")
        btncheck.style.color = "green"
    }
}



function validaDataInput(input) {
    validData(input);
    input.addEventListener("input", () => {
        input.classList.remove("is-valid")
        input.classList.remove("is-invalid")
        validData(input);
    });
}






function validaBtnCheck() {
    validCheck()
    check.addEventListener("change", () => {  
        check.classList.remove("is-invalid")
        check.classList.remove("is-valid")
        btncheck.classList.remove("is-invalid")
        btncheck.classList.remove("is-valid")
        validCheck()
    });
}

button.addEventListener("click", () => {
    validaDataInput(nombre);
    validaDataInput(apellido);
    
    validaBtnCheck();

});