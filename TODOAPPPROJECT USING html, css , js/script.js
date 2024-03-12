//array for adding the to do . . . 
let todoList = [] ; 



//method for showing the element of the to do list . . . 
function displayItems(){
    let ele = document.querySelector('#to-do-container') ; 

    ele.innerHTML = '' ; 

    let newHtml = `` ; 

    for(let i = 0 ; i<todoList.length ;i++){
        newHtml += `
        <span>${todoList[i].item}</span>  
        <span>${todoList[i].dueDate}</span>    
        <span><button class="deleteBut" onclick="todoList.splice(${i} , 1) ; displayItems() ">Delete</button></span> 
        `
    }

    //adding new HTML  to the div element for every call. . . 
    ele.innerHTML = newHtml ; 


}

//at starting . . . 
displayItems() ; 

//function for adding new to do . . . 
function addToDo(){
    //element of the todoitem . . . 
    let toDoItem = document.getElementById('todo-input') ; 

    //HTML element of the todoDate . . . 
    let toDoDate = document.getElementById('todo-date') ; 

    todoList.push(
        {
            item : toDoItem.value , 
            dueDate : toDoDate.value
        }
    )

    toDoItem.value = "" ; 
    toDoDate.value = "" ; 

    displayItems() ; 
     
}