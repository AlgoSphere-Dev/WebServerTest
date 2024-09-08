var randomNumber = 0;
function change() {
	randomNumber = Math.floor(Math.random() * 1000) + 1;
	loc.style.top = randomNumber;
	randomNumber = Math.floor(Math.random() * 1000) + 1;
	loc.style.left = randomNumber;
}