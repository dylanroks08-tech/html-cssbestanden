var random1 = Math.round(Math.random() * 99) + 1;

let icoon = document.getElementById('gamelogo');
let icoon2 = document.getElementById('gamelogo2');


window.onload = function randoo() {
 
    document.getElementById('change').innerHTML = random1;

    if(random1 >= 75 && random1 < 100 ) {

        icoon.style.display = 'block';

    }

    else if(random1 >= 50 && random1 < 75) {
     
     document.getElementById('gamelogo2').style.display = 'block';

    }
    else if(random1 >= 25 && random1 < 50) {
     
     document.getElementById('gamelogo3').style.display = 'block';

    }
    
    else if(random1 >= 0 && random1 < 25) {
     
     document.getElementById('gamelogo4').style.display = 'block';

    }

   else {
    
     icoon2.style.display = 'block';

   }

    console.log;

}

{
    setTimeout(myFunction, 10000);
    function myFunction() {
        document.getElementById("change2").style.display = "none";
        document.getElementById("achter2").style.display = "none";}
    }
