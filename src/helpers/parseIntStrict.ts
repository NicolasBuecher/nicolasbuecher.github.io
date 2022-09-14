const isIntegerRegex = /^([+-]?[1-9]\d*|0)$/;

/**
 * Parses a string and returns the corresponding int.
 * Returns undefined if the string cannot be parsed.
 *
 * @param {string} value The string to parse
 * @returns {number | undefined}
 */
function parseIntStrict(value: string): (number | undefined) {
  if (isIntegerRegex.test(value)) {
    return Number.parseInt(value, 10);
  }

  return undefined;
}

export default parseIntStrict;
