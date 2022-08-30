function start() {
    var dis = document.getElementById("first-page").style.display = 'block';
    var hide = document.getElementById("first-box").style.display = 'none'

}
function secondques() {
    var hide = document.getElementById("first-box").style.display = 'none';
    var dis = document.getElementById("first-page").style.display = 'none';
    var sec = document.getElementById("second-page").style.display = 'block';
}
var score = 0;
function check(correctone) {
    switch (correctone) {
        case 28:
            document.getElementById("opt1").style.backgroundColor = 'green';
            document.getElementById("hd").style.display = "block";

            score = score + 1;
            document.getElementById("score-box").innerHTML = " Welldone !your score is" + score;

            document.getElementById("score-box").style.display = "block";

            break;
        case 30:
            document.getElementById("opt2").style.backgroundColor = 'red';
            break;
        case 90:
            document.getElementById("opt3").style.backgroundColor = 'red';
            break;
        case 20:
            document.getElementById("opt4").style.backgroundColor = 'red';
            break;

    }

}
function check2(correct) {
    switch (correct) {
        case 1:
            document.getElementById("op1").style.backgroundColor = 'green';
            document.getElementById("hd").style.display = "block";

            score = score + 1;


            document.getElementById("score-box").innerHTML = "Welldone! Your score is" + score;
            document.getElementById("score-box").style.display = "block";


            break;
        case 2:
            document.getElementById("op2").style.backgroundColor = 'red';
            break;
        case 3:
            document.getElementById("op3").style.backgroundColor = 'red';
            break;
        case 4:
            document.getElementById("op4").style.backgroundColor = 'red';
            break;

    }
}

function thirdques() {
    var hide = document.getElementById("first-box").style.display = 'none';
    var dis = document.getElementById("first-page").style.display = 'none';
    var sec = document.getElementById("second-page").style.display = 'none';
    var third = document.getElementById("third-page").style.display = 'block';

}
// function for marking right option for mcq3
function check3(correct) {
    switch (correct) {
        case 10:
            document.getElementById("o1").style.backgroundColor = 'green';
            document.getElementById("hd").style.display = "block";
            score = score + 1;
            document.getElementById("score-box").innerHTML = "Welldone Your score is" + score;
            document.getElementById("score-box").style.display = "block";
            break;
        case 20:
            document.getElementById("o2").style.backgroundColor = 'red';
            break;
        case 30:
            document.getElementById("o3").style.backgroundColor = 'red';
            break;
        case 40:
            document.getElementById("o4").style.backgroundColor = 'red';
            break;
    }


}
function fourthques() {
    var hide = document.getElementById("first-box").style.display = 'none';
    var dis = document.getElementById("first-page").style.display = 'none';
    var sec = document.getElementById("second-page").style.display = 'none';
    var third = document.getElementById("third-page").style.display = 'none';
    var fourth = document.getElementById("fourth-page").style.display = 'block';

}
function check4(correct) {
    switch (correct) {
        case 1:
            document.getElementById("on1").style.backgroundColor = 'green';
            document.getElementById("hd").style.display = "block";
            score = score + 1;
            
            document.getElementById("score-box").innerHTML = "Welldone! Your score is" + score;
            document.getElementById("score-box").style.display = "block";
            break;
        case 2:
            document.getElementById("on2").style.backgroundColor = 'red';
            break;
        case 3:
            document.getElementById("on3").style.backgroundColor = 'red';
            break;
        case 4:
            document.getElementById("on4").style.backgroundColor = 'red';
            break;
    }
}


function fifthques() {
    var hide = document.getElementById("first-box").style.display = 'none';
    var dis = document.getElementById("first-page").style.display = 'none';
    var sec = document.getElementById("second-page").style.display = 'none';
    var third = document.getElementById("third-page").style.display = 'none';
    var fourth = document.getElementById("fourth-page").style.display = 'none';
    var fifth = document.getElementById("fifth-page").style.display = 'block';


}
function check5(correct) {
    switch (correct) {
        case 1:
            document.getElementById("optn1").style.backgroundColor = 'green';
            document.getElementById("hd").style.display = "block";
            score = score + 1;
            document.getElementById("score-box").innerHTML = " Welldone! Your score is" + score + "<br> you have completed the quiz  ";
            document.getElementById("score-box").style.display = "block";
       
            break;
        case 2:
            document.getElementById("optn2").style.backgroundColor = 'red';
            break;
        case 3:
            document.getElementById("optn3").style.backgroundColor = 'red';
            break;
        case 4:
            document.getElementById("optn4").style.backgroundColor = 'red';
            break;
    }

}
function viewresult() {
    var hide = document.getElementById("first-box").style.display = 'none';
    var dis = document.getElementById("first-page").style.display = 'none';
    var sec = document.getElementById("second-page").style.display = 'none';
    var third = document.getElementById("third-page").style.display = 'none';
    var fourth = document.getElementById("fourth-page").style.display = 'none';
    var fifth = document.getElementById("fifth-page").style.display = 'none';
    document.getElementById("score-box").style.display='none';
    document.getElementById("my_table").style.display = "block";
    document.getElementById("fr").style.display="block";
    document.getElementById("obtained_score").innerHTML=score;
    if(score==5){
        document.getElementById("perc").innerHTML=100 + "%";
    }
    else if(score==4){
        document.getElementById("perc").innerHTML=80 + "%";

    }
    else if(score==3){
        document.getElementById("perc").innerHTML=60 + "%";

    }
    else if(score==2){
        document.getElementById("perc").innerHTML=40 + "%";

    }
    else{
        document.getElementById("perc").innerHTML=20 + "%";
        
    }
  
    

  





}