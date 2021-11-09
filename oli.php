<?php

	$signo = "*";
	$a=3;
	$b=6;
	$resultado = eval("return ".$a.$signo.$b." ;");

    echo '<input type="text" name="prueba">' ;

    


    echo '<br>'.$a;
    
    echo '<br>'.$b; 

    echo '<br>'.$resultado;

?>

