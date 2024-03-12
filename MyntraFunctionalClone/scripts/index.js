//array containing the items of the bag . . .
let bagItems = [] ; 
onLoad() ;

//when home page or website is loaded then call the functions . .. 
function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems') ; 
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [] ; 
    displayOnHomePage() ; 
    displayBagIcon() ; 
}
//function for adding item to the Bag.. .
function addToBag(itemId){
    bagItems.push(itemId)  ; 
    localStorage.setItem('bagItems' , JSON.stringify(bagItems))
    displayBagIcon() ; 
}

//function for displaying the Bag Icon . . .
function displayBagIcon() {
    let bagItemsCountElement = document.querySelector('.bag-item-count') ; 
    if(bagItems.length == 0){
        bagItemsCountElement.style.visibility = 'hidden' ; 
    }
    else{
        bagItemsCountElement.style.visibility = 'visible' ;
        bagItemsCountElement.innerText = bagItems.length ; 
    }
    
} 

//function for displaying the items on the Home page . . . 
function displayOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-container') ; 

    if(!itemsContainerElement){
        return ; 
    }

let innerHtml = '' ; 
items.forEach(item => {
    innerHtml +=  `
    <div class="item">
        <img class="item-img" src="${item.image}" alt="item image">
        <div class="rating">
            ${item.rating.stars } | ${item.rating.count}
        </div>
        <div class="comp-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick = 'addToBag(${item.id})'>Add to Bag</button>
    </div>` ;
})
itemsContainerElement.innerHTML = innerHtml ; 


}
