/*
made for encora
https://www.stedelijkonderwijs.be/encora
the code and the game logic should be rewritten
*/
var huidigeVraag = -1;
var personen = document.querySelectorAll('.persoon');
var myTools = document.querySelectorAll('.tool');
//<div class="gallery-tools" id="tools-villains">
var myQuestions = document.querySelectorAll('.gallery-tools');
var fouten = 0;
var myMsg = "";
var personage, weapon;
var punten = 0;
var wrongTool = 0;
var toolAnswered = false;
var villainAnswered = false;
var conto = 0;
//personages
var hitler = document.querySelector("#hitler");
var mao = document.querySelector("#mao");
var leo = document.querySelector("#leo");
var jason = document.querySelector("#jason");
var stalin = document.querySelector("#stalin");
var bart = document.querySelector("#bart");
//tools
var gas = document.querySelector("#gas");
var kapmes = document.querySelector("#kapmes");
var boek = document.querySelector("#boek");
var bijl = document.querySelector("#bijl");
var prikkeldraad = document.querySelector("#prikkeldraad");
var cola = document.querySelector("#cola");

//<h1 id="h1-gereedschappen" class="verborgen"> 
var h1gereedschappen = document.querySelector("#h1gereedschappen");

var schurken = [{
    naam: "hitler",
    tool: "gas",
    vraag: "v001"
        }, {
    naam: "mao",
    tool: "boek",
    vraag: "v002"
        }, {
    naam: "leo",
    tool: "kapmes",
    vraag: "v003"
        }, {
    naam: "jason",
    tool: "bijl",
    vraag: "v004"
        }, {
    naam: "stalin",
    tool: "prikkeldraad",
    vraag: "v005"
        }, {
    naam: "bart",
    tool: "cola",
    vraag: "v006"
        }];


/*
 
 shuffle elements
        
 */
function shuffle(array) {
    for (var i = array.length; i > 1; i--) {
        var r = Math.floor(Math.random() * i);
        var temp = array[r];
        array[r] = array[i - 1];
        array[i - 1] = temp;
    }
}
//array of villains reordered
shuffle(schurken);
//randomize div order
function randomizeDivs(j) {

    var list = document.querySelector(j),
        i;
    for (i = list.children.length; i >= 0; i--) {
        list.appendChild(list.children[Math.random() * i | 0]);
    }

}
randomizeDivs("#villains");
randomizeDivs("#tools-villains");


volgendeVraag();

//next question
function volgendeVraag() {
    //toolAnswered = false;
    //villainAnswered = false;
    randomizeDivs("#villains");
    randomizeDivs("#tools-villains");
    prikkeldraad.classList.add("verborgen");
    boek.classList.add("verborgen");
    gas.classList.add("verborgen");
    bijl.classList.add("verborgen");
    cola.classList.add("verborgen");
    kapmes.classList.add("verborgen");
    h1gereedschappen.classList.add("verborgen");


    huidigeVraag++;
    console.log("huidigeVraag " + huidigeVraag);
    var showDiv = schurken[huidigeVraag];
    console.log(showDiv);

    //create array from classes
    var myVraag = document.querySelectorAll(".vraag");
    var arr = Array.from(myVraag);

    //stop if all the questions are finished,
    //showDiv is undefined
    if (arr.length == huidigeVraag) {

        //reset errors
        divs = personen, i;

        for (i = 0; i < divs.length; ++i) {
            divs[i].removeEventListener("click", looseIt);
        }
        //end game

        //

        return;
    }

    if (showDiv.vraag == "v001") {
        verborgeAlle();
        arr[0].classList.remove("verborgen");
        hitler.addEventListener("click", persoonKlik);
        gas.addEventListener("click", toolKlik);
        personage = "hitler";
        weapon = "gas";
        looseExcept(personage, personen, looseIt);
        looseExcept(weapon, myTools, looseItTool);
    }

    if (showDiv.vraag == "v002") {
        verborgeAlle();
        arr[1].classList.remove("verborgen");
        mao.addEventListener("click", persoonKlik);
        boek.addEventListener("click", toolKlik);
        personage = "mao";
        weapon = "boek";
        looseExcept(personage, personen, looseIt);
        looseExcept(weapon, myTools, looseItTool);
    }

    if (showDiv.vraag == "v003") {
        verborgeAlle();
        arr[2].classList.remove("verborgen");
        leo.addEventListener("click", persoonKlik);
        kapmes.addEventListener("click", toolKlik);
        personage = "leo";
        weapon = "kapmes";
        looseExcept(personage, personen, looseIt);
        looseExcept(weapon, myTools, looseItTool);
    }
    if (showDiv.vraag == "v004") {
        verborgeAlle();
        arr[3].classList.remove("verborgen");
        jason.addEventListener("click", persoonKlik);
        bijl.addEventListener("click", toolKlik);
        personage = "jason";
        weapon = "bijl";
        looseExcept(personage, personen, looseIt);
        looseExcept(weapon, myTools, looseItTool);
    }
    if (showDiv.vraag == "v005") {
        verborgeAlle();
        arr[4].classList.remove("verborgen");
        stalin.addEventListener("click", persoonKlik);
        prikkeldraad.addEventListener("click", toolKlik);
        personage = "stalin";
        weapon = "prikkeldraad";
        looseExcept(personage, personen, looseIt);
        looseExcept(weapon, myTools, looseItTool);
    }
    if (showDiv.vraag == "v006") {
        verborgeAlle();
        arr[5].classList.remove("verborgen");
        bart.addEventListener("click", persoonKlik);
        cola.addEventListener("click", toolKlik);
        personage = "bart";
        weapon = "cola";
        looseExcept(personage, personen, looseIt);
        looseExcept(weapon, myTools, looseItTool);
    }

}

//end volgende vraag

function looseExcept(myDiv, myclass, myFunct) {

    divs = myclass, i;

    for (i = 0; i < divs.length; ++i) {
        if (divs[i].id != myDiv) {
            divs[i].addEventListener("click", myFunct);
        }
    }
}

function looseIt(evt) {
    document.querySelector("#punten").innerHTML = "Fouten: ";
    fouten++;
    document.querySelector("#punten").innerHTML += fouten + " (" + evt.currentTarget.id + "), probeer opnieuw";
    //reset fout function for this question
    console.log("**** FOUT: " + fouten + " *****");
    evt.currentTarget.removeEventListener("click", looseIt);

}

function looseItTool(evt) {
    wrongTool++;
    document.querySelector("#punten").innerHTML = evt.currentTarget.id + ": verkeerd gereedschap (" + wrongTool + "), maar we tellen het niet als een fout; probeer opnieuw";
    evt.currentTarget.removeEventListener("click", looseItTool);

}

//not used
function verborgeAlle() {
    var alle = document.querySelectorAll(".vraag");
    for (i = 0; i < alle.length; i++) {
        alle[i].classList.add("verborgen");
    }
}
//clik op tool
function toolKlik(evt) {
    conto++;
    toolAnswered = true;
    window[weapon].removeEventListener("click", toolKlik);
    divs = myTools, i;

    for (i = 0; i < divs.length; ++i) {
        divs[i].removeEventListener("click", looseItTool);
    }
    document.querySelector("#punten").innerHTML = evt.currentTarget.id + ", inderdaad";
    //check if the tool is found, if it is go to next question

    if (villainAnswered) {

        toolAnswered = false;
        volgendeVraag();
    } else {
        document.querySelector("#punten").innerHTML += "; maar je moet ook op de andere vraag antwoorden"
    }

    checkEnd();

}
//clik op persoon
function persoonKlik(evt) {
    console.log(personage);
    conto++;
    villainAnswered = true;
    window[personage].removeEventListener("click", persoonKlik);

    divs = personen, i;

    for (i = 0; i < divs.length; ++i) {
        divs[i].removeEventListener("click", looseIt);
    }
    //show tools
    prikkeldraad.classList.remove("verborgen");
    boek.classList.remove("verborgen");
    gas.classList.remove("verborgen");
    bijl.classList.remove("verborgen");
    cola.classList.remove("verborgen");
    kapmes.classList.remove("verborgen");
    h1gereedschappen.classList.remove("verborgen");
    /*
    <div class="tool verborgen" id= "prikkeldraad" data-tool="prikkeldraad">
    */


    //check if the question relative of the tools is been answered
    if (toolAnswered) {
        villainAnswered = false;
        volgendeVraag();
    }
    //increase score
    punten++;
    document.querySelector("#punten").innerHTML = "Punten: " + punten;

    //more feedback

    if (punten < schurken.length) {
        document.querySelector("#punten").innerHTML += "(" + evt.currentTarget.id + "), bravò";
        //check if there's still the other question
        if (toolAnswered == false) {

            document.querySelector("#punten").innerHTML += "; maar je moet ook op de andere vraag antwoorden";
        } else {

        }

    }

    //end game check results
    else if (punten = schurken.length && toolAnswered == true) {

        document.querySelector("#punten").innerHTML += ", and done!";
        if (fouten > schurken.length) {

            myMsg = " Je verliest, je kan maximum " + schurken.length + " fouten maken. (" + (fouten) + " fouten gemaakt)";
            document.querySelector("#punten").innerHTML += myMsg;
        } else {
            myMsg = " Je hebt gewonnen.";
            document.querySelector("#punten").innerHTML += myMsg;
        }

    }

    checkEnd();
}
/**/
function checkEnd() {
    if (conto == 11) {

        document.querySelector("#punten").innerHTML += ", nog een...";

    }

    // 
    if (conto >= (schurken.length * 2)) {


        document.querySelector("#punten").innerHTML += ", and done!";
        if (fouten > schurken.length) {

            myMsg = " Je verliest, je kan maximum " + schurken.length + " fouten maken. (" + (fouten) + " fouten gemaakt)";
            document.querySelector("#punten").innerHTML += myMsg;
        } else {
            myMsg = " Je hebt gewonnen.";
            document.querySelector("#punten").innerHTML += myMsg;
        }

    }

}