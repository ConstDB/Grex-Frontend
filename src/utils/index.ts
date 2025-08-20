export const unslugify = (string: string) => {
  return string.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};
