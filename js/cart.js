const PAPEL = ('https://japceibal.github.io/emercado-api/user_cart/25801.json')


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
                    <h2 class="mb-1">${propent.name}</h2>
                     <h4 class="mb-1">${propent.count}</h4>
                    <h4 class="mb-1">${propent.unitCost} ${propent.currency}</h4>
                    
                </div>
                
            </div>
        </div>
    </div>
    `

        document.getElementById("lasterfest").innerHTML += ProductHTML;
    });

}
