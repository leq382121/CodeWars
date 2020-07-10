function getCount(str) {
  var vowelsCount = 0;
  var vovels = ['a', 'e', 'i', 'o', 'u'];

  vovels.map(vovel => {
    const existingVovelLenght = (str.match(new RegExp(vovel, 'g')) || []).length;

    return vowelsCount += existingVovelLenght;
  });

  return vowelsCount;
}

// Best Solution from CodeWars: 
function getCount(str) {
  return (str.match(/[aeiou]/ig) || []).length;
}
