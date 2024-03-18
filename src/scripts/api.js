function getTodosApi() {
  return fetch('https://jsonplaceholder.typicode.com/todos/');
}

function addTodoApi(todoObj) {
  return fetch('https://jsonplaceholder.typicode.com/todos/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(todoObj)
  });
}

function editTodoApi(todoObj, id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(todoObj)
  });
}

function removeTodoApi(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  });
}

export { getTodosApi, addTodoApi, editTodoApi, removeTodoApi };
