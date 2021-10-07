const list = [{
  descreption: 'first',
  completed: false,
},
{
  descreption: 'second',
  completed: false,
},
{
  descreption: 'third',
  completed: false,
}];
exports.list = list;

function update() {
  for (let i = 0; i < list.length; i += 1) {
    list[i].index = i;
  }
}
function ToDo(descreption, completed, index) {
  this.descreption = descreption;
  this.completed = completed;
  this.index = index;
}

function addToDo() {
  const newAdd = new ToDo();
  newAdd.descreption = 'added new description';
  newAdd.completed = false;
  list.push(newAdd);
  update();
}

exports.addToDo = addToDo;

function removeToDO() {
  list.splice(3, 1);
  update();
}

exports.removeToDO = removeToDO;
