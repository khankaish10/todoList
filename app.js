var bigNote = document.getElementById("text"),
  addBtn = document.getElementById("addBtn"),
  mainNotes = document.getElementById("mainNotes"),
  todo = document.getElementsByClassName("todo")[0],
  whenLocalEmpty = document.querySelector(".whenLocalEmpty") ;
//   notes = document.getElementById("notes");

//adding notes-----------------------------------------------------
addBtn.addEventListener("click", (event) => {
  //prevent default
  event.preventDefault();
  if(bigNote.value === ''){
    bigNote.style.border = '2px solid red';
  }
  else{
    bigNote.style.border = 'none';
 //creating div element
 var smallNotes = document.createElement("div");
 smallNotes.className = "smallNotes";
 //textarea
 var text = document.createElement("textarea");
 text.innerText = bigNote.value;
 //setLocalStorage--
 setLocalTodo(bigNote.value);
 smallNotes.appendChild(text);


 //delete button
 deleteBtn = document.createElement("button");
 deleteBtn.innerText = "delete";
 deleteBtn.className = "deleteBtn";
 smallNotes.appendChild(deleteBtn);

 //main note
 mainNotes.appendChild(smallNotes);

 //reset value---
 bigNote.value = "";
  }
});

//deleting notes----------
mainNotes.addEventListener("click", (e) => {
  if (e.target.classList == "deleteBtn") {
    e.target.parentElement.remove();
    //deleteLocalStorage
    deleteLocalTodo(e);
  }
});

//set Local Storage----
function setLocalTodo(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

window.addEventListener(
  "load",
  (getLocalTodo = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function (todo) {
      //prevent default
      event.preventDefault();
      //creating div element
      var smallNotes = document.createElement("div");
      smallNotes.className = "smallNotes";
      //textarea
      var text = document.createElement("textarea");
      text.innerText = todo;
      smallNotes.appendChild(text);
      //delete button
      deleteBtn = document.createElement("button");
      deleteBtn.innerText = "delete";
      deleteBtn.className = "deleteBtn";
      smallNotes.appendChild(deleteBtn);
      //main note
      mainNotes.appendChild(smallNotes);

      //reset value---
      bigNote.value = "";
    });
  })
);

//delete localstorage----
function deleteLocalTodo(e) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  var toDelete = e.target.parentElement.children[0].innerText,
    //  todos.indexOf(toDelete)
    index = todos.indexOf(toDelete);
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
