import Bowman from '../bowman';

test('Метод Character.damage', () => {
  function calcHealth(points) {
    const received = new Bowman('Bowman', 'Bowman');
    received.damage(points);
    return received.health;
  }
  expect(calcHealth(40)).toBe(70);
  expect(calcHealth(200)).toBe(0);
});
