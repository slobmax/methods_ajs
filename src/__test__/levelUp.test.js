import Bowman from '../bowman';

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
    received.damage(150);
    received.levelUp();
    return received;
  }
  expect(genErr).toThrow();
});
