function wordSizes(str) {
  if (str.length === 0) return {};

  let result = {};
  let sizes = str.split(' ').map (word => word.length);
  sizes.forEach( size => {
    (result[size]) ? result[size] += 1 : result[size] = 1
  })
  return result;

}

wordSizes('Four score and seven.');
wordSizes('Hey diddle diddle, the cat and the fiddle!');
wordSizes("What's up doc?");
wordSizes('');