const characters = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export default function sortCharacters() {
  return characters.sort((a, b) => b.health - a.health);
}
