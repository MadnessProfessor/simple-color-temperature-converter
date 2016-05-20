"use strict";
function convert()
{
	let RGB = colorTemperatureToRGB(parseFloat(document.getElementById('textField').value)).r.toFixed().toString() + ', ' + colorTemperatureToRGB(parseFloat(document.getElementById('textField').value)).g.toFixed().toString() + ', ' + colorTemperatureToRGB(parseFloat(document.getElementById('textField').value)).b.toFixed().toString();
	console.log(RGB);
	document.getElementById('output').innerHTML = 'RGB (dec) = ' + RGB + '<br>RGB (hex) = ' + parseInt(colorTemperatureToRGB(parseFloat(document.getElementById('textField').value)).r.toFixed()).toString(16).toUpperCase() + ', ' + parseInt(colorTemperatureToRGB(parseFloat(document.getElementById('textField').value)).g.toFixed()).toString(16).toUpperCase() + ', ' + parseInt(colorTemperatureToRGB(parseFloat(document.getElementById('textField').value)).b.toFixed()).toString(16).toUpperCase();
	document.getElementById('right').style.backgroundColor = 'rgb(' + RGB + ')';
}
