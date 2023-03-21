let stockStorage = JSON.parse(localStorage.getItem("stockStorage")) || [];
let shopCartStorage = JSON.parse(localStorage.getItem("shopCartStorage")) || [];

const addProduct = (id) => {
    let product = stockStorage.find(item => item.idProduct === id);
 
    shopCartStorage.push(product);
    localStorage.setItem("shopCartStorage", JSON.stringify(shopCartStorage));
} // AÑADIR PRODUCTO POR MEDIO DE BUTTON

class Product {
    constructor(handmakerName, nameProduct, URLimg, URLDescription, priceProduct, totalStock){
        this.idProduct = stockStorage.length > 0 ? Math.max(...stockStorage.map(p => p.idProduct)) + 1 : 1;
        this.handmakerName = handmakerName;
        this.nameProduct = nameProduct;
        this.URLimg = URLimg;
        this.URLDescription = URLDescription;
        this.priceProduct = priceProduct;
        this.totalStock = totalStock;
        this.totalSales = 0;
    }
} // CLASE CONSTRUCTORA DE PRODUCTOS


// funcion buscada en google para que quede mas bonito el proyecto, sinceridad ante todo
function toPascalCase(frase) { 
    return frase.trim().split(' ').map(function(palabra) {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    }).join(' ');
  }

// FORMULARIO AGREGAR PRODUCTOS AL STOCKSTORAGE
let formulary = document.getElementById("formulary");
formulary.addEventListener("submit", (e) => {
    e.preventDefault();

    let handmakerName = toPascalCase(document.querySelector("#handmakerName").value);
    let nameProduct = document.querySelector("#inputName").value.toUpperCase();
    let URLimg = document.querySelector("#URLimg").value;
    let URLDescription = document.querySelector("#URLDescription").value;
    let priceProduct = document.querySelector("#inputPrice").value;
    let totalStock = document.querySelector("#inputTotalStock").value; 

    if (handmakerName === "" || nameProduct === "" || URLimg === "" || URLDescription === "" || priceProduct === "" || totalStock === "" || isNaN(priceProduct) || isNaN(totalStock)){
    alert("Complete todos los campos")
    return;
    }

stockStorage.push(new Product(handmakerName, nameProduct, URLimg, URLDescription, priceProduct, totalStock));

localStorage.setItem("stockStorage", JSON.stringify(stockStorage));

formulary.reset();
location.reload();
});



/* CONSTRUCTOR DE CARDS */

let cardSection = document.getElementById("sectioncards");

const cards = (array) => {
array.forEach(product => {
        let div = document.createElement("div");
        div.className = "mycard";
    
        div.innerHTML = `
        <button class="eliminateButtonInCard"><i class="fa-sharp fa-solid fa-trash"></i></button>
        <img src="${product.URLimg}" alt="${product.URLDescription}">
        <div class="cardContent">
        <div class="wordCard">
        <h2 class="productNameCard">${product.nameProduct}</h2>
        <p class="handmakerName">${product.handmakerName}</p>
        </div>
        <div class="buttonToRight">
        <b class="price">$${product.priceProduct}</b>
        <button id="addToBuy_${product.idProduct}" class="buttonShopCart">Añadir Al Carrito</button>
        </div>
        </div>
        `
        cardSection.append(div);
    
        let button = document.getElementById(`addToBuy_${product.idProduct}`);
        button.addEventListener("click", () => addProduct(product.idProduct));    
})}; // CONSTRUCTORA DE CARDS EN EL DOM
cards(stockStorage); // CUANDO SE INICIA LA PAGINA, ESTO ESCRIBE LA PRIMERA VISUALIZACION

// CIRCULITOS DE FILTRADO
let allFilter = document.getElementById("allFilter");
let upToDown = document.getElementById("upToDown"); 
let downToUp = document.getElementById("downToUp"); 

allFilter.addEventListener("click", () => {
    cardSection.innerHTML = "";
    cards(stockStorage)
});
upToDown.addEventListener("click", () =>{
    cardSection.innerHTML = "";
    let upToDownStorage = stockStorage.slice().sort((a, b) => (a.priceProduct - b.priceProduct));
    cards(upToDownStorage);
});
downToUp.addEventListener("click", () => {
    cardSection.innerHTML = "";
    let downToUpStorage = stockStorage.slice().sort((a, b) => (b.priceProduct - a.priceProduct));
    cards(downToUpStorage);
});

// BUSCADOR DE OBJETOS // BARRA DE BUSQUEDA
let query = document.getElementById("searchInput").value;
let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");
let searchForm = document.getElementById("searcher");

searchForm.addEventListener("submit", (e) => {
e.preventDefault();
    let inputs = e.target.children;
    let query = inputs[0].value.trim();
    let arrayIncludes = [];

stockStorage.forEach(product => {
 
let includesOrNot = product.nameProduct.toLowerCase().includes(query.toLowerCase());

const inputValue = query;
const regex = /\s{2,}/g;
const newInputValue = inputValue.replace(regex, ' ');


 if(includesOrNot){
    cardSection.innerHTML = "";
    arrayIncludes.push(product);
    cards(arrayIncludes);
} else if (query === "" || inputValue !== newInputValue){
      cardSection.innerHTML = "";
      cards(stockStorage); 
}})
if(arrayIncludes.length === 0){
    cards(stockStorage);
}});



// FORM MODAL 
let shopCartBtn = document.getElementById("shopCartBtn");
let cardH1 = document.getElementById("h1ShopCart");

shopCartBtn.addEventListener("click", () => {
    cardH1.innerHTML = "";
    cardSection.innerHTML = "";
    let h1 = document.createElement("div");
    h1.innerHTML = `<h1 class="Cardh1">Carrito De Compras</h1>`

cardH1.append(h1);
cards(shopCartStorage);
});

// ELIMINAR PRODUCTOS DEL STOCK STORAGE
const eliminateButton = document.getElementById("eliminateButton"); 

eliminateButton.addEventListener("click", () => {
})

const addCardsDefault = document.getElementById("addCards");

addCardsDefault.addEventListener("click", () => {
alert("Utilizar solo una vez, ya que saldran todos los productos repetidos, esto es solo para que aparezcan productos por defaul en sus navegadores tambien")
    cargarStockTrampa();
    location.reload();
})




/* URLS que funcionan
CHICA CON CAMARA : https://images.pexels.com/photos/6307706/pexels-photo-6307706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
COLLAR : https://images.pexels.com/photos/906056/pexels-photo-906056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
SOMBRERO: https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
RELOJ MANO : https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
PULSERA : https://images.pexels.com/photos/885218/pexels-photo-885218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
ARETES HIPPIES : https://images.pexels.com/photos/10283309/pexels-photo-10283309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
*/