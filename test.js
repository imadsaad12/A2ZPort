const tests = [
  "“smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (socrates)",
  "listen and silent",
  "!@ # $",
];

const longestWord = (str) => {
  const splitArrayBySpaces = str.split(/\s+/);
  const cleanedArray = splitArrayBySpaces.map((word) =>
    word.replace(/[^\w]+$/, "")
  );

  let result = "";

  for (let i = 0; i < cleanedArray.length; i++) {
    // use regex to check if its a pure string
    const isValidString = /^[a-z\s]+$/.test(cleanedArray[i]);

    if (isValidString) {
      if (cleanedArray[i].length > result.length) {
        result = cleanedArray[i];
      } else if (cleanedArray[i].length === result.length) {
        const vowels = /[aeiou]/g;

        // use regex to chek vowels in sentence
        const prevNbOfVowels = result.match(vowels).length || 0;
        const currentNbOfVowels = cleanedArray[i].match(vowels).length || 0;

        if (currentNbOfVowels >= prevNbOfVowels) result = cleanedArray[i];
      }
    }
  }
  return result;
};

console.log(longestWord(tests[0]));
console.log(longestWord(tests[1]));
console.log(longestWord(tests[2]));
