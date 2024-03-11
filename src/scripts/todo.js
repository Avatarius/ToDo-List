const todoTemplate = document.querySelector("#todo__template").content;

function addTodo(todoObj, funcObj) {
  const todoElement = todoTemplate
    .querySelector(".todo__list-item")
    .cloneNode(true);

  const removeButton = todoElement.querySelector(".todo__button_remove");
  const editButton = todoElement.querySelector(".todo__button_edit");
  const todoDescription = todoElement.querySelector(".todo__text");
  const checkboxCompleted = todoElement.querySelector(".todo__checkbox");
  const prioritySpan = todoElement.querySelector(".todo__priority-span");

  const { description, isCompleted, priority } = todoObj;
  const { removeFunc, editFunc } = funcObj;

  todoDescription.textContent = description;
  checkboxCompleted.checked = isCompleted;
  prioritySpan.textContent = priority;

  removeButton.addEventListener("click", (evt) => removeFunc(todoElement));
  editButton.addEventListener("click", (evt) =>
    editFunc({
      description: todoDescription,
      isCompleted: checkboxCompleted,
      priority: prioritySpan,
    })
  );

  return todoElement;
}

function removeTodo(todoElement) {
  todoElement.remove();
}

function editTodo(todoObj, uiObj) {
  uiObj.description.textContent = todoObj.description;
  uiObj.isCompleted.checked = todoObj.isCompleted;
  uiObj.priority.textContent = todoObj.priority;
}

export { addTodo, removeTodo, editTodo };