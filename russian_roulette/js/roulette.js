/*
this is an exercise done for Encora https://www.stedelijkonderwijs.be/encora
the skeleton of the exercise was provided by them
the rest I did
*/
//pointer animation
        var point = document.querySelector("#arrow");
        var msg = document.querySelector("#explanation");
         point.addEventListener("animationend", removePointIt);

        function removePointIt(evt) {
            point.classList.add("remove");
            msg.classList.add("remove");
        }

        var trigger = document.querySelector("#trigger_trigger");
        var feedBack = document.querySelector("#feedBack");
        var huidigePoging = 0;
        var kamers = [false, false, false, false, false, false];


         //kogel in random kamer plaatsen
        //you should have 7 to choose a number between 0 and 
        var willekeurig = Math.floor(Math.random() * 6);
        kamers[willekeurig] = true;

         //schiet Mechaniek
        trigger.addEventListener("click", slide);
        console.log(willekeurig+1);
         //shoot id
        var select = document.querySelector("#trigger_trigger");
        var slide = document.querySelector("#gun_slide");
        var hammer = document.querySelector("#gun_hammer");

        function slide(evt) {
            //slide
            slide.classList.add("slideGun");
            hammer.classList.add("slideHammer");
            slide.addEventListener("animationend", removeSlide);
            slide.addEventListener("animationend", schiet);
        }

        function schiet(evt) {
            //shoot ani
            select.classList.add("shootAni");
            select.addEventListener("animationend", removeAni);
            select.addEventListener("animationend", check);
        }

        function removeSlide() {
            slide.classList.remove("slideGun");
            hammer.classList.remove("slideHammer");
        }

        function removeAni() {
            select.classList.remove("shootAni");
        }

        var flag = document.querySelector("#flag");

        function check() {
            var heeftKogel = kamers[huidigePoging];
            audioFile = document.getElementById('clickSound');
            audioFile2 = document.getElementById('bangSound');
            if (heeftKogel == true) {
                //dood
                feedBack.innerHTML = "<strong>BANG!!!</strong><p>Refresh to play again or <span style='color:red'><b>click on the trigger</b></span></p>";
                flag.classList.add("flagAni");
                flag.addEventListener("animationend", showFlag);

            } else {
                //leven
                feedBack.innerHTML = "click " + (huidigePoging+1);

                audioFile.load();
                audioFile.play();
            }

            huidigePoging++;

        }

        function showFlag(evt) {

            audioFile2.play();
            document.getElementById('flag').style.setProperty("width", "269px");
            document.getElementById('flag').style.setProperty("left", "144px");
            flag.classList.remove("flagAni");
            flagMsg.classList.add("flagLastAni");
            flagMsg.addEventListener("animationend", showBang);

        }
        var bang = document.querySelector("#bang");

        function showBang(evt) {
            bang.classList.add("bangAni");

            bang.addEventListener("animationend", rewind);
        }

        function rewind() {
            console.log('rewind');
            slide.addEventListener("animationend", removeBang);
        }

        function removeBang(evt) {

            bang.classList.remove("bangAni");
            bang.classList.add("bangAniBack");
            bang.addEventListener("animationend", flagMsg.classList.add("flagLastAniRewind"));
            //return to first situation, let the flag goes back inside the gun
            var pos = 144;
            var myWidth = 269;
            var id = setInterval(frame, 5);

            function frame() {
                if (pos == 4) {
                    clearInterval(id);
                } else {
                    pos--;
                    myWidth--;
                    document.getElementById('flag').setAttribute("style", "width:" + myWidth + "px");
                    flag.style.left = pos + 'px';
                }

            }
            init();

        }

         //resetKnop:
        function init() {
            console.log("begin");
            /*
            originally was:
            
            huidigePoging = 0;

            kamers = [false, false, false, false, false, false];
            var willekeurig = Math.floor(Math.random() * 6);
            kamers[willekeurig] = true;
            */
            
            //reset
            delay(function() {
                window.location.href = window.location.href;
            }, 1000); // end delay

        }
         //time out function
         //https://stackoverflow.com/questions/14226803/javascript-wait-5-seconds-before-executing-next-line
        var delay = (function() {
            var timer = 0;
            return function(callback, ms) {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            };
        })();