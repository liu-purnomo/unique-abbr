export const uniqueAbbr = (
  name: string,
  existingCodes: string[],
  length: number = 3
): string => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // List of alphabet letters used for generating unique abbreviations

  // Remove non-alphabetic characters from the beginning of the string to ensure only letters are used
  name = name.replace(/^[^a-zA-Z]+/, '');

  // Function to generate a unique abbreviation based on the given name
  const generateUniqueAbbreviation = (
    name: string,
    usedCodes: Set<string>,
    length: number
  ): string => {
    const words = name.split(/\s+/).filter(Boolean); // Split the name into words and remove extra spaces
    let abbreviation = '';

    // If there is only one word, use the first few letters of that word
    if (words.length === 1) {
      abbreviation = words[0].substring(0, length).toUpperCase();
    } else {
      // If there are multiple words, take the first letter of each word to form an abbreviation
      abbreviation = words
        .map((word) => word.charAt(0))
        .join('')
        .toUpperCase();
    }

    // If the abbreviation is shorter than the desired length, append letters from the last word or 'A'
    if (abbreviation.length < length) {
      const lastWord = words[words.length - 1].toUpperCase();
      for (let i = abbreviation.length; i < length; i++) {
        abbreviation += lastWord[i] || 'A';
      }
    } else {
      // If the abbreviation is longer than desired, trim it to the required length
      abbreviation = abbreviation.substring(0, length);
    }

    let attemptCount = 0; // Track the number of attempts to avoid conflicts with existing codes
    let suffix = 0; // Used if all combinations are already taken

    // If the abbreviation is already used, try different variations
    while (usedCodes.has(abbreviation)) {
      attemptCount++;
      // If too many attempts are made, append a numerical suffix
      if (attemptCount >= alphabet.length ** length) {
        abbreviation = abbreviation.substring(0, length - 1) + suffix++;
        if (suffix > 9) throw new Error('Cannot find a unique abbreviation.'); // Throw an error if too many attempts fail
      } else {
        // Modify the last letter in the abbreviation using the next letter in the alphabet
        const lastIndex = attemptCount % alphabet.length;
        abbreviation =
          abbreviation.substring(0, length - 1) + alphabet[lastIndex];
      }
    }

    return abbreviation; // Return the successfully generated unique abbreviation
  };

  // Convert existing abbreviations to uppercase for case-insensitive matching
  const usedCodes = new Set(existingCodes.map((code) => code.toUpperCase()));

  // Generate a unique abbreviation
  const abbreviation = generateUniqueAbbreviation(name, usedCodes, length);
  usedCodes.add(abbreviation); // Add the newly generated abbreviation to the set of used codes

  return abbreviation; // Return the final unique abbreviation
};
