const wordSearch = function (letters, word) {
  if (letters.length === 0) {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  const verticalJoin = [];
  for (let i = 0; i < letters[0].length; i++) {
    let verticalWord = '';
    for (let j = 0; j < letters.length; j++) {
      verticalWord += letters[j][i];
    }
    verticalJoin.push(verticalWord);
  }
  for (const l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  return false;
};
