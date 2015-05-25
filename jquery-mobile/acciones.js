// JavaScript Document

$(document).ready(function(e){
	document.addEventListener("deviceready", function(){
		
		$('#izquierda').on ("swipeleft", function(){
		navigator.notification.alert("Deslizó a la izquierda", function(){"Aplicacion05","Aceptar"});
		});//barrer izquierda
		
		$('#derecha').on ("swiperight", function(){
		navigator.notification.confirm("¿Qué quieres hacer?", function(opt){
			switch(opt)
			{
				case 1:
				navigator.notification.beep(1);
				break;
				
				case 1:
				navigator.notification.vibrate(1000);
				break;
			}//switch opt
		},"Aplicacion5", "Beep, Vibrar, Cancelar");//confirm
		});//barrer derecha
		
		
	},false);//ready device
});//document

