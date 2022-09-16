

//fetch 1  la que se encarga de traerme  las descripciones de el producto especifico //
let MotherRray = [];



let idinfo = localStorage.getItem('ProDucts');


function inicio(array) {

    let Descriptions = "";
    Descriptions +=
        `
    <Div style="margin:1.3em;">
    <h1>${array.name}</h1>
  </Div>
  <hr>
  <div>
    <B>Precio</B>
                  <p>${array.currency} ${array.cost}</p>
         <B>Descripcion</B>
                    <P>${array.description}</P>
              <B>Categoria</B>
         <p>${array.category}</p>
     <b>Cantidad Vendidos</b>
              <p>${array.soldCount}</p>

      <b>imagen ilustrativa</b>
     <div>
      <img src="${array.images[0]}" alt="" class="img-thumbnail" style="height: 10em;"><img src="${array.images[1]}" alt="" class="img-thumbnail" style="height: 10em;"><img src="${array.images[2]}" alt="" class="img-thumbnail" style="height: 10em;"><img src="${array.images[3]}" alt="" class="img-thumbnail" style="height: 10em;">
    </div>
  </div>
  <hr>
            `


    document.getElementById("Ranger").innerHTML = Descriptions;
}


//Fetch 2 ((PETICION DE LAS RECOMENDACIONES )) ///

fetch(PRODUCT_INFO_URL + localStorage.getItem("ProDucts") + EXT_TYPE)
    .then(respuesta => respuesta.json())
    .then(data => {
        const ArrayDatos = data;
        ShowProduct(ArrayDatos.relatedProducts);
    })

function ShowProduct(array) {

    array.forEach(propent => {
        var ProductHTML = ` 
        <div onclick="setCatID(${propent.id})" class="list-group-item list-group-item-action cursor-active">
        <div class="row">
            <div class="col-3">
                <img src="${propent.image}" alt="${propent.name}" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">${propent.name}</h4>
                    <small class="text-muted">${propent.id} artículos</small>
                </div>
                
            </div>
        </div>
    </div>
    `

        document.getElementById("Productos").innerHTML += ProductHTML;
    });

}



// E N D F2// 

/* Funcion de eventos reciclada */
document.addEventListener("DOMContentLoaded", function () {

    getJSONData(PRODUCT_INFO_URL + idinfo + EXT_TYPE).then(function (Resultadosj) {
        if (Resultadosj.status === "ok") {
            ProductArray = Resultadosj.data
            inicio(ProductArray);

        }
    });
});



//Fin//


