export function extractParam(params: { [k: string]: any }, key: string): string {
  if (!params.hasOwnProperty(key)) {
    return null;
  }

  return params[key];
}

export function extractNumberParam(params: { [k: string]: any }, key: string): number | null {
  if (!params.hasOwnProperty(key)) {
    return null;
  }

  return convertStringToNumber(params[key]);
}

export function convertStringToNumber(str: string): number {
  if (str === undefined || str === null || str === '') {
    return null;
  }

  const value = +str;
  if (isNaN(value)) {
    return null;
  }

  return value;
}
