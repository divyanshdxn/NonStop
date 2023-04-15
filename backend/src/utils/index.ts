export function queryToNum(valRaw: any): number | null {
  try {
    if (typeof valRaw === "string") {
      return Number.parseInt(valRaw);
    } else {
      return null;
    }
  } catch (_err) {
    return null;
  }
}
