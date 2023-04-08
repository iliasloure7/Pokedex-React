export const extractIdFromUrl = (url: string): string => {
  const result = url.split('/');
  const id = result[result.length - 2];
  return id;
};
