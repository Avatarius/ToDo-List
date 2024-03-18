const todoTemplate = document.querySelector("#todo__template").content;

function addTodo(todoObj, funcObj) {
  const todoElement = todoTemplate
    .querySelector(".todo__list-item")
    .cloneNode(true);

  const removeButton = todoElement.querySelector(".todo__button_remove");
  const editButton = todoElement.querySelector(".todo__button_edit");
  const todoDescription = todoElement.querySelector(".todo__text");
  const checkboxCompleted = todoElement.querySelector(".todo__checkbox");

  const { id, title, completed } = todoObj;
  const { removeFunc, editFunc } = funcObj;

  todoDescription.textContent = title;
  checkboxCompleted.checked = completed;
  if (checkboxCompleted.checked) {
    todoDescription.classList.add('todo__text_completed');
  }

  removeButton.addEventListener("click", (evt) => removeFunc(todoElement, id));
  editButton.addEventListener("click", (evt) =>
    editFunc({
      description: todoDescription,
      isCompleted: checkboxCompleted,
    }, id)
  );
  checkboxCompleted.addEventListener('click', (evt) => {
    if (checkboxCompleted.checked) {
      todoDescription.classList.add('todo__text_completed');
    } else {
      todoDescription.classList.remove('todo__text_completed');
    }
  })

  return todoElement;
}

function removeTodo(todoElement) {
  todoElement.remove();
}

function editTodo(todoObj, uiObj) {
  uiObj.description.textContent = todoObj.title;
  uiObj.isCompleted.checked = todoObj.completed;
}

export { addTodo, removeTodo, editTodo };
