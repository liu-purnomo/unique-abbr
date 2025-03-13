import { uniqueAbbr } from '../src';

describe('uniqueAbbr function', () => {
  test('Generates a unique abbreviation of default length 3', () => {
    const existingCodes = ['ABC', 'DEF', 'GHI'];
    const result = uniqueAbbr('John Doe', existingCodes);
    expect(result).toHaveLength(3);
    expect(existingCodes).not.toContain(result.toUpperCase());
  });

  test('Generates a unique abbreviation with length 4', () => {
    const existingCodes = ['JDOE', 'JDON'];
    const result = uniqueAbbr('John Doe', existingCodes, 4);
    expect(result).toHaveLength(4);
    expect(existingCodes).not.toContain(result.toUpperCase());
  });

  test('Handles single-word names correctly', () => {
    const existingCodes: string[] = [];
    const result = uniqueAbbr('Alice', existingCodes, 3);
    expect(result).toHaveLength(3);
  });

  test('Handles multi-word names correctly', () => {
    const existingCodes = ['JSM'];
    const result = uniqueAbbr('John Smith', existingCodes, 3);
    expect(result).toHaveLength(3);
    expect(result).not.toBe('JSM');
  });

  test('Handles duplicate abbreviations and generates new ones', () => {
    const existingCodes = ['JDO', 'JDA', 'JDB'];
    const result = uniqueAbbr('John Doe', existingCodes, 3);
    expect(result).toHaveLength(3);
    expect(existingCodes).not.toContain(result.toUpperCase());
  });

  test('Handles very short names', () => {
    const existingCodes: string[] = [];
    const result = uniqueAbbr('A', existingCodes, 3);
    expect(result).toHaveLength(3);
  });

  test('Handles names with spaces and special characters', () => {
    const existingCodes: string[] = [];
    const result = uniqueAbbr('John-Doe Jr.', existingCodes, 3);
    expect(result).toHaveLength(3);
  });

  test('Handles long names', () => {
    const existingCodes: string[] = [];
    const result = uniqueAbbr('Jonathan Alexander Smith', existingCodes, 5);
    expect(result).toHaveLength(5);
  });

  test('Handles existingCodes with case insensitivity', () => {
    const existingCodes = ['JDO', 'ABC'];
    const result = uniqueAbbr('John Doe', existingCodes, 3);
    expect(result).toHaveLength(3);
    expect(existingCodes.map((c) => c.toUpperCase())).not.toContain(
      result.toUpperCase()
    );
  });

  test('Handles edge case where all initials are already taken', () => {
    const existingCodes = ['JDO', 'JDA', 'JDB', 'JDC'];
    const result = uniqueAbbr('John Doe', existingCodes, 3);
    expect(result).toHaveLength(3);
    expect(existingCodes).not.toContain(result.toUpperCase());
  });

  test('Generates abbreviation with different lengths (edge cases)', () => {
    expect(uniqueAbbr('Emily Brown', [], 2)).toHaveLength(2);
    expect(uniqueAbbr('Emily Brown', [], 5)).toHaveLength(5);
    expect(uniqueAbbr('Emily Brown', [], 6)).toHaveLength(6);
  });
});
