"use strict";
function convert()
{
	let RGB = colorTemperatureToRGB(parseFloat($('#textField').val())).r.toFixed().toString() + ', ' + colorTemperatureToRGB(parseFloat($('#textField').val())).g.toFixed().toString() + ', ' + colorTemperatureToRGB(parseFloat($('#textField').val())).b.toFixed().toString();
	console.log(RGB);
	$('#output').html('RGB (dec) = ' + RGB + '<br>RGB (hex) = ' + parseInt(colorTemperatureToRGB(parseFloat($('#textField').val())).r.toFixed()).toString(16).toUpperCase() + ', ' + parseInt(colorTemperatureToRGB(parseFloat($('#textField').val())).g.toFixed()).toString(16).toUpperCase() + ', ' + parseInt(colorTemperatureToRGB(parseFloat($('#textField').val())).b.toFixed()).toString(16).toUpperCase());
	$('#right').css('background-color', 'rgb(' + RGB + ')');
}
$(function()
{
	$('#submitButton').click(convert);
	$(this).find('input').keypress(function(e){if(e.which == 10 || e.which == 13){convert();}});
});
