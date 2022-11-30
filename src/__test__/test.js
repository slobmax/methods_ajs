import Character from '../app';
import Bowman from '../bowman';

test('Создание нового персонажа Bowman', () => {
  const received = new Bowman('Bowman', 'Bowman');
  const expected = {
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Класс Character, проверка name', () => {
  function genErr() {
    const received = new Character('n', 'Bowman');
    return received;
  }
  expect(genErr).toThrow();
});

test('Класс Character, проверка type', () => {
  function genErr() {
    const received = new Character('Bowman', 'm');
    return received;
  }
  expect(genErr).toThrow();
});

test('Метод Character.levelUp', () => {
  const received = new Bowman('Bowman', 'Bowman');
  const expected = {
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 30,
    defence: 30,
  };
  received.levelUp();
  expect(received).toEqual(expected);
});

test('Метод Character.levelUp, выброс ошибки', () => {
  function genErr() {
    const received = new Bowman('Bowman', 'Bowman');
    received.damage(135);
    received.levelUp();
    return received;
  }
  expect(genErr).toThrow();
});

test('Метод Character.damage', () => {
  function calcHealth(points) {
    const received = new Bowman('Bowman', 'Bowman');
    received.damage(points);
    return received.health;
  }
  expect(calcHealth(40)).toBe(70);
  expect(calcHealth(200)).toBe(0);
});
