var btn = document.querySelector("#Go");    
btn.addEventListener("click", spin);  
var mySpinner = document.querySelector("#spinner");
mySpinner.style.transform = "rotate(" + 360 + "deg)";

function spin(evt) { 
    console.log('spin'); 
    var mySquare = document.querySelector("#square_1");
    mySquare.style.backgroundColor = "#e37575";
    var mySquare4 = document.querySelector("#square_4");
    mySquare4.style.backgroundColor = "#e37575";
    var mySquare3 = document.querySelector("#square_3");
    mySquare3.style.backgroundColor = "grey";
    var mySquare2 = document.querySelector("#square_2");
    mySquare2.style.backgroundColor = "grey";


    var mySquare4 = document.querySelector("#square_4");
    var min = 0;
    var max = (360 * 2);
    var myRandom = min + Math.random() * (max - min);
    console.log(myRandom);

    mySpinner.style.transform = "rotate(" + myRandom + "deg)";


    if (myRandom > 360.0) {
        var r = 360.0;
    } else {
        r = 0.0;
    }
    console.log(r);

    if (myRandom >= (266.0 + r) && myRandom <= (360.0 + r)) {
        mySquare2.style.backgroundColor = "#69f007";
    }
    if (myRandom >= (176.0 + r) && myRandom <= (265.0 + r)) {
        mySquare.style.backgroundColor = "#69f007";
    }
    if (myRandom >= (94.0 + r) && myRandom <= (175.0 + r)) {
        mySquare3.style.backgroundColor = "#69f007";
    }
    if (myRandom >= (1.0 + r) && myRandom <= (93.0 + r)) {
        mySquare4.style.backgroundColor = "#69f007";
    }

}