`use strict`;
import "../pages/index.css";
import { addTodo, removeTodo, editTodo } from "./todo";
import { openDialog, closeDialog } from "./dialog";

const todoList = document.querySelector(".todo__list");
const searchForm = document.querySelector(".search__form");
const searchInput = document.querySelector(".search__input");
const searchButton = document.querySelector(".search__button_search");
const searchResetButton = document.querySelector(".search__button_reset");
const buttonNewTodo = document.querySelector(".content__button_new");

const dialogNew = document.querySelector(".dialog_new");
const dialogNewObj = {
  dialog: dialogNew,
  form: dialogNew.querySelector(".dialog__form"),
  submitButton: dialogNew.querySelector(".dialog__button"),
};
const dialogRemove = document.querySelector(".dialog_remove");
const dialogRemoveObj = {
  dialog: dialogRemove,
  form: dialogRemove.querySelector(".dialog__form"),
  submitButton: dialogRemove.querySelector(".dialog__button"),
};

const dialogEdit = document.querySelector(".dialog_edit");
const dialogEditObj = {
  dialog: dialogEdit,
  form: dialogEdit.querySelector(".dialog__form"),
  submitButton: dialogEdit.querySelector(".dialog__button"),
};

const initialTodoList = [
  { description: "Проснуться", isCompleted: true, priority: 1 },
  { description: "Позавтракать", isCompleted: true, priority: 2 },
  { description: "Одеться", isCompleted: false, priority: 3 },
  { description: "Пойти на работу", isCompleted: false, priority: 4 },
];

const funcObj = {
  removeFunc: function (todoElement) {
    handleTodoRemove = function () {
      removeTodo(todoElement);
      closeDialog(dialogRemove);
    };
    openDialog(dialogRemove);
  },
  editFunc: function (uiObj) {
    openDialog(dialogEdit);
    dialogEditObj.form.description.value = uiObj.description.textContent;
    dialogEditObj.form.priority.value = uiObj.priority.textContent;
    handleTodoEdit = function () {
      editTodo(
        {
          description: dialogEditObj.form.description.value,
          isCompleted: uiObj.isCompleted.checked,
          priority: dialogEditObj.form.priority.value,
        },
        uiObj
      );
      closeDialog(dialogEdit);
    };
  },
};

initialTodoList.forEach((todoObj) => {
  todoList.append(addTodo(todoObj, funcObj));
});

function filterTodoList(substring) {
  const todoItems = Array.from(todoList.querySelectorAll(".todo__list-item"));
  const filteredTodoItems = todoItems.filter((item) => {
    const todoName = item.querySelector(".todo__text").textContent;
    return todoName.toLowerCase().includes(substring.toLowerCase());
  });
  todoItems.forEach((item) => {
    if (!filteredTodoItems.includes(item)) {
      item.classList.add("todo__list-item_hidden");
    } else {
      item.classList.remove("todo__list-item_hidden");
    }
  });
}

buttonNewTodo.addEventListener("click", () => {
  dialogNewObj.form.reset();
  openDialog(dialogNew);
});

dialogNewObj.form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  todoList.append(
    addTodo(
      {
        description: dialogNewObj.form.description.value,
        isCompleted: false,
        priority: dialogNewObj.form.priority.value,
      },
      funcObj
    )
  );
  closeDialog(dialogNew);
});

let handleTodoRemove = function () {};
let handleTodoEdit = function () {};

dialogRemoveObj.form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  handleTodoRemove();
});

dialogEditObj.form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  handleTodoEdit();
});

searchForm.addEventListener("submit", (evt) => evt.preventDefault());
searchForm.search.addEventListener("input", (evt) => {
  filterTodoList(searchForm.search.value);
});
// функционал поиска
document.addEventListener("click", (evt) => {
  const clickOnSearchButton = evt.target.classList.contains(
    "search__button_search"
  );

  const clickOnInput = evt.target.classList.contains("search__input");
  const clickOnResetButton = evt.target.classList.contains('search__button_reset');
  if (clickOnSearchButton) {
    searchForm.classList.add("search__form_expanded");
    searchResetButton.classList.add("search__button_reset_expanded");
    searchInput.classList.add('search__input_expanded');
  } else if (
    !clickOnSearchButton &&
    !clickOnInput &&
    !clickOnResetButton &&
    searchInput.value === ""
  ) {
    searchForm.classList.remove("search__form_expanded");
    searchResetButton.classList.remove("search__button_reset_expanded");
    searchInput.classList.remove('search__input_expanded');
  }
});
searchResetButton.addEventListener("click", () => {
  searchForm.reset();
  filterTodoList(searchForm.search.value);
});
