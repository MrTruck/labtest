<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

    <form id="form">
        <input type="text"  id="toDoText">
        <input type="button" id="Submit">
      </form>

<div>

</div>

<script>
const submitButton = document.getElementById('Submit');

function addToDo() {
    if (document.querySelector('#toDoText').value != ''){
    let container = document.querySelector('div');  
    let input = document.querySelector('#toDoText').value;  
    const todo = document.createElement("li");  
    const txt = document.createTextNode(input);  
    todo.appendChild(txt); 
    document.body.insertBefore(todo, container);}

    else{
        alert('Please enter a task');
        document.querySelector('#toDoText').value = '';
        return;  // stop the function execution if the input field is empty
    }
};

// run the function
submitButton.addEventListener('click', addToDo);

// prevent form from submitting automatically after clicking submit button
document.querySelector("form").addEventListener('submit', e => e.preventDefault());

</script>
</body>
</html>
