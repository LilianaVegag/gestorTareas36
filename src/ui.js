// importar la funcion para tener las tareas del LocalStorage 
import { getTasks } from "./task";

// función para visualizar las tareas 
export const renderTasks = () => {
    const taskList = document.getElementById("task-form");
    taskList.innerHTML = ""; //para limpiar el HTML 
    const task = getTasks(); //traemos todas las tareas 
    task.forEach((task) => {
        const li = document.createElement("li");
        li.setAttribute ("data-id", task.id)

        if(task.compleated == true) {
            li.classList.add("completed");
            
        }
        li.innerHTML = `
            ${task.text}
            <button class="delete"> Borrar </button> 
            <button class"toggle"> ${task.completed == true ? "Regresar" : "Completado"} </button>       
            `;
            taskList. appendChild(li);
    }); //hace un arreglo en el codigo
     
};