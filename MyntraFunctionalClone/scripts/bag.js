let bagItemsObject = [] ; 

onload();

function onload(){
    loadBagItems() ; 
    displayBagItems() ; 
    createNewSum() ; 
}

function loadBagItems(){
    bagItemsObject = bagItems.map(itemId => {
        for(let i = 0 ;i<items.length ; i++){
            if(itemId == items[i].id){
                return items[i] ;
            }
        }
    })
    
}
function displayBagItems(){

    let containerElement = document.querySelector('.bag-items-container') ; 

    let innerHtml = `` ; 

    bagItemsObject.forEach(element => {
        innerHtml += generateItemElement(element) ; 
    });

    containerElement.innerHTML = innerHtml ; 


}
function removeFromBag(itemId){
  bagItems = bagItems.filter(bagItemId => bagItemId != itemId) ; 

  localStorage.setItem('bagItems' , JSON.stringify(bagItems)) ; 
  loadBagItems() ; 
  displayBagIcon() ; 
  displayBagItems() ; 
  createNewSum() ; 
  
}

function generateItemElement(item){

    return `
    <div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${item.image}">
            </div>
            <div class="item-right-part">
              <div class="company">${item.company}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price-container">
                <span class="current-price">${item.current_price}</span>
                <span class="original-price">${item.original_price}</span>
                <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick = 'removeFromBag(${item.id})' >X</div>
          </div>`
}

//function for creating the new bag summary . . .
function createNewSum(){ 
  document.querySelector('.bag-summary').innerHTML = update(); 
  
}

//function for updating the info of the bag summary according to the update . . .
function update(){

    let totalRs = 0 ; 
    let discountRs = 0 ; 
    let totalAmount = 0 ; 
    
    for(let i = 0 ; i<bagItemsObject.length ;i++){
      totalRs += bagItemsObject[i].original_price ; 
      discountRs += (bagItemsObject[i].original_price - bagItemsObject[i].current_price) ; 
    }  

    totalAmount = totalRs-discountRs ; 

    
  return  `
          <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${bagItems.length} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">${totalRs}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-${discountRs}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs 99</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${totalAmount + 99}</span>
            </div>
          </div>

          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>
        `
}