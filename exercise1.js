fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then (json => {
        const completed = json.filter((json, index) => {
            return json.completed === true;
        })
        completed.forEach( (todo, index) => {
            console.log(`${todo.title} - ${todo.completed}`)
          })

    })
    .catch(function(err) {
        console.log(err);
    });