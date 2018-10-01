    var bunny = document.querySelector("#bunny");
    //begin max: 90vw 85vh
    //middle is 45vw 42.5vh
    bunny.style.transform = "translate(45vw, 76vh)";
    //hover   
    bunny.addEventListener("mouseover", moveIt);

    function moveIt() {

        move_x = Math.random() * 90;
        move_y = Math.random() * 85;
        bunny.style.transform = "translate(" + move_x + "vw, " + move_y + "vh)";

    }