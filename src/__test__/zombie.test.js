import Zombie from '../zombie';

test('Создание нового персонажа Zombie', () => {
  const received = new Zombie('Zombie', 'Zombie');
  const expected = {
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
