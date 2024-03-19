async function checkResponse(response) {
  if (response.ok) {
    return await response.json();
  } else {
    return Promise.reject(`Ошибка ${response.status}`);
  }
}

async function getTodosApi() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  return checkResponse(response);
}

async function addTodoApi(todoObj) {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(todoObj)
  });
  return checkResponse(response);
}

async function editTodoApi(todoObj, id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(todoObj)
  });
  return checkResponse(response);
}

async function removeTodoApi(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  });
  return checkResponse(response);
}

export { getTodosApi, addTodoApi, editTodoApi, removeTodoApi };
