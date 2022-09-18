<?php

$host = "localhost";
$usuario = "root";
$clave = "";
$bd = "fullstack";

$conexion = mysqli_connect($host, $usuario, $clave, $bd)
	or die(mysqli_error($mysquli));

if ($conexion) {
	echo "Conectado";
} else {
	echo "No se pudo conectar";
}

$Nombre = $_POST['Nombre'];
$Apellido = $_POST['Apellido'];
$Telefono = $_POST['Telefono'];
$resultado = 0;

if (isset($_POST['Enviar'])) {
	if (strlen($_POST['Nombre']) >= 1 && strlen($_POST['Apellido']) >= 1 && strlen($_POST['Telefono']) >= 1) {
		$consulta = "INSERT INTO consultascv(Nombre, Apellido, Telefono) VALUES ('$Nombre','$Apellido','$Telefono')";
		$resultado = mysqli_query($conexion, $consulta);
	}
}

if ($resultado) {
?>
	<h3>Te has inscripto correctamente!!</h3>
<?php
} else {
?>
	<h3>Debe completar todos los campos</h3>
<?php
}

mysqli_close($conexion);

?>