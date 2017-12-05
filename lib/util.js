export const compose = (...fns) =>
  fns.reduce((f, g) => (...args) => f(g(...args)));

export const concat = (x = "", z = "") => z.concat(x);

export const slug = (str, spaceReplacement, specialCharReplacement) => {
  var matchSpaces = /\s+/g,
    matchSpecialChars = /[^a-zA-Z0-9-_]+/g;

  return str
    .replace(matchSpaces, spaceReplacement || "-")
    .replace(matchSpecialChars, specialCharReplacement || "")
    .toLowerCase();
};
