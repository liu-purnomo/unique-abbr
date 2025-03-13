export const uniqueAbbr = (nama: string, existingCodes: string[]): string => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const generateUniqueAbbreviation = (
    nama: string,
    usedCodes: Set<string>
  ): string => {
    const words = nama.split(' ');
    let firstLetters =
      words[0].length === 1 ? `${words[0]}AB` : words[0].toUpperCase();

    if (words.length === 2) {
      let temp = words[0][0] + words[0][1] + words[1][0];
      firstLetters = temp.toUpperCase();
    } else if (words.length > 2) {
      firstLetters = words
        .map((word) => word.charAt(0))
        .join('')
        .toUpperCase();
    }

    let abbreviation = firstLetters.substring(0, 3);
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;

    while (usedCodes.has(abbreviation)) {
      if (index1 >= alphabet.length) {
        index1 = 0;
        index2++;
      }
      if (index2 >= alphabet.length) {
        index2 = 0;
        index3++;
      }
      if (index3 >= alphabet.length) {
        throw new Error('Cannot find a unique abbreviation.');
      }

      abbreviation = firstLetters[0] + alphabet[index1] + alphabet[index2];
      index1++;
    }

    return abbreviation;
  };

  const usedCodes = new Set(existingCodes.map((code) => code.toUpperCase()));
  let abbreviation = generateUniqueAbbreviation(nama, usedCodes);
  usedCodes.add(abbreviation);

  return abbreviation;
};
