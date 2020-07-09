<?php 
	$servername = "fojvtycq53b2f2kx.chr7pe7iynqr.eu-west-1.rds.amazonaws.com"; 
	$username = "rxeeyoap67ysplfl"; 
	$password = "ru5g0dzzviskbsae"; 
	$dbname = "ak673gk7lr9jlck7";

	$conn= mysqli_connect($servername, $username, $password, $dbname);
			// RICHIAMA CONNESSIONE DATABASE 
	if (!($conn)) {
		die("Errore di connessione DB");
	}
	$mittente = $_POST["mittente"];
	$testo = $_POST["testo"];
	$colore = $_POST["colore"];
	$avatar = $_POST["foto"];

	$sql = "INSERT INTO `messaggi` (`id`, `mittente`, `testo`, `colore`, `avatar`) VALUES (NULL, '" . $mittente . "', '" . $testo . "', '" . $colore . "', '" . $avatar . "');";
	$result = mysqli_query($conn, $sql);

	mysqli_close($conn);
?>