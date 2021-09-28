const list = JSON.parse(localStorage.getItem('list')) || [];
const insert = document.getElementById('insert');
const listItems = document.querySelector('.list-items');
function ToDo(descreption, completed, index) {
  this.descreption = descreption;
  this.completed = completed;
  this.index = index;
}

function addToDo() {
  const newAdd = new ToDo();
  newAdd.descreption = document.getElementById('insert').value;
  list.push(newAdd);
  localStorage.setItem('list', JSON.stringify(list));
}

function pushContent() {
  listItems.innerHTML = '';
  insert.value = '';
  list.forEach((element) => {
    const listItem = document.createElement('li');
    const input = document.createElement('input');
    input.type = 'checkbox';
    const descreption = document.createElement('span');
    descreption.className = 'descreption';
    descreption.innerHTML = element.descreption;
    const remove = document.createElement('span');
    const icon = document.createElement('i');
    icon.className = 'icon-ellipsis-vertical';
    remove.appendChild(icon);
    listItem.appendChild(input);
    listItem.appendChild(descreption);
    listItem.appendChild(remove);
    listItems.appendChild(listItem);
  });
}

document.querySelector('.insert').addEventListener('submit', (e) => {
  e.preventDefault();
  addToDo();
  pushContent();
});
