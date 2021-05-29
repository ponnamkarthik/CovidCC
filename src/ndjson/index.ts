const parse = (jsonString: string) => {
  const type = typeof jsonString;
  if (type !== "string")
    throw new Error(`Input have to be string but got ${type}`);

  const jsonRows = jsonString.split(/\n|\n\r/).filter(Boolean);
  return jsonRows.map((jsonStringRow) => JSON.parse(jsonStringRow));
};

export default parse;
