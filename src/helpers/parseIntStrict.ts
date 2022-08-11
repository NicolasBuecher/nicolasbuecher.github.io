const isIntegerRegex = /^([+-]?[1-9]\d*|0)$/;

function parseIntStrict(value: string): (number | undefined) {
  if (isIntegerRegex.test(value)) {
    return Number.parseInt(value, 10);
  }

  return undefined;
}

export default parseIntStrict;
