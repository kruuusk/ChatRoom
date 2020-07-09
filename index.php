<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>CHATROOM</title>
	<link id="pagcss" rel = "stylesheet" type = "text/css" href = "dark.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="chat.js"></script>
</head>
<body id="all">
	<div style="text-align: center;">
		<h1>CHATROOM CIRCUITO INFORMATICO</h1>
	    <div id="chat">
    	</div>
    	<select id="tema" name="tema">
    		<option value="chiaro">Light</option>
			<option value="scuro">Dark</option>
    	</select>
    </div>
	<button id="apri" type="button" class="open-button" onclick="openForm()">Open</button>
	<div class="chat-popup" id="myForm">
		<form class="form-container">
	    <label id="write" for="msg"><b>Write Msg</b></label>
	    <textarea id="msg" placeholder="Type message.." name="msg" required></textarea>
	    <button id="inv" type="button" class="btn" onclick="inviaMsg()">Send</button>
	    <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
	    <input type="color" id="miocolore">
	    <label id="av" for="img"><b>Avatar:</b></label>
	    <select id="img" name="img">
			<option value="male.jpg">Man</option>
			<option value="female.jpg">Woman</option>
			<option value="squalo.jpg">Shark</option>
			<option value="farfalla.jpg">Butterfly</option>
			<option value="auto.jpg">Sport Car</option>
			<option value="cane.jpg">Bulldog</option>
			<option value="delfino.jpg">Dolphin</option>
			<option value="moto.jpg">Cross Motorbike</option>
			<option value="pistola.jpg">Revolver</option>
			<option value="principessa.jpg">Princess</option>
		</select>
	    </form>
</body>
</html>