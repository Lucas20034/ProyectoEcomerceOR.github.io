URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";


//peticion que cargará los datos obtenidos:// 
fetch(PRODUCTS_URL + localStorage.getItem('catID') + EXT_TYPE) //Hago uso de constantes ya declaradas que tienen los elementos del fetch fetch que necesito , luego para llamar a la array de objetoss me traigo los item de la Local Storage//

.then( respuesta => respuesta.json() )
.then( data => {
    const ArrayDatos = data;
    showinfo(ArrayDatos.products);
} )

function showinfo(array){
    array.forEach(element => {
        var elementHTML =  `
        
        <div class="list-group-item list-group-item-action">
                                <div class="row">
                                    <div class="col-3">
                                        <img src="${element.image}" alt="auto-gerico" class="img-thumbnail">  
                                    </div>   
                                    <div class="col">
                                        <div class="d-flex w-100 justify-content-between">
                                            <div>
                                                <h4>${element.name} -  ${element.currency} ${element.cost} </h4>
                                                <p>${element.description}</p>
                                            </div>
                                            <small>${element.soldCount}</small>
                                        </div>
                                    </div>
                                </div>  
                            </div> 
                            ` 
         document.getElementById("info").innerHTML += elementHTML;
    });

}


