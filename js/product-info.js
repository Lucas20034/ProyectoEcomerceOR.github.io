

fetch( PRODUCT_INFO_URL +  localStorage.getItem("ProDucts") + '.json')
.then( respuesta => respuesta.json() )
.then( data => {
    const ArrayDatos = data;
    ShowProduct(ArrayDatos.relatedProducts);
} )

function ShowProduct(array) {
    array.forEach(propent => {
        var ProductHTML = ` <div class="list-group-item list-group-item-action">
                                <div class="row">
                                    <div class="col-3">
                                        <img src="${propent.image}" alt="auto-gerico" class="img-thumbnail">  
                                    </div>   
                                    <div class="col">
                                        <div class="d-flex w-100 justify-content-between">
                                            <div>
                                                <h4>${propent.name} -  ${propent.currency} ${propent.cost} </h4>
                                                <p>${propent.description}</p>
                                            </div>
                                            <small>${propent.soldCount}</small>
                                        </div>
                                    </div>
                                </div>  
                            </div> `

         document.getElementById("Productos").innerHTML += ProductHTML;
    });

} 
















