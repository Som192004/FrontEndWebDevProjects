//At the start we should get the object from the local storage . . . 
let score ;  
let resultMsg ; 

function showMessage(result) {
    var popupContainer = document.getElementById('messageContainer');

      // Show the pop-up by setting the bottom to 0
      popupContainer.style.bottom = '0';

      popupContainer.innerText = result;

      // Hide the pop-up after a certain time (e.g., 3 seconds)
      setTimeout(function() {
        hidePopup();
      }, 3000);
}

function hidePopup() {
    var popupContainer = document.getElementById('messageContainer');

    // Hide the pop-up by setting the bottom to -100px
    popupContainer.style.bottom = '-100px';
}


//if user has chosen the Bat . . .
function fun1(){

    if(localStorage.getItem("Score") != undefined){
        score = JSON.parse(localStorage.getItem("Score"))
    }
    else{
        score = {
        userScore:0 , 
        compScore:0 ,
        }
    }
    

    let userChoice = 'Bat' ; 
    let randomNum = Math.random() * 3 ; 
    let compChoice ; 
    if(randomNum > 0 && randomNum <= 1){
        compChoice = 'Bat' ;         
    }
    else if(randomNum > 1 && randomNum <=2 ){
        compChoice = 'Ball' ; 
    }
    else if(randomNum >2 && randomNum <= 3){
        compChoice = 'Stump' ; 
    }
    else{
        alert("Computer has not selected nothing . . . ") ; 
    }
    


    if(compChoice === 'Bat'){
        resultMsg = `Your choice is Bat and Computer Choice is ${compChoice}\nSo result is It is tie . . .  ` ; 

    }
    else if(compChoice === 'Ball'){
        resultMsg = `Your choice is Bat and Computer Choice is ${compChoice}\nSo result is You have won . . .  `;
        score.userScore += 1 ; 
        document.getElementById("user").innerText = score.userScore ; 
        document.getElementById("comp").innerText = score.compScore ; 
        
    }
    else if(compChoice === 'Stump'){
        resultMsg = `Your choice is Bat and Computer Choice is ${compChoice}\nSo result is Computer has won . . . ` ; 
        score.compScore += 1 ; 
        document.getElementById("user").innerText = score.userScore ; 
        document.getElementById("comp").innerText = score.compScore ; 
    }

    //first storing in local Storage of the browser . . . 
    localStorage.setItem("Score" , JSON.stringify(score)) ; 

    // alert(resultMsg) ; 
    showMessage(resultMsg);
}

//if user has chosen the Ball . . .
function fun2(){

    if(localStorage.getItem("Score") != undefined){
        score = JSON.parse(localStorage.getItem("Score"))
    }
    else{
        score = {
        userScore:0 , 
        compScore:0 ,
    }
    }
    let userChoice = 'Ball' ; 
    let randomNum = Math.random() * 3 ; 
    let compChoice ; 
    if(randomNum > 0 && randomNum <= 1){
        compChoice = 'Bat' ;         
    }
    else if(randomNum > 1 && randomNum <=2 ){
        compChoice = 'Ball' ; 
    }
    else if(randomNum >2 && randomNum <= 3){
        compChoice = 'Stump' ; 
    }
    else{
        alert("Computer has not selected nothing . . . ") ; 
    }


    //

    if(compChoice === 'Bat'){
        resultMsg = `Your choice is Ball and \nComputer Choice is ${compChoice}\nSo result is Computer has won . . . ` ; 
        score.compScore += 1 ; 
        document.getElementById("user").innerText = score.userScore ; 
        document.getElementById("comp").innerText = score.compScore ; 
        }
    else if(compChoice === 'Ball'){
        resultMsg = `Your choice is Ball and \nComputer Choice is ${compChoice}\nSo result is It is tie  . . .`
;    }
    else if(compChoice === 'Stump'){
        resultMsg = `Your choice is Ball and \nComputer Choice is ${compChoice}\nSo result is You have won . . .`
        score.userScore += 1 ; 
        document.getElementById("user").innerText = score.userScore ; 
        document.getElementById("comp").innerText = score.compScore ;     }

    //first storing in local Storage of the browser . . . 
    localStorage.setItem("Score" , JSON.stringify(score)) ; 

    // alert(resultMsg) ; 
    showMessage(resultMsg);
}

//If user has chosen the Stump . . .
function fun3(){

    if(localStorage.getItem("Score") != undefined){
        score = JSON.parse(localStorage.getItem("Score"))
    }
    else{
        score = {
        userScore:0 , 
        compScore:0 ,
    }
    }
    let userChoice = 'Stump' ; 
    let randomNum = Math.random() * 3 ; 
    let compChoice ; 
    if(randomNum > 0 && randomNum <= 1){
        compChoice = 'Bat' ;         
    }
    else if(randomNum > 1 && randomNum <=2 ){
        compChoice = 'Ball' ; 
    }
    else if(randomNum >2 && randomNum <= 3){
        compChoice = 'Stump' ; 
    }
    else{
        alert("Computer has not selected nothing . . . ") ; 
    }


    //

    if(compChoice === 'Bat'){
        resultMsg = `Your choice is Stump and \nComputer Choice is ${compChoice}\nSo result is You have won . . . ` ; 
        score.userScore += 1 ; 
        document.getElementById("user").innerText = score.userScore ; 
        document.getElementById("comp").innerText = score.compScore ; 
        }
    else if(compChoice === 'Ball'){
        resultMsg = `Your choice is Stump and \nComputer Choice is ${compChoice}\nSo result is Computer has won  . . .`;
        score.compScore += 1 ; 
        document.getElementById("user").innerText = score.userScore ; 
        document.getElementById("comp").innerText = score.compScore ; 
        }
    else if(compChoice === 'Stump'){
        resultMsg = `Your choice is Stump and \nComputer Choice is ${compChoice}\nSo result is  It is tie . . .`;
    }

    //first storing in local Storage of the browser . . . 
    localStorage.setItem("Score" , JSON.stringify(score)) ; 

    // alert(resultMsg) ; 
    showMessage(resultMsg);
}

//function for reseting the localStorage. . . 
function resertScore() {
    localStorage.clear() ; 
    score.userScore = 0 ;
    score.compScore = 0 ; 

    document.getElementById("user").innerText = score.userScore ; 
    document.getElementById("comp").innerText = score.compScore ; 

}
