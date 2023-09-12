const isGuid = (value: string): boolean => {
  const guidRegex = new RegExp(
    "^[0-9a-f]{8}(-[0-9a-f]{4}){4}[0-9a-f]{8}$",
    "i",
  );
  return guidRegex.test(value);
};

export default isGuid;
