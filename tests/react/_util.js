import isArray from 'isarray';

export function transformModelForTests(obj) {
  // An array has been passed
  if (isArray(obj)) {
    return obj.map(transformModelForTests);
  }

  if ('children' in obj) {
    const { children: chldrn, ...rest } = obj;

    return {
      ...rest,
      chldrn: chldrn.map(transformModelForTests)
    };
  }

  return obj;
}
