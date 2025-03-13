export const uniqueAbbr = (
  name: string,
  existingCodes: string[],
  length: number = 3
): string => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Remove non-alphabetic characters from the beginning
  name = name.replace(/^[^a-zA-Z]+/, '');

  // Function to generate a unique abbreviation
  const generateUniqueAbbreviation = (
    name: string,
    usedCodes: Set<string>,
    length: number
  ): string => {
    const words = name.split(/\s+/).filter(Boolean);
    let abbreviation = '';

    if (words.length === 1) {
      abbreviation = words[0].substring(0, length).toUpperCase();
    } else {
      abbreviation = words
        .map((word) => word.charAt(0))
        .join('')
        .toUpperCase();
    }

    if (abbreviation.length < length) {
      const lastWord = words[words.length - 1].toUpperCase();
      for (let i = abbreviation.length; i < length; i++) {
        abbreviation += lastWord[i] || 'A';
      }
    } else {
      abbreviation = abbreviation.substring(0, length);
    }

    let attemptCount = 0;
    let suffix = 0;

    while (usedCodes.has(abbreviation)) {
      attemptCount++;
      if (attemptCount >= alphabet.length ** length) {
        abbreviation = abbreviation.substring(0, length - 1) + suffix++;
        if (suffix > 9) throw new Error('Cannot find a unique abbreviation.');
      } else {
        const lastIndex = attemptCount % alphabet.length;
        abbreviation =
          abbreviation.substring(0, length - 1) + alphabet[lastIndex];
      }
    }

    return abbreviation;
  };

  // Convert existing codes to uppercase for case-insensitive matching
  const usedCodes = new Set(existingCodes.map((code) => code.toUpperCase()));

  // Generate unique abbreviation
  const abbreviation = generateUniqueAbbreviation(name, usedCodes, length);
  usedCodes.add(abbreviation);

  return abbreviation;
};
