var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btnRandom = document.querySelector("#btnRandom");

// function gets data from the CSS Stylesheet, this is used to read the bg color value
function getStyle(className) {
    var cssText = "";
    var classes = document.styleSheets[0].rules || document.styleSheets[0].cssRules;
    for (var i = 0; i < classes.length; i++) {        
        if (classes[i].selectorText == className) {
            cssText += classes[i].cssText || classes[i].style.cssText;
        }         
	}
	// returns the whole cssText but shorten to get only data needed 
	return cssText.substring(cssText.search("linear"), cssText.length-2);
}

getStyle('body');
// write to the h3 tag 
document.querySelector("h3").innerHTML = getStyle('body');

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function randomColorBG(e){
	var hex1 = '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
	var hex2 = '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
	var hex3 = '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
	color1.value = hex1;
	color2.value = hex2;
	body.style.background = "linear-gradient(to right, " + hex1 + ", " + hex2 + ")";
	// btnRandom.style.background = "linear-gradient(to right, " + hex1 + ", " + hex2 + ")";
	btnRandom.style.borderColor = hex2;
	// btnRandom.style.boxShadow = "0px 5px 25px " + hex3;
	css.textContent = body.style.background + ";";
}

btnRandom.addEventListener("click", randomColorBG);

// 1. Write code so that the colour inputs match the background generated on the first page load. 

// 2. Display the initial CSS linear gradient property on page load.

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.