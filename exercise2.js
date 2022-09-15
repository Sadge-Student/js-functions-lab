fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then (json => {
        const titles = json.map(json => json.title);
        console.log(titles);
    })
    .catch(function(err) {
        console.log(err);
    });