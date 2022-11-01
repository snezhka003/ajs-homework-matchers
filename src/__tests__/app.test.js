import sortCharacters from '../app';

test('test of sort characters by health', () => {
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const received = sortCharacters();

  expect(received).toEqual(expected);
});
