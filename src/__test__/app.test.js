import Bowman from '../bowman';

test('Класс Character, проверка name', () => {
  function genErr() {
    const received = new Bowman('n', 'Bowman');
    return received;
  }
  expect(genErr).toThrow();
});

test('Класс Character, проверка type', () => {
  function genErr() {
    const received = new Bowman('Bowman', 'm');
    return received;
  }
  expect(genErr).toThrow();
});
