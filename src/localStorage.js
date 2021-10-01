const list = JSON.parse(localStorage.getItem('list')) || [];
const insert = document.getElementById('insert');
const listItems = document.querySelector('.list-items');
function ToDo(descreption, completed, index) {
  this.descreption = descreption;
  this.completed = completed;
  this.index = index;
}

function removeChildNodes(listItems) {
  while (listItems.firstChild) {
    listItems.removeChild(listItems.firstChild);
  }
}

function refreshStorage() {
  localStorage.setItem('list', JSON.stringify(list));
}

function update() {
  for (let i = 0; i < list.length; i += 1) {
    list[i].index = i;
    refreshStorage();
  }
}

function clearAll() {
  const clearAllBtn = document.querySelector('.remove-button');
  if (listItems.childNodes.length > 0) {
    clearAllBtn.style.display = 'block';
  } else {
    clearAllBtn.style.display = 'none';
  }
  clearAllBtn.addEventListener('click', () => {
    for (let i = 0; i <= list.length; i += 1) {
      if (list[i].completed) {
        list.splice(i, 1);
        listItems.removeChild(listItems.childNodes[i]);
        window.location.reload();
        refreshStorage();
        update();
      }
    }
  });
}

function addToDo() {
  const newAdd = new ToDo();
  newAdd.descreption = document.getElementById('insert').value;
  newAdd.completed = false;
  list.push(newAdd);
  update();
}

function pushContent() {
  removeChildNodes(listItems);
  insert.value = '';
  insert.focus();
  list.forEach((element) => {
    const listItem = document.createElement('li');
    const check = document.createElement('div');
    check.className = 'check';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'checkbox';
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
  refreshStorage();
}

function removeToDO() {
  const remove = Array.from(document.querySelectorAll('.fa-trash'));
  for (let i = 0; i < list.length; i += 1) {
    remove[i].addEventListener('click', () => {
      list.splice(i, 1);
      listItems.removeChild(listItems.childNodes[i]);
      window.location.reload();
      update();
      refreshStorage();
    });
  }
}

function checked() {
  const checks = Array.from(document.querySelectorAll('.checkbox'));
  const descreption = Array.from(document.querySelectorAll('.descreption'));
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].completed) {
      descreption[i].classList.toggle('checked');
      checks[i].toggleAttribute('checked');
      refreshStorage();
    }
  }
}

function checkBox() {
  const checks = Array.from(document.querySelectorAll('.checkbox'));
  const descreption = Array.from(document.querySelectorAll('.descreption'));
  for (let i = 0; i < list.length; i += 1) {
    checks[i].addEventListener('click', () => {
      list[i].completed = checks[i].checked;
      descreption[i].classList.toggle('checked');
      checks[i].toggleAttribute('checked');
      refreshStorage();
    });
  }
}

document.querySelector('.insert').addEventListener('submit', (e) => {
  e.preventDefault();
  addToDo();
  pushContent();
  removeToDO();
  checked();
  checkBox();
  clearAll();
});

window.onload = () => {
  pushContent();
  removeToDO();
  checked();
  checkBox();
  clearAll();
};