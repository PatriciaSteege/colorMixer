/*
const todos = document.querySelector("#todos");
const removeBtn = document.querySelector("button");
const buttonAdd = document.querySelector("#add");
const todosList = document.querySelector(".list-todos");

const filterOptions = document.querySelectorAll(
  '#filter-todos input[name="filter"]'
);

const initialTodos = [
  { description: "Learn CSS", done: false, id: 1 },
  { description: "Learn HTML", done: true, id: 2 },
];
const state = {
  filter: "all",
  todos: initialTodos,
  selectetTodos: initialTodos,
};

function restoreTodos() {
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  console.log("storedTodos", storedTodos);
  if (storedTodos) {
    state.todos = storedTodos;
  }
}

//das Change Event auf den Radio-Filtern installier
filterOptions.forEach((filterOption) => {
  filterOption.addEventListener("change", () => {
    state.filter = getSelectedFilter();
    state.selectetTodos = state.todos.filter((todo) => {
      if (state.filter === "all") {
        return true;
      } else if (state.filter === "done") {
        return todo.done;
      } else {
        return !todo.done;
      } //open
    });
    renderTodos();
  });
});

//gib mir den Filter aus, der grade angeklickt ist
function getSelectedFilter() {
  //"all" "done" "open"
  return [...filterOptions.values()].find(
    (filterOption) => filterOption.checked
  ).value;
}
//Zeigt den Status an der erscheint wenn die App das erste mal geöffnet wird

//Installieren eines EventListeners auf dem Button am Input-Feld
buttonAdd.addEventListener("click", addToDo);

//Funktion die das ToDo aus dem Input-Feld in die Liste hinzufügt
function addToDo(event) {
  event.preventDefault();
  console.log("This was Clicked");
  // ein neues ToDo Objekt erstellen
  const newToDo = {
    description: todos.value,
    done: false,
    id: Math.floor(Math.random() * 5000), // legt eine random ID fest
  };
  state.todos.push(newToDo); // pusht das neue ToDo in das State Objekt
  //die neuen Todos in den Localstorage speichern
  localStorage.setItem("todos", JSON.stringify(state.todos));
  //die neuen Todos aus dem Localstorage holen und anzeigen

  todos.value = ""; // leert das Input-feld wieder nach dem Klick
  todos.focus(); //hält den Cursor im Input-Feld (man muss nicht wieder reinklicken)

  renderTodos();
}

function renderTodos() {
  todosList.innerText = "";

  //Legt fest was gezeigt wird, wenn der jeweilige Filter angeklickt wird

  state.selectetTodos.forEach(function (todo) {
    // li ertsellen
    const listEl = document.createElement("li");

    // checkbox erstellen
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    //c checkbox eine ID geben
    checkbox.id = "todo" + todo.id;
    checkbox.checked = todo.done;

    // label erstellen
    // jedes Input braucht ein Label
    const description = document.createElement("label");
    // for Attribut des Labels muss gleich ID des Inputs sein
    description.htmlFor = checkbox.id;
    description.innerText = todo.description;

    listEl.appendChild(checkbox);
    listEl.appendChild(description);

    todosList.appendChild(listEl);
  });
}
//Immer wenn sich was an der Liste ändert, gib das Todo zurück, das geändert wurde
function updateToDo(event) {
  //Todo-ID aus DOM-Element auslesen
  const id = event.target.todoId;
  //Nach dem Todo suchen (und dieses ausgeben),
  //bei dem die ID die selbe ist wie beim DOM
  //Element
  const updatedTodo = state.todos.find(function (todo) {
    return todo.id === id;
  });
  //State updaten
  updatedTodo.done = event.target.checked;
  renderTodos();
}

//Lösche alle erledigten ToDos
removeBtn.addEventListener("click", removeDoneTodos);
function removeDoneTodos() {
  todosList.innerHTML = "";
  renderTodos();
}

restoreTodos();
renderTodos();*/
