//Relizar array y tomar una funcion//


let MotherRray = [];



let idinfo = localStorage.getItem('ProDucts');

//fetch 1  la que se encarga de traerme  las descripciones de el producto especifico //
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
      <img src="${array.images[0]}" alt="" class="img-thumbnail" style="height: 10em; border-radius: 60px; border-style: solid; border-width: 5px; border-color: #0cb9ee38;"><img src="${array.images[1]}" alt="" class="img-thumbnail" style="height: 10em; border-radius: 60px; border-style: solid; border-width: 5px; border-color: #0cb9ee38;"><img src="${array.images[2]}" alt="" class="img-thumbnail" style="height: 10em; border-radius: 60px; border-style: solid; border-width: 5px; border-color: #0cb9ee38;" ><img src="${array.images[3]}" alt="" class="img-thumbnail" style="height: 10em;border-radius: 60px; border-style: solid; border-width: 5px; border-color: #0cb9ee38;" >
    </div>
  </div>
  <hr>
            `


    document.getElementById("Ranger").innerHTML = Descriptions;
    
}


//Fetch 2 ((PETICION DE LAS RECOMENDACIONES )) recicle un codigo que ya hice para products.js ///

fetch(PRODUCT_INFO_URL + localStorage.getItem("ProDucts") + EXT_TYPE)
    .then(respuesta => respuesta.json())
    .then(data => {
        const ArrayDatos = data;
        ShowProduct(ArrayDatos.relatedProducts);
    })

function ShowProduct(array) {

    array.forEach(propent => {
        var ProductHTML = ` 
        <div onclick="MasterClick(${propent.id})" class="list-group-item list-group-item-action cursor-active">
        <div class="row">
            <div class="col-3">
                <img src="${propent.image}" alt="${propent.name}" class="img-thumbnail" style=" height:10em; border-radius: 60px; border-style: solid; border-width: 5px; border-color: #c5c5c556; ">
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

/* empieza el coso de productos la data */
document.addEventListener("DOMContentLoaded", function(){

    getJSONData(PRODUCT_INFO_URL+ idinfo + EXT_TYPE).then(function(resultObj){
        if (resultObj.status === "ok"){
            ProductArray = resultObj.data
            inicio(ProductArray);
            
            
        }
    });
    });


getJSONData(PRODUCT_INFO_COMMENTS_URL+ idinfo + EXT_TYPE).then(function(resultObj){
    if (resultObj.status === "ok"){
        Rise = resultObj.data
        
        showProductComments(Rise)
        addcoment()

        console.log(Rise)
    }
});


function showProductComments(comments){
    if(comments.length === 0){
       document.getElementById("Stellaris").innerHTML = '<p class="text-muter> Oops! No hay comentarios para mostrar...</p>';
   }else{ 
        let Allstar = '<i class="fas fa-star checked"></i>'.repeat(5);
         for (let i = 0; i < comments.length; i++) { 
           if(comments[1].score > 0 && comments[i].score <= 5) {
            Allstar = '<i class="fa fa-star checked"></i>'.repeat(comments[i].score);
            Allstar += '<i class=-fas fa-star checked"></i>'.repeat(5 - comments[i].score); 
               }

                 document.getElementById("Stellaris").innerHTML += `<li class="media border list-group-item"> 
                 <div class="media-body">
                     <label class="mt-0"><strong>${comments[i].user}</strong>
                         <span class="mute"> - ${comments[i].dateTime}</span>
                         <span> - ${Allstar}</span>
                     </label>
                     <br>
                     <label class="small">${comments[i].description}</label>
                 </div>
                 </li>
                 `


   
               };
           }; 
       };



       function addcoment(){
        let Missfortune =document.getElementById("comentar")
        Missfortune.innerHTML=`
        <h1 class="my-3">Agregar Comentario</h1>
            <hr class="my-4">
            <div class="row mt-4 g-3">
                <div class="col-sm-4">
                <label for="Item" class="form-label">
                    start:
                    <select name="estrellas" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select> 
                </label>
                <input type="text" class="form-control" id="item">
                <div class="d-grid">
                    <button type="button" class="btn btn-primary my-3" id="agregar">Agregar</button>
                </div>
                </div>
             </div>
             `

    }


    function Romeo(id) {
        localStorage.setItem("Socrates", id);
        window.location = "cart.html"
      }