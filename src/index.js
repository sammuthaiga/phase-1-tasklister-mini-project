document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener("submit", (e)=>{
      e.preventDefault()
      handleToDo(e.target.newTaskDescription.value)
      form.reset()
  } )
});

function handleToDo(todo){
 
  
 let li = document.createElement("li")
 //button
 let btn = document.createElement("button") 
 //Listening to the event when the delete button is clicked
 btn.addEventListener("click", handleDelete)
 //Assigning values delete button
 btn.textContent= "x"
 // Assigning text to the element
 li.textContent = `${todo}`
 // 
 li.appendChild(btn)
 //document.querySelector("#tasks").appendChild(li)
 document.getElementById("tasks").appendChild(li)
}
//creating a function that deletes done todo list items
 function handleDelete(e){
  e.target.parentNode.remove()
 }