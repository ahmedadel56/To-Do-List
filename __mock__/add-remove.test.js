describe('check Add Remove function', () => {
  // 1-Arrange
/* eslint-disable */
  const { addToDo, removeToDO, list } = require('./util'); 

  // test the list of objects that mock local storage
  test('mocked local storage testt', () => {
    expect(typeof list).toBe('object');
  });

  test('insert input error check', () => {
    // 2-act
    addToDo();

    // 3-assert
    // descreption test
    expect(list[3].descreption).toBe('added new description');
    // completed test
    expect(list[3].completed).toBe(false);
    // index test
    expect(list[3].index).toBe(3);
  });

  test('remove element from list ', () => {
    // 2-act
    removeToDO();

    // 3-assert
    expect(list.length).toBe(3);
    expect(list[2].descreption).toBe('third');
    expect(list[2].completed).toBe(false);
    expect(list[2].index).toBe(2);
  });
});
