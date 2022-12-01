import Magician from '../magician';

test('Создание нового персонажа Magician', () => {
  const received = new Magician('Magician', 'Magician');
  const expected = {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
