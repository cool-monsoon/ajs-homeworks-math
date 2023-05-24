import MathCharacter from '../MathCharacter';

test('Testing linear attack decline without dope', () => {
  const daemon = new MathCharacter('Daemon', 100, false, 3);
  expect(daemon.attack).toBe(80);
});

test('Testing attack decline with dope', () => {
  const magician = new MathCharacter('Magician', 100, true, 2);
  magician.stoned = true;
  expect(magician.attack).toBe(85);
});

test('Testing if "get attack" returns correct value while attack > 100', () => {
  const daemon = new MathCharacter('Daemon', 200, true, 3);
  expect(daemon.attack).toBe(100);
});

test('Testing if "get attack" returns correct value while attack < 0', () => {
  const magician = new MathCharacter('Magician', -20, false, 2);
  expect(magician.attack).toBe(0);
});
