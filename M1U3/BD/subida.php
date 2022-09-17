<?php

$host= "localhost";
$usuario = "root";
$clave = "";
$bd = "formulario";

$conexion = mysqli_connect($host, $usuario,$clave,$bd)
or die(mysqli_error($mysquli));

if($conexion)
{ echo "Conectado";}
else{
	echo "No se pudo conectar";
}

$Nombre = $_POST['Nombre'];
$Apellido = $_POST['Apellido'];
$Telefono = $_POST['Telefono'];

$consulta = "INSERT INTO consultascv(Nombre, Apellido, Telefono) 
VALUES ('$Nombre','$Apellido','$Telefono')";

mysqli_query($conexion,$consulta);
mysqli_close($conexion);

?>