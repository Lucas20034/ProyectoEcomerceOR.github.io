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

                     <h3 class="mb-1"> <p> Cantidad <hr> </hr> <p>  <input id="ValorA" type="number" style=" height:3em;  width:3em;">  </h3>


                    <h4 <td class="tdSubTotal col-2"> ${propent.currency} ${propent.unitCost}</td> </h4>

                    <hr> </hr>  
                    
                </div>
                
            </div>
            
        </div>
        
    </div>
    `

        document.getElementById("lasterfest").innerHTML += ProductHTML;


        const input = document.querySelector("input");

	//Agrego el evento dentro del input para que cuando sea modificado tambien se modifique el campo del subtotal.
	input.addEventListener("input", () => {
		document.querySelector(".tdSubTotal").innerHTML = `${propent.currency} ${Number(input.value) * propent.unitCost}`;
        
	});

    });

}


