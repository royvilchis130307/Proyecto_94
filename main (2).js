
// Crea la variable del lienzo
var canvas = new fabric.Canvas ("myCanvas");
//Establece las posiciones iniciales para las imágenes de la pelota y el hoyo.
ball_y=0;
ball_x=0;
hole_y=400;
hole=800;
block_image_width = 5;
block_image_height = 5;

function load_img(){
	// escribe código para cargar la imagen del golf en el lienzo
	new_image();
    fabric.Image.fromURL("golf-h1.png", function (Img)
	hole_obj = Img;
	hole_obj.scaleToWidth
    hole_obj
	hole_obj
	
}

function new_image()
{
	// escribe código para cargar la imagen de la pelota en el lienzo  
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Revisa las coordenadas de las imágenes de la pelota y el hoyo para finalizar el juego. 
	Y las coordenadas del id coordinates coinciden, entonces elimina la pelota.  
	muestra "¡FIN DEL JUEGO!" 
	y haz el borde del lienzo "rojo".*/
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("arriba");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("abajo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("izquierda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("derecha");
		}
	}
	
	function up()
	{
		// Escribe código para mover la pelota hacia arriba
	}

	function down()
	{
		 // Escribe código para mover la pelota hacia abajo.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Escribe código para mover la pelota a la izquierda.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Escribe código para mover la pelota a la derecha.
		}
	}
	
}

