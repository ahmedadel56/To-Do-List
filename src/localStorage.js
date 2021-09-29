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
  update()
  localStorage.setItem('list', JSON.stringify(list));
}

function pushContent() {
  listItems.innerHTML = '';
  insert.value = '';
  insert.focus();
  list.forEach(element => {
    const listItem = document.createElement('li');
    const check = document.createElement('div');
    check.className = 'check';
    const input = document.createElement('input');
    input.type = 'checkbox';
    const descreption = document.createElement('span');
    descreption.className = 'descreption';
    descreption.innerHTML = element.descreption;
    const icon1 = document.createElement('i');
    icon1.className = 'fas fa-ellipsis-v';
    const icon2 = document.createElement('i');
    icon2.className = 'fa fa-trash';
    check.appendChild(input);
    check.appendChild(descreption);
    listItem.appendChild(check);
    listItem.appendChild(icon1);
    listItem.appendChild(icon2);
    listItems.appendChild(listItem);
  });
  localStorage.setItem('list', JSON.stringify(list));
}


function removeToDO(){
    const remove = document.querySelectorAll('.fa-trash');
    console.log(list[list.length-1]);
    for (let i = 0; i <= list[list.length-1].index; i+=1) {
      remove[i].addEventListener('click', () => {
        list.splice(i-1,1);
        remove[i].parentElement.remove();
        update();
        localStorage.setItem('list', JSON.stringify(list));
        console.log(i);
      });
    }
}

function update(){
  for (let i=0; i<list.length; i+=1){
    list[i].index = i;
    localStorage.setItem('list', JSON.stringify(list));
  }
}

document.querySelector('.insert').addEventListener('submit', (e) => {
  addToDo();
  pushContent();
  removeToDO();
});

window.onload = ()=>{
  pushContent();
  removeToDO();
}