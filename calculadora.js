/*$(document).ready(function() { // document ready = cuando el documento esta listo
    jQuery('#calcula').on('click', function miFunc() {
        jQuery("#msg").val(parseInt(jQuery("#name").val()) * parseInt(jQuery("#mail").val()));
    })
});*/


//(function() {
// your page initialization code here
// the DOM will be available here
//document.getElementById("calcula");
//document.getElementById("calcula");
//console.log(document.getElementById("numone"));
//console.log(document.getElementById("numtwo"));
//return numone * numtwo;
//})();

function Suma() {
    var one = document.getElementById("numone").value;
    var two = document.getElementById("numtwo").value;
    //var three = parseFloat(one) / parseFloat(two);
    //document.getElementById("Resultado").value = three;

    var opera = document.getElementById("operaciones").value;
    console.log(opera);

    if (opera == "Suma") {
        var one = document.getElementById("numone").value;
        var two = document.getElementById("numtwo").value;
        var threes = parseFloat(one) + parseFloat(two);
        document.getElementById("Resultado").value = threes;

        //... 
    }

    if (opera == "Resta") {
        var one = document.getElementById("numone").value;
        var two = document.getElementById("numtwo").value;
        var threer = parseFloat(one) - parseFloat(two);
        document.getElementById("Resultado").value = threer;

        //... 
    }
    console.log(opera)
    if (opera == "Multiplicación") {
        var one = document.getElementById("numone").value;
        var two = document.getElementById("numtwo").value;
        var threem = parseFloat(one) * parseFloat(two);
        document.getElementById("Resultado").value = threem;

        //... 
    }

    if (opera == "División") {
        var one = document.getElementById("numone").value;
        var two = document.getElementById("numtwo").value;
        //var threed = parseFloat(one) / parseFloat(two);
        if (two == 0) {
            document.getElementById("Resultado").value = "No está definido";

        } else {
            var threed = parseFloat(one) / parseFloat(two);

            document.getElementById("Resultado").value = threed;

        }
    }
    //... 





    //var three = document.getElementById("msg").value;
    //var resul = one + two;
    //var resultado = document.getElementById('msg').value;
    //document.getElementById('three').value;
    //console.log(parseFloat(one) + parseFloat(two));
}