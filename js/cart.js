const PAPEL = ('https://japceibal.github.io/emercado-api/user_cart/25801.json') // Llamo a la API que necesito// 

//peticion feth 


fetch(PAPEL)
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

                     <h3 class="mb-1"> <p> Cantidad <hr> </hr> <p>  <input type="number" style=" height:3em;  width:3em;">  </h3>


                    <h4 class="mb-1"> <p> Subtotal <hr> </hr>  <p> ${propent.unitCost} ${propent.currency}</h4>
                    <hr> </hr>  
                    
                </div>
                
            </div>
            
        </div>
        
    </div>
    `

        document.getElementById("lasterfest").innerHTML += ProductHTML;
    });

}

const Cifra= 15200

function Calculator()  {
//Count//
Cifra *  unitCost.value
console.log(Calculator)

}
Calculator()