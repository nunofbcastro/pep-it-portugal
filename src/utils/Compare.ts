export function compareValues(a: any, b: any): number {
  let comparison: number;

  if (!isNaN(a) && !isNaN(b)) {
    comparison = a - b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    comparison = a.localeCompare(b);
  } else if (typeof a === 'object' && typeof b === 'object') {
    comparison = compareObjects(a, b);
  } else {
    comparison = a.toString().localeCompare(b.toString());
  }

  return comparison;
}

function compareObjects(a: any, b: any): number {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  for (let i = 0; i < Math.min(aKeys.length, bKeys.length); i++) {
    const keyComparison = compareValues(a[aKeys[i]], b[bKeys[i]]);
    if (keyComparison !== 0) {
      return keyComparison;
    }
  }

  return aKeys.length - bKeys.length;
}
