

//fetch 1//
let MotherRray= [];
let idinfo = localStorage.getItem('ProDucts');


function inicio(array){

    let mucho_textp = "";
    mucho_textp += 
    `
    <Div style="margin:1.3em;">
    <h1>${array.name}</h1>
  </Div>
  <hr>
  <div>
    <B>Precio</B>
    <p>${array.currency} ${array.cost}</p>
    <B>DescripciÃ³n</B>
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


        document.getElementById("Ranger").innerHTML = mucho_textp;
    }


    function productosyeso(array){

        let mucho_textp = "";
        mucho_textp += `
        
                <div class="col-6" onclick="idd(${array.relatedProducts[0].id})">
                <h3>${array.relatedProducts[0].name}</h3><br>
                <img src="${array.relatedProducts[0].image}" alt=""style="height: 10em;">
            </div>
            <div class="col-6" onclick="idd(${array.relatedProducts[1].id})">
                <h3>${array.relatedProducts[1].name}</h3><br>
                <img src="${array.relatedProducts[1].image}" alt=""style="height: 10em;">
            </div>
            
                `
            document.getElementById("P-info4").innerHTML = mucho_textp;
        }
    
            /* empieza el coso de productos la data */
        document.addEventListener("DOMContentLoaded", function(){
    
            getJSONData(PRODUCT_INFO_URL+ idinfo + EXT_TYPE).then(function(resultObj){
                if (resultObj.status === "ok"){
                    ProductArray = resultObj.data
                    inicio(ProductArray);
                    productosyeso(ProductArray);
                    
                }
            });
            });
            getJSONData(PRODUCT_INFO_COMMENTS_URL+ idinfo + EXT_TYPE).then(function(resultObj){
                if (resultObj.status === "ok"){
                    cuack = resultObj.data
                    
                    showProductComments(cuack)
                    addcoment()
                    console.log(cuack)
                }
            });














//Fetch 2//




//Definition//





// END F1 // 










//Fetch 2 ((PETICION DE LAS RECOMENDACIONES )) ///

fetch(PRODUCT_INFO_URL+  localStorage.getItem("ProDucts") + EXT_TYPE)
    .then(respuesta => respuesta.json())
    .then(data => {
        const ArrayDatos = data;
        ShowProduct(ArrayDatos.relatedProducts);
    })

function ShowProduct(array) {
    
    array.forEach(propent => {
        var ProductHTML =  ` 
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








