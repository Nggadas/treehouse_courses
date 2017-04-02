
function number1() {

    // Get the modal
    var modal1 = document.getElementById('aida1');

    // Get the button that opens the modal
    var btn1 = document.getElementById("aida");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn1.onclick = function first() {
        modal1.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function second() {
        modal1.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function third(event1) {
        if (event1.target == modal1) {
            modal1.style.display = "none";
        }
    }
}

/////////////////////////////////////////////////////////
function number2() {

    // Get the modal
    var modal2 = document.getElementById('memo1');

    // Get the button that opens the modal
    var btn2 = document.getElementById("memo");

    // Get the <span> element that closes the modal
    var span2 = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn2.onclick = function() {
        modal2.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span2.onclick = function() {
        modal2.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event2) {
        if (event2.target == modal2) {
            modal2.style.display = "none";
        }
    }
}

/////////////////////////////////////////////////////////
function number3() {

    // Get the modal
    var modal3 = document.getElementById('messi1');

    // Get the button that opens the modal
    var btn3 = document.getElementById("messi");

    // Get the <span> element that closes the modal
    var span3 = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn3.onclick = function third() {
        modal3.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span3.onclick = function third() {
        modal3.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function third(event3) {
        if (event3.target == modal3) {
            modal3.style.display = "none";
        }
    }
}