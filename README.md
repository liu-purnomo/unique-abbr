# Unique Abbr

![npm](https://img.shields.io/npm/v/unique-abbr)
![license](https://img.shields.io/npm/l/unique-abbr)

A simple TypeScript utility to generate unique three-letter abbreviations based on names, ensuring no duplicates from a given list.

## Installation

You can install `unique-abbr` via npm:

```sh
npm install unique-abbr
```

or using yarn:

```sh
yarn add unique-abbr
```

## Usage

Import the function and generate unique abbreviations:

### Basic Example

```ts
import { uniqueAbbr } from 'unique-abbr';

const existingCodes = ['ABC', 'DEF', 'XYZ'];
const abbreviation = uniqueAbbr('John Doe', existingCodes);

console.log(abbreviation); // Example output: 'JD' or 'JOH'
```

### Custom Abbreviation Length

You can specify the abbreviation length:

```ts
const abbreviation = uniqueAbbr('Alice Wonderland', existingCodes, 4);
console.log(abbreviation); // Example output: 'ALWO'
```

## API

### `uniqueAbbr(name: string, existingCodes: string[], length: number = 3): string`

Generates a unique abbreviation from a name, avoiding duplicates.

#### Parameters:
- `name` (**string**) - The name to generate an abbreviation for.
- `existingCodes` (**string[]**) - List of existing abbreviations to avoid duplicates.
- `length` (**number**, optional, default: `3`) - The desired abbreviation length.

#### Returns:
- A **string** containing the unique abbreviation.

## Examples

### Handling Duplicate Abbreviations

If an abbreviation is already in use, it tries to create a unique variant:

```ts
const existingCodes = ['JD', 'JOH'];
const abbreviation = uniqueAbbr('John Doe', existingCodes);
console.log(abbreviation); // Example output: 'JO1'
```

### Edge Cases

```ts
uniqueAbbr('12345', []); // Ignores non-alphabetic characters
uniqueAbbr('A B C', []); // Returns 'ABC' or variation
```

## Contributing

Feel free to submit issues or pull requests on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links
- [GitHub Repository](https://github.com/liu-purnomo/unique-abbr)
- [Report Issues](https://github.com/liu-purnomo/unique-abbr/issues)

