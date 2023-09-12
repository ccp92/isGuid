const checkIsGuid = (
  value: string,
  options?: { version?: number },
): boolean => {
  const guidRegex = new RegExp(
    `^[0-9a-f]{8}-[0-9a-f]{4}-[${
      options?.version ? options.version : "1-5"
    }][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$`,
    "i",
  );
  return guidRegex.test(value);
};

export default checkIsGuid;
