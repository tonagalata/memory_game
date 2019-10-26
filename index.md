<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
	<title>Memory Card Game</title>
	<style>
		header {
	background-color: #F15B31;
	color: #FFFFFF;
	padding: 30px 20px 30px 20px;
}

body {
	text-align: center;
}

h1 {
	font-family: "Raleway", sans-serif;
	font-weight: 400;
	color: #FFFFFF;
	letter-spacing: 1px;
	font-size: 45px; 
	margin: 0; 
}

a {
	font-family: "Raleway", sans-serif;
	color: #FFFFFF;
	letter-spacing: 1px;
	font-weight: 600;
	font-size: 18px; 
	text-decoration: none;
	text-transform: uppercase;
	margin-right: 20px;
	margin-left: 20px;
}

h2 {
	font-family: "Raleway", serif;
	color: #0D2C40;
	letter-spacing: 1px;
	font-weight: 600;
	font-size: 20px; 
	text-transform: uppercase;
}

p {
	font-family: "Droid Serif", serif;
	color: #0D2C40;
	line-height: 26px;
	font-size: 18px; 
}

nav {
	background-color: #00A6B3;
	color: #FFFFFF;
	padding-top: 20px 20px;
}


main {
	width: 850px;
	margin: 35px auto;
}

img {
	margin: 40px 8px 8px;
}

footer {
	text-transform: uppercase;
	padding-right: 20px;
	padding-left: 20px;
	background-color: #0D2C40;
	color: #FFFFFF;
	font-size: 14px;
	letter-spacing: .08em;
	font-weight: 500;
}

.copyright {
	float: left;
}

.message {
	float: right;
}

.name {
	color: #F15B31;
	font-weight: 700;
}

a:hover {
	border-bottom: 2px solid transparent;
}



a:hover {
	color: #00A6B3;
	background-color: #FFFFFF;
}
	</style>
</head>
<body>
	<header>
	<h1>Memory Game</h1>
	</header>
		<nav>
		<a href="#">Instructions</a>
		<a href="#">Game</a>
		</nav>
	<main>	
	<h2>Instructions</h2>
	<p>Concentration, also known as Match Match, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs, is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards.</p>	

	<div id="game-board" class="board clearfix"></div>

	</main>
	<footer>
		<p class="copyright">Copyright 2017</p>
		<p class="message">
			Created with &hearts; by <span class="name">GA</span>
		</p>
	</footer>
	<script src="js/main.js"></script>
</body>
</html>
