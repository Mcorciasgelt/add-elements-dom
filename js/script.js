 // Aquí tu código
 const agregar = document.getElementById("agregar");
 const lista = document.getElementById("lista");
 
 agregar.addEventListener("click", function(){
     elemento = prompt("Introduce un nuevo elemento a tu lista");
     const elementoLista = document.createElement("li");
     elementoLista.textContent = elemento;
     lista.appendChild(elementoLista)

  }) ;
