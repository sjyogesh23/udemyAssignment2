const task3Element = document.getElementById('task-3');

function one(){
    alert('Function One alert!');
}
function two(name){
    alert(name);
}
function three(a,b,c){
    return alert(a + b + c);
}

task3Element.addEventListener('click',one);
two(`Function Two alert!`);
 three('Hey ','Its ','SJY');
