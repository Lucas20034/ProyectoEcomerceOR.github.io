const PAPEL = ('https://japceibal.github.io/emercado-api/user_cart/25801.json') // Llamo a la API que necesito// 

//peticion feth 


fetch(PAPEL )
.then(response => response.json())
.then(data => {
    const ArrayDatos = data;
    ShowProduct(ArrayDatos.articles);
     console.log(PAPEL)
})


function ShowProduct(array) {

    array.forEach(propent => {
        var ProductHTML = ` 
       
        <div class="row">

            <div class="col-3">
                <img src="${propent.image}"  class="img-thumbnail" style=" height:10em; border-radius: 60px; border-style: solid; border-width: 5px; border-color: #c5c5c556; ">
            </div>
            
            <div class="col">
               <div class="d-flex w-100 justify-content-between"> 
                    <h2 class="mb-1">   <p> Nombre <hr> </hr> <p>${propent.name}</h2>

                    <h2 class="mb-1"> <p> Costo <hr> </hr>  <p>  ${propent.unitCost} </h2>

                     <h3 class="mb-1"> <p> Cantidad <hr> </hr> <p>  <input id="ValorA" type="number" min="1"style=" height:3em;  width:3em;">  </h3>


                    <h4 <td class="tdSubTotal col-2"> ${propent.currency} ${propent.unitCost}</td> </h4>

                    <hr> </hr>  
                    
                </div>
                
            </div>
            
        </div>
        
    </div>
    `

        document.getElementById("lasterfest").innerHTML += ProductHTML;


        const input = document.querySelector("input");

	// me permite la multiplicacion 
	input.addEventListener("input", () => {
		document.querySelector(".tdSubTotal").innerHTML = `${propent.currency} ${Number(input.value) * propent.unitCost}`;
        
	});

    });

}


let productCost = 0;
let productCount = 0;
let comissionPercentage = 0.13;
let MONEY_SYMBOL = "$";
let DOLLAR_CURRENCY = "Dólares (USD)";
let PESO_CURRENCY = "Pesos Uruguayos (UYU)";
let DOLLAR_SYMBOL = "USD ";
let PESO_SYMBOL = "UYU ";
let PERCENTAGE_SYMBOL = '%';
let MSG = "FUNCIONALIDAD NO IMPLEMENTADA";

//Función que se utiliza para actualizar los costos de publicación
function updateTotalCosts(){
    let unitProductCostHTML = document.getElementById("productCostText");
    let comissionCostHTML = document.getElementById("comissionText");
    let totalCostHTML = document.getElementById("totalCostText");

    let unitCostToShow = MONEY_SYMBOL + productCost;
    let comissionToShow = Math.round((comissionPercentage * 100)) + PERCENTAGE_SYMBOL;
    let totalCostToShow = MONEY_SYMBOL + ((Math.round(productCost * comissionPercentage * 100) / 100) + parseInt(productCost));

    unitProductCostHTML.innerHTML = unitCostToShow;
    comissionCostHTML.innerHTML = comissionToShow;
    totalCostHTML.innerHTML = totalCostToShow;
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("productCountInput").addEventListener("change", function(){
        productCount = this.value;
        updateTotalCosts();
    });

    document.getElementById("productCostInput").addEventListener("change", function(){
        productCost = this.value;
        updateTotalCosts();
    });

    document.getElementById("goldradio").addEventListener("change", function(){
        comissionPercentage = 0.13;
        updateTotalCosts();
    });
    
    document.getElementById("premiumradio").addEventListener("change", function(){
        comissionPercentage = 0.07;
        updateTotalCosts();
    });

    document.getElementById("standardradio").addEventListener("change", function(){
        comissionPercentage = 0.03;
        updateTotalCosts();
    }); 

    document.getElementById("productCurrency").addEventListener("change", function(){
        if (this.value == DOLLAR_CURRENCY)
        {
            MONEY_SYMBOL = DOLLAR_SYMBOL;
        } 
        else if (this.value == PESO_CURRENCY)
        {
            MONEY_SYMBOL = PESO_SYMBOL;
        }

        updateTotalCosts();
    });


    //Configuraciones para el elemento que sube archivos
    let dzoptions = {
        url:"/",
        autoQueue: false
    };
    let myDropzone = new Dropzone("div#file-upload", dzoptions);    


    //Se obtiene el formulario de publicación de producto
    let sellForm = document.getElementById("sell-info");

    //Se agrega una escucha en el evento 'submit' que será
    //lanzado por el formulario cuando se seleccione 'Vender'.
    sellForm.addEventListener("submit", function(e){

        e.preventDefault(); 
        e.preventDefault();

        let productNameInput = document.getElementById("productName");
        let productCategory = document.getElementById("productCategory");
        let productCost = document.getElementById("productCostInput");
        let infoMissing = false;

        //Quito las clases que marcan como inválidos
        productNameInput.classList.remove('is-invalid');
        productCategory.classList.remove('is-invalid');
        productCost.classList.remove('is-invalid');

        //Se realizan los controles necesarios,
        //En este caso se controla que se haya ingresado el nombre y categoría.
        //Consulto por el nombre del producto
        if (productNameInput.value === "")
        {
            productNameInput.classList.add('is-invalid');
            infoMissing = true;
        }
        
        //Consulto por la categoría del producto
        if (productCategory.value === "")
        {
            productCategory.classList.add('is-invalid');
            infoMissing = true;
        }

        //Consulto por el costo
        if (productCost.value <=0)
        {
            productCost.classList.add('is-invalid');
            infoMissing = true;
        }
        
        if(!infoMissing)
        {
            //Aquí ingresa si pasó los controles, irá a enviar
            //la solicitud para crear la publicación.

            getJSONData(PUBLISH_PRODUCT_URL).then(function(resultObj){
                let msgToShowHTML = document.getElementById("resultSpan");
                let msgToShow = "";
    
                //Si la publicación fue exitosa, devolverá mensaje de éxito,
                //de lo contrario, devolverá mensaje de error.
                //FUNCIONALIDAD NO IMPLEMENTADA
                if (resultObj.status === 'ok')
                {
                    msgToShow = MSG;
                    document.getElementById("alertResult").classList.add('alert-primary');
                }
                else if (resultObj.status === 'error')
                {
                    msgToShow = MSG;
                    document.getElementById("alertResult").classList.add('alert-primary');
                }
    
                msgToShowHTML.innerHTML = msgToShow;
                document.getElementById("alertResult").classList.add("show");
            });
        }
    });
});


let button = document.getElementById("button");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let pass1 = document.getElementById("password1");
let pass2 = document.getElementById("password2");
let check = document.getElementById("terminos");
let btncheck = document.getElementById("btnCheck");
let check2 = document.getElementById("terminos2");


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

function validEmail() {
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (email.value.length > 0 && validEmail.test(email.value)) {
        email.classList.add("is-valid")
    }
    else {
        email.classList.add("is-invalid")
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

function validaEmailInput() {
    validEmail();
    email.addEventListener("input", () => {
        email.classList.remove("is-valid")
        email.classList.remove("is-invalid")
        validEmail();
    });
}

function validaPassInput(passw) {
    validPassword();
    passw.addEventListener("input", () => {
        passw.classList.remove("is-invalid")
        passw.classList.remove("is-valid")
        validPassword();
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
    validaEmailInput();
    validaPassInput(pass1);
    validaPassInput(pass2);
    validaBtnCheck();

});






