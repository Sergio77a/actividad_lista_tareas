


function agregarTarea() 
{
   const nuevaTareaInput = document.getElementById("nuevaTarea");
  const listaTareas = document.getElementById("listaTareas");
  const nuevaTareaTexto = nuevaTareaInput.value.trim();
  if (nuevaTareaTexto !== "") 
  {
  const nuevaTarea = document.createElement("li");
  nuevaTarea.textContent = nuevaTareaTexto;

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.className = "delete";    

  botonEliminar.onclick = function() 
  {
  listaTareas.removeChild(nuevaTarea);
  };
  const botonCompletar = document.createElement("button");
  botonCompletar.textContent = "Completar";
  botonCompletar.className = "completar";  
  botonCompletar.onclick = function() 
  {
  marcarCompletada(nuevaTarea);  
  };    
  nuevaTarea.appendChild(botonEliminar);
  nuevaTarea.appendChild(botonCompletar);
  listaTareas.appendChild(nuevaTarea);
  nuevaTareaInput.value = "";
}
}



function marcarCompletada(tarea) {
  tarea.classList.toggle("completed");
  document.getElementById("listaTareas").addEventListener("click",
function(event) {
if (event.target.tagName === "LI") {
marcarCompletada(event.target);
}
});
}



function mostrarCompletadas() {
  const botones = document.querySelectorAll(".completar");
  const tareas = document.querySelectorAll("li");
  
  tareas.forEach(tarea => {
  if (tarea.classList.contains("completed")) {    
  tarea.style.display = "flex";
  tarea.style.textDecoration = "none";
  
  botones.forEach(function(boton) {
    boton.style.display = "none"; });

  } else {
  tarea.style.display = "none";

  }
  });
}


function mostrarPendientes() {
  const tareas = document.querySelectorAll("li");
  const botones = document.querySelectorAll(".completar");
  tareas.forEach(tarea => {
  if (!tarea.classList.contains("completed")) 
  {

    botones.forEach(function(boton) {
      boton.style.display = "flex"; });

  tarea.style.display = "flex";
  
   } 
  else 
  {
  tarea.style.display = "none";
  }
  }
  );
  }



// Agregar evento de clic al botón "Mostrar Completadas"
document.getElementById("mostrarCompletadas").addEventListener("click", mostrarCompletadas);
// Agregar evento de clic al botón "Mostrar Pendientes"
document.getElementById("mostrarPendientes").addEventListener("click", mostrarPendientes);
document.getElementById("agregar").addEventListener("click",
agregarTarea);

