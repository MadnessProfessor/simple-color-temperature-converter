"use strict";

function convert()
{
	let sC = colorTemperatureToRGB(parseFloat($('#textField').val()),true);
	let strSCDec = sC.r.toFixed() + ', ' + sC.g.toFixed() + ', ' + sC.b.toFixed();
	
	let strSCHex = parseInt(sC.r.toFixed()).toString(16).toUpperCase() + ', ' + parseInt(sC.g.toFixed()).toString(16).toUpperCase() + ', ' + parseInt(sC.b.toFixed()).toString(16).toUpperCase();
	
	let NsC = colorTemperatureToRGB(parseFloat($('#textField').val()), false);
	let strNsCDec = NsC.r.toFixed(3) + ', ' + NsC.g.toFixed(3) + ', ' + NsC.b.toFixed(3);
	
	console.log('sC:  ' + strSCDec);
	console.log('NsC: ' + strNsCDec);
	
	$('#output').html('RGB decimal =<br>' + strNsCDec + '<br><br>RGB decimal, scaled =<br>' + strSCDec + '<br><br>RGB hexadecimal, scaled =<br>' + strSCHex);
	$('#right').css('background-color', 'rgb(' + strSCDec + ')');
}
$(function()
{
	$('#submitButton').click(convert);
	$(this).find('input').keypress(function(e){if(e.which == 10 || e.which == 13){convert();}});
	
	console.log('Welcome to my online color temperature converter.\n\nFor more advanced usage of the code in this page use colorTemperatureToRGB(num temperature, bool scale).\nThe code in this page is based off of http://www.tannerhelland.com/4435/convert-temperature-rgb-algorithm-code/. I recommend going to that page, it\'s a good read.\nTo view my conversion algorithm look at colorTempToRGB.js.');
});
