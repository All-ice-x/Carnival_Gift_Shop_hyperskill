function search(objects) {
  return objects.findIndex(n => n.name === 'John' && n.age === 30);
}