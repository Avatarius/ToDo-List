`use strict`;
import "../pages/index.css";
import { addTodo, removeTodo, editTodo, changeStatusTodo } from "./todo";
import { openDialog, closeDialog } from "./dialog";
import { getTodosApi, addTodoApi, editTodoApi, removeTodoApi } from "./api";

const todoList = document.querySelector(".todo__list");
const searchForm = document.querySelector(".search__form");
const searchInput = document.querySelector(".search__input");
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

async function populateList() {
  try {
    const todoArray = await getTodosApi();
    todoArray.forEach((todo) => {
      todoList.append(addTodo(todo, funcObj));
    });
  } catch (err) {
    console.log(err);
  }
}

async function handleAddCardSubmit(evt) {
  evt.preventDefault();
  try {
    const json = await addTodoApi({
      title: dialogNewObj.form.description.value,
      completed: false,
    });
    todoList.prepend(addTodo({ title: json.title, completed: false }, funcObj));
    closeDialog(dialogNew);
  } catch (err) {
    console.log(er);
  }
}
populateList();

const funcObj = {
  removeFunc: async function (todoElement, id) {
    openDialog(dialogRemove);
    handleTodoRemove = async function () {
      try {
        const json = await removeTodoApi(id);
        removeTodo(todoElement);
        closeDialog(dialogRemove);
      } catch (error) {
        console.log(error);
      }
    };
  },
  editFunc: async function (uiObj, id) {
    openDialog(dialogEdit);
    dialogEditObj.form.description.value = uiObj.description.textContent;
    handleTodoEdit = async function () {
      try {
        const json = await editTodoApi(
          {
            title: dialogEditObj.form.description.value,
            completed: uiObj.isCompleted.checked,
          },
          id
        );
        editTodo({ title: json.title, completed: json.completed }, uiObj);
        closeDialog(dialogEdit);
      } catch (error) {
        console.log(error);
      }
    };
  },
  changeStatusFunc: async function (todoObj, id, todoDescription) {
    try {
      const json = await editTodoApi(todoObj, id);
      changeStatusTodo(todoDescription, todoObj.completed);
    } catch (error) {
      console.log(error);
    }
  },
};

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

dialogNewObj.form.addEventListener("submit", handleAddCardSubmit);

let handleTodoRemove = async function () {};
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
  const clickOnResetButton = evt.target.classList.contains(
    "search__button_reset"
  );
  if (clickOnSearchButton) {
    searchForm.classList.add("search__form_expanded");
    searchResetButton.classList.add("search__button_reset_expanded");
    searchInput.classList.add("search__input_expanded");
  } else if (
    !clickOnSearchButton &&
    !clickOnInput &&
    !clickOnResetButton &&
    searchInput.value === ""
  ) {
    searchForm.classList.remove("search__form_expanded");
    searchResetButton.classList.remove("search__button_reset_expanded");
    searchInput.classList.remove("search__input_expanded");
  }
});
searchResetButton.addEventListener("click", () => {
  searchForm.reset();
  filterTodoList(searchForm.search.value);
});
