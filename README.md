# unique-abbr

A simple TypeScript utility to generate unique abbreviations based on names, ensuring no duplicates from a given list. The abbreviation length can be customized.

## Installation

You can install this package via npm:

```sh
npm install unique-abbr
```

## Usage

### Importing the function

```ts
import { uniqueAbbr } from "unique-abbr";
```

### Generating a unique abbreviation

```ts
const existingCodes = ["JDO", "JDA", "ABC"];
const abbreviation = uniqueAbbr("John Doe", existingCodes, 4);
console.log(abbreviation); // Example output: "JDOE"
```

## Function Signature

```ts
uniqueAbbr(nama: string, existingCodes: string[], length?: number): string;
```

### Parameters
- `nama`: A string representing the name for which an abbreviation should be generated.
- `existingCodes`: An array of existing abbreviations to ensure uniqueness.
- `length` (optional, default = `3`): The desired length of the abbreviation.

### Returns
- A unique abbreviation of the specified length.

## Algorithm
1. Extract initials from the name.
2. If the abbreviation already exists in `existingCodes`, modify it using alphabetical increments.
3. Ensure the generated abbreviation remains unique and matches the specified length.

## Error Handling
Throws an error if a unique abbreviation cannot be found.

## Repository

- **Repository:** [https://github.com/liu-purnomo/unique-abbr](https://github.com/liu-purnomo/unique-abbr)
- **Bugs:** [https://github.com/liu-purnomo/unique-abbr/issues](https://github.com/liu-purnomo/unique-abbr/issues)
- **Homepage:** [https://github.com/liu-purnomo/unique-abbr#readme](https://github.com/liu-purnomo/unique-abbr#readme)
- **Author:** [liupurnomo.com](https://liupurnomo.com)

## License

MIT License