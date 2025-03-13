# unique-abbr

A simple TypeScript utility to generate unique three-letter abbreviations based on names, ensuring no duplicates from a given list.

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
const abbreviation = uniqueAbbr("John Doe", existingCodes);
console.log(abbreviation); // Example output: "JDB"
```

## Function Signature

```ts
uniqueAbbr(nama: string, existingCodes: string[]): string;
```

### Parameters
- `nama`: A string representing the name for which an abbreviation should be generated.
- `existingCodes`: An array of existing abbreviations to ensure uniqueness.

### Returns
- A unique three-letter abbreviation as a string.

## Algorithm
1. Extract initials from the name.
2. If the abbreviation already exists in `existingCodes`, modify it using alphabetical increments.
3. Ensure the generated abbreviation remains unique.

## Error Handling
Throws an error if a unique abbreviation cannot be found.

## License

MIT License

## Contribution

Contributions are welcome! If you have suggestions, bug reports, or new features to add, please open an issue or pull request on the [GitHub repository](https://github.com/liu-purnomo/unique-abbr).

## License

This project is licensed under the ISC License. See the [LICENSE](./LICENSE) file for more details.

## Repository

- **Repository:** [https://github.com/liu-purnomo/unique-abbr](https://github.com/liu-purnomo/unique-abbr)
- **Bugs:** [https://github.com/liu-purnomo/unique-abbr/issues](https://github.com/liu-purnomo/unique-abbr/issues)
- **Homepage:** [https://github.com/liu-purnomo/unique-abbr#readme](https://github.com/liu-purnomo/unique-abbr#readme)
- **Author:** [liupurnomo.com](https://liupurnomo.com)

