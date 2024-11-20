// this function would be invoked whenever the user clicks on any of the buttons
function myfunc(){
   var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    //  let's hold these button values in these variables.
   b1 = document.getElementById("b1").value;
   b2 = document.getElementById("b2").value;
   b3 = document.getElementById("b3").value;
   b4 = document.getElementById("b4").value;
   b5 = document.getElementById("b5").value;
   b6 = document.getElementById("b6").value;
   b7 = document.getElementById("b7").value;
   b8 = document.getElementById("b8").value;
   b9 = document.getElementById("b9").value;

   //let's define buttons to manipulate them.

    var btn1, btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9;

    btn1 = document.getElementById("b1");
    btn2 = document.getElementById("b2");
    btn3= document.getElementById("b3");
    btn4 = document.getElementById("b4");
    btn5 = document.getElementById("b5");
    btn6 = document.getElementById("b6");
    btn7 = document.getElementById("b7");
    btn8 = document.getElementById("b8");
    btn9 = document.getElementById("b9");

    // if X wins try to disable all other buttons
    //different aways X can win

    if((b1=='x'||b1=='X')&&(b2=='x'||b2=='X')&&(b3=='x'||b3=='X')){
        document.getElementById('print') .innerHTML = "Player X won"; 
        
        //disabling all other buttons
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
        
        //giving color to the buttons which made X win

        btn1.style.color = "red";
        btn2.style.color = "red";
        btn3.style.color = "red";
    }

    else if((b1=='x'||b1=='X')&&(b4=='x'||b4=='X')&&(b7=='x'||b7=='X')){
        document.getElementById('print').innerHTML = "Player X won";

        btn2.disabled = true;
        btn3.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;

        btn1.style.color = "red";
        btn4.style.color = "red";
        btn7.style.color = "red";

    }

    else if((b1=='x'||b1=='X')&&(b5=='x'||b5=='X')&&(b9=='x'||b9=='X')){
        document.getElementById('print').innerHTML = "Player X won";

        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;

        btn1.style.color = "red";
        btn5.style.color = "red";
        btn9.style.color = "red";

    }

    else if((b2=='x'||b2=='X')&&(b5=='x'||b5=='X')&&(b8=='x'||b8=='X')){
        document.getElementById("print").innerHTML = "Player X won";

        btn1.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn9.disabled = true;

        btn2.style.color = "red";
        btn5.style.color = "red";
        btn8.style.color = "red";
    }

    else if((b3=='x'||b3=='X')&&(b5=='x'||b5=='X')&&(b7=='x'||b7=='X')){
        document.getElementById("print").innerHTML = "Player X won";

        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn8.disabled= true;
        btn9.disabled = true;

        btn3.style.color = "red";
        btn5.style.color = "red";
        btn7.style.color = "red";
    }

    else if((b3=='x'|| b3=='X')&&(b6=='x'||b6=='X')&&(b9=='x'||b9=='X')){
        document.getElementById("print").innerHTML = "Player X won";

        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;

        btn3.style.color = "red";
        btn6.style.color = "red";
        btn9.style.color = "red";
    }
    
    else if((b4=='x'||b4=='X')&&(b5=='x'||b5=='X')&&(b6=='x'||b6=='X')){
        document.getElementById("print").innerHTML = "Player X won";

        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;

        btn4.style.color = "red";
        btn5.style.color = "red";
        btn6.style.color = "red";
    }

    else if((b7=='x'||b7=='X')&&(b8=='x'||b8=='X')&&(b9=='x'||b9=='X')){
        document.getElementById("print").innerHTML = "Player X won";

        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled= true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;

        btn7.style.color = "red";
        btn8.style.color = "red";
        btn9.style.color = "red"; 
    }

    // Checking of Player X finish 
    // Checking for Player 0 starts, Is player 0 won or 
    // not and after that disabled all the other fields.


    else if((b1=='o'||b1=='O')&&(b2=='o'||b2=='O')&&(b3=='o'||b3=='O')){
        document.getElementById('print') .innerHTML = "Player O won"; 
        
        //disabling all other buttons
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
        
        //giving color to the buttons which made X win

        btn1.style.color = "red";
        btn2.style.color = "red";
        btn3.style.color = "red";
    }

    else if((b1=='o'||b1=='O')&&(b4=='o'||b4=='O')&&(b7=='o'||b7=='O')){
        document.getElementById('print').innerHTML = "Player o won";

        btn2.disabled = true;
        btn3.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;

        btn1.style.color = "red";
        btn4.style.color = "red";
        btn7.style.color = "red";

    }

    else if((b1=='o'||b1=='O')&&(b5=='o'||b5=='O')&&(b9=='o'||b9=='O')){
        document.getElementById("print").innerHTML = "Player O won";

        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;

        btn1.style.color = "red";
        btn5.style.color = "red";
        btn9.style.color = "red";

    }

    else if((b2=='o'||b2=='O')&&(b5=='o'||b5=='O')&&(b8=='o'||b8=='O')){
        document.getElementById("print").innerHTML = "Player O won";

        btn1.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn9.disabled = true;

        btn2.style.color = "red";
        btn5.style.color = "red";
        btn8.style.color = "red";
    }

    else if((b3=='o'||b3=='O')&&(b5=='o'||b5=='O')&&(b7=='o'||b7=='O')){
        document.getElementById("print").innerHTML = "Player O won";

        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn8.disabled= true;
        btn9.disabled = true;

        btn3.style.color = "red";
        btn5.style.color = "red";
        btn7.style.color = "red";
    }

    else if((b3=='o'|| b3=='O')&&(b6=='o'||b6=='O')&&(b9=='o'||b9=='O')){
        document.getElementById("print").innerHTML = "Player O won";

        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;

        btn3.style.color = "red";
        btn6.style.color = "red";
        btn9.style.color = "red";
    }
    
    else if((b4=='o'||b4=='O')&&(b5=='o'||b5=='O')&&(b6=='o'||b6=='O')){
        document.getElementById("print").innerHTML = "Player O won";

        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;

        btn4.style.color = "red";
        btn5.style.color = "red";
        btn6.style.color = "red";
    }

    else if((b7=='o'||b7=='O')&&(b8=='o'||b8=='O')&&(b9=='o'||b9=='O')){
        document.getElementById("print").innerHTML = "Player O won";

        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled= true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;

        btn7.style.color = "red";
        btn8.style.color = "red";
        btn9.style.color = "red"; 
    }

    //let's write for tie scene

    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'|| b2 == 'O') && (b3 == 'X' || b3 == 'O') && 
        (b4 == 'X' || b4 == 'O') && (b5 == 'X' || 
            b5 == 'O') && (b6 == 'X' || b6 == 'O') && 
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' || 
            b8 == 'O') && (b9 == 'X' || b9 == 'O')) { 
        document.getElementById('print') .innerHTML = "Match Tie"; 
    }

    else{

        if(flag == 1){
            document.getElementById("print").innerHTML = "Player X Turn";
        }
        else{
            document.getElementById("print").innerHTML = "Player O Turn";
        }
    }
}

// function to reset the game

function myfunc1(){
    location.reload(); // it is used to reload the document.
    b1=b2=b3=b4=b5=b6=b7=b8=b9=' ';
}


//let's check the turn of the player through different functions

flag = 1;

function myfunc2(){
    if(flag==1){
        document.getElementById("b1").value  ='X';
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("b1").value = "O";
        document.getElementById("b1").disabled = true;
        flag=1;
    }
}

function myfunc3(){
    if(flag==1){
        document.getElementById("b2").value = 'X';
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("b2").value = 'O';
        document.getElementById("b2").disabled = true;
        flag=1;
    }
}

function myfunc4(){
    if(flag==1){
        document.getElementById("b3").value = 'X';
        document.getElementById("b3").disabled = true;
        flag=0;
    }
    else{
        document.getElementById("b3").value = 'O';
        document.getElementById("b3").disabled = true;
        flag=1;
    }
}

function myfunc5(){
    if(flag==1){
        document.getElementById("b4").value = 'X';
        document.getElementById("b4").disabled = true;
        flag=0;
    }
    else{
        document.getElementById("b4").value = 'O';
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}

function myfunc6(){
    if(flag==1){
        document.getElementById("b5").value = 'X';
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("b5").value = 'O';
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}

function myfunc7(){
    if(flag==1){
        document.getElementById("b6").value = 'X';
        document.getElementById("b6").disabled = true;
        flag=0;
    }
    else{
        document.getElementById("b6").value = 'O';
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}

function myfunc8(){
    if(flag==1){
        document.getElementById("b7").value = 'X';
        document.getElementById("b7").disabled = true;
        flag=0;
    }
    else{
        document.getElementById("b7").value = 'O';
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}

function myfunc9(){
    if(flag==1){
        document.getElementById("b8").value = 'X';
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("b8").value = 'O';
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}

function myfunc10(){
    if(flag == 1){
        document.getElementById("b9").value = 'X';
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("b9").value='O';
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}

