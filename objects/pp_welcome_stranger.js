function greetings(name, description) {
  name = name.join(' ');

  console.log(`Hello ${name}! Nice to have a ${description.title} ${description.occupation} around`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.


