/* Utilizando la Api de Local Storage, podemos
   guardar y luego recuperar un valor */                 
      
//localStorage.setItem('saludo', 'Bienvenidos a localStorage');
//valor = localStorage.getItem('saludo');
/* Pero esta no es la única manera, ya que
   también podemos hacer lo siguiente */
   
//localStorage['saludos'] = 'Este saludo también es válido';
//valor = localStorage['saludos'];
/* Y claro, esto también es válido */
//localStorage.saludosa = 'Y este es mi método favorito';
//valor = localStorage.saludosa;

/* Podemos saber cuántos elementos tenemos guardados */
//console.log('Tenemos ' + localStorage.length + ' elementos dentro de Local Storage');
/* Eliminar elementos también es muy sencillo de lograr */
/* Y si queremos acceder a la información de localStorage
localStorage.removeItem('saludo');
   de manera secuencial, entonces lo podemos hacer gracias
   a su método 'key' que devuelve la clave en determinada posición */
   
//for(var i=0, t=localStorage.length; i < t; i++) {
//    key = localStorage.key(i);
//    console.log('Para la clave ' + key + ' el valor es: ' + localStorage[key]);
//}

persona = {nombre: 'Pablo Rigazzi', edad: 33};
localStorage.autor = JSON.stringify(persona);
/* Y ahora, al recuperarlo, convertimos el string 
   nuevamente en un objeto */
var autor = JSON.parse(localStorage.autor);
console.log(autor);
// Aqui obtendremos que el tipo de la variable es "object"
