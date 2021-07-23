export const makeFirstLetterCapital = (value: string): string => {
  const firstLetter = value.slice(0, 1).toUpperCase();
  const remaindedString = value.slice(1);

  return `${firstLetter}${remaindedString}`;
};

export const makeDescriptionShorter = (value: string): string => {
  if (value.includes('обл')) {
    return 'Облачно';
  }

  return value;
};
