export const slug = (str, spaceReplacement, specialCharReplacement) => {
  var matchSpaces = /\s+/g,
    matchSpecialChars = /[^a-zA-Z0-9-_]+/g;

  return str
    .replace(matchSpaces, spaceReplacement || "-")
    .replace(matchSpecialChars, specialCharReplacement || "")
    .toLowerCase();
};
