let currentVal = '' ; //empty string by default . . .

//function for changing the value on the display . 
function valOnScreen(num){

    switch(num){
        case '1' :
            currentVal += '1' ; 
            break ;
        case '2':
            currentVal += '2' ;
             break ;
        case '3':
            currentVal += '3' ;
             break ;
        case '4':
            currentVal += '4' ;
             break ;
        case '5' :
            currentVal += '5';
             break ;
        case '6' :
            currentVal += '6' ;
             break ;
        case '7' :
            currentVal += '7' ;
             break ;
        case '8':
            currentVal += '8' ;
             break ;
        case '9' :
            currentVal += '9' ;
             break ;
        case '0':
            currentVal += '0' ;
             break ;
        case '.':
            currentVal += '.' ;
             break ;
        case '+':
            currentVal += '+' ;
             break ;
        case '-':
            currentVal += '-' ;
             break ;
        case '*':
            currentVal += '*' ;
             break ;
        case '/':
            currentVal += '/' ;
             break ;
        case '(':
            currentVal += '(' ;
             break ;
        case ')':
            currentVal += ')' ;
             break ;

        //for evaluating the expression . . .
        case '=' :
            currentVal =  eval(currentVal);
            break ;
         case ')':
            currentVal += ')' ;
             break ;
        

        //for clearing the screen . . .
        case '' : 
            currentVal = '' ;
             break ;
        
                        
    }
    document.querySelector('#display').value = currentVal ; 
}