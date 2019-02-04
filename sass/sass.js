let box = document.querySelectorAll('div.box');

        box.forEach(function(element) {
            element.addEventListener("click", function() {
                this.classList.add('clicked');
            });
        });

        /* 
        //Jquery:
        $(document).ready(function(){
            $('.box').click(function(){
                $(this).addClass("clicked"); 
            });
        });
        */