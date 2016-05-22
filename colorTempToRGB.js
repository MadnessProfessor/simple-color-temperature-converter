// Based on http://www.tannerhelland.com/4435/convert-temperature-rgb-algorithm-code/

// Start with a temperature, in Kelvin, somewhere between 1000 and 40000.  (Other values may work,
//  but I can't make any promises about the quality of the algorithm's estimates above 40000 K.)

function clamp( x, min, max ) {
	if(x<min){ return min; }
	if(x>max){ return max; }
	
	return x;
}

function colorTemperatureToRGB(temperature, scale)
{
	// define vars
	var temp = temperature / 100;
	var red, green, blue;
	
	// set RGB values
	if( temp <= 66 )
	{
		red = 1; 
		
		green = 0.390081579 * Math.log(temp) - 0.631841444;
		
		if( temp <= 19)
		{
			blue = 0;
		} else
		{
			blue = 0.543206789 * Math.log(temp-10) - 1.196254089;
		}

	} else 
	{
		red = 1.292936186 * Math.pow(temp - 60, -0.1332047592);
		
		green = 1.129890861 * Math.pow(temp - 60, -0.0755148492 );
		
		blue = 1;
	}
	
	// scale if necessary
	if(scale)
	{
		red = clamp(red*255, 0, 255);
		green = clamp(green*255, 0, 255);
		blue = clamp(blue*255, 0, 255);
	} else
	{
		red = clamp(red, 0, 1);
		green = clamp(green, 0, 1);
		blue = clamp(blue, 0, 1);
	}
	
    return {
        r : red,
        g : green,
        b : blue
    }

}
