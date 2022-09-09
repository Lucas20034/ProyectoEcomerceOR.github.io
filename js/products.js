let PRODUCTS_API=PRODUCTS_URL+localStorage.getItem('catID')+'.json'
let productList = ""
let catNames ={101:'Autos',102:"Juguetes",103:"Muebles", 104:"Herramientas",105:"Computadoras",106:"Vstimenta",107:"Electrodomesticos",10:"Deporte", 109:"Celulares"};




//Funciones ASC-DESC//




//DSC//

function sortByPriceDesc(a,b){

    return a.cost -  b.cost 

}
//ASC//

function sortByPriceAsc(a,b){

    return b.cost -  a.cost 

}


//More action//


function productSortMore(){

    showProducts(productList.sort(sortByPriceDesc));


}


function productSortLess() {

    showProducts(productList.sort(sortByPriceAsc));
    
    
    }
//Para el onclick//
  
function MasterClick(id) {
    localStorage.setItem("ProDucts", id);
    window.location = "product-info.html"
}

function showProducts(list){
    let htmlContentToAppend = "";
for(let i=0; i < list.length;i++){
let product = list[i]

htmlContentToAppend += ` 

<div onclick="MasterClick(${product.id})" class="list-group-item list-group-item-action cursor-active">

 <div class="list-group-item-action list-group-item-action" >
 <div class="row">
  <div class="col-3>
    <img src="${product.image}" alt="product image" class="img-thumbnail">
    </div>
      <div class="col">
         <div class="d-flex w-100 justify-content-between">
           <div class="mb-1">
              <h4> ${product.name} -   ${product.currency}  ${product.cost }   </h4>
              <p> ${product.description}</p>
              <br> <br>
                
                 </div>

                 <small class="text-muted"> ${product.soldCount }  vendidos </small>

                         </div>


                       </div>


                    </div>
                    </div>

                 </div>

 
 `

    }
    document.getElementById("info").innerHTML = htmlContentToAppend;
     catText()
}

//Definition//
function catText(){
    document.getElementById("catName").innerText = catNames[localStorage.getItem('catID')]
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_API).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productList = resultObj.data.products;
            console.log(productList)
            showProducts(productList);
        }
    });

});



