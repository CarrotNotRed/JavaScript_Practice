const targetUrl = "https://jsonplaceholder.typicode.com/todos/1";
fetch(targetUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (todo) {
    if (todo.completed) {
      console.log("Task completed");
    } else {
      console.log("Task is in progress");
    }
  });
