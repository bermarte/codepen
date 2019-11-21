window.onload = canvas;

function canvas() {
    const c = document.getElementById("mijn_canvas");
    const ctx = c.getContext("2d");
    //mouse x position
    let mxPos = 0;
    let speed = 0;
    //counter to loop the animation
    let count = 0;
    //score
    let total = 0;
    //landing point
    let sizeOfBase = 120;
    let winning = false;
    //parachute's data
    const height_parachute = 88;
    //distance between the two parts of the parachute
    const distanceBetween = 40;
    //match x position of the parachute with the x pos of the landing point
    const correction = 55;
    /*
    permission:  making the game simpler or hader to play
    the bigger is this number the easier is to play
    a given number is needed when the parachute touches the
    landing point (permission is to increase the width of the landing point's
    surface without changing its appearence )
    */
    const permission = 65;
    //the speed is increasing until the maximum is reached then starts from 1 again
    const numberOfRepetitions = 15;


    //detect movement of the mouse
    c.addEventListener('mousemove', mouseMove, false);
    function mouseMove(evt) {

        mxPos = evt.clientX - c.offsetLeft;//500; //c.offsetLeft;
        myPos = evt.clientY - c.offsetTop;
        //console.log('xPos = ' + mxPos);
        //console.log('yPos = ' + myPos);

    }

    //score
    function score(txt) {

        ctx.beginPath();
        ctx.font = "18px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(txt, 10, 25);

    }
    //part of the parachute
    function circle(x, y, r, s) {

        ctx.beginPath();
        ctx.arc(x, y, r, s, 2 * Math.PI, false);
        ctx.fillStyle = 'white';
        ctx.fill();

    }
    //the top of the parachute
    function half_circle(x, y, r, s) {

        ctx.beginPath();
        ctx.arc(x, y, r, s, Math.PI, true);
        ctx.fillStyle = 'white';
        ctx.fill();

    }
    //graphic element
    function base(x, y, lx, ly, lw, lc) {

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(lx, ly);
        ctx.lineWidth = lw;
        ctx.strokeStyle = lc;
        ctx.stroke();

    }
    function randomNum(min, max){

        let num = Math.round((Math.random()* (max-min))+min);
        return num;
        //return 100; for debug purposes, comment the previous two lines

    }
    //parachute
    function parachute() {

        if (speed <= 0){
            xNum = randomNum(0,c.width);
            count++;
            //restart speed
            if (count == numberOfRepetitions)count = 0;

         }
        circle(xNum, speed, 30, 0);
        half_circle(xNum, speed - distanceBetween, 45, 0);


        speed +=count;
        if (speed >= c.height+height_parachute){
            speed = 0;
            checkTotal();
        }

    }
    //left and right bounds of the landing point
    function moveSquare() {

        if (mxPos <= 0) {
            mxPos = 0;
        }

        if (mxPos >= c.width - sizeOfBase) {
            mxPos = c.width - sizeOfBase;
        }
        

    }

    //erase the screen
    function clearScreen() {

        ctx.clearRect(0, 0, c.width, c.height);

    }
    //move the landing point on the bottom
    function MovingBase(){

        moveSquare();
        ctx.rect(mxPos, c.height - 10, sizeOfBase, 10);
        ctx.fill();

    }
    //check if the parachute hits the landing point
    function Touch(){

      if (speed >= c.height ){

          //console.log('touched the ground');

          let fixedMxPos = mxPos+correction;

          //console.log('xNum '+ xNum);
          //console.log('mxPos '+ fixedMxPos);

          /*
          the landing point should contain the parachute when the parachute touches the ground
          (when the center of the full circle is on the edge of the canvas)
          */
          if ((fixedMxPos > (xNum-permission)) &&
               !(fixedMxPos >= (xNum+permission))) {

              winning = true;
          }
          else{
              winning = false;
          }
      }
    }
    //increase total
    function checkTotal(){
        if (winning)total++;
    }
    function game() {

        window.requestAnimationFrame(game);
        //empty the canvas
        clearScreen();
        //red line in the middle
        base(c.width / 2, 0, c.width / 2, c.height, 3, "red");

        //calling the functions
        MovingBase();
        parachute();

        score('score = ' + total);
        Touch();

    }

    game();

}
