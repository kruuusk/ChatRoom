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

	$sql = "SELECT * FROM messaggi;";
	$result = mysqli_query($conn, $sql);
	/*if (!$result) {
    printf("Error: %s\n", mysqli_error($conn));
	}*/

	$string = "[";
	while ($row = mysqli_fetch_array($result)){
		$string = $string . '{"mittente" : "'. $row["mittente"] .'", "testo" : "' . $row["testo"] .'", "colore" : "' . $row["colore"] . '" , "avatar" : "' . $row["avatar"] . '" , "tempo" : "' . $row["tempo"] . '"},';
	}
	mysqli_close($conn);
	$string = rtrim($string, ",");
	$string = $string . ']';
	echo $string;
?>