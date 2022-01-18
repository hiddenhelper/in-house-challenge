export default function sortKitten(a, b) {
  
  // sort by ninja level
  if (a.ninjaLevel > b.ninjaLevel) {
    return 1;
  }
  if (a.ninjaLevel < b.ninjaLevel) {
    return -1;
  }

  // sort by name
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }

  // sort by age
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }

  return 0;
}