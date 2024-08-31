export function RoundDecimals(number: number, decimals: number) {
  const numberRegexp = new RegExp("\\d\\.(\\d){" + decimals + ",}");

  if (numberRegexp.test(number.toString())) {
    return Number(number.toFixed(decimals));
  } else {
    return Number(number.toFixed(decimals)) === 0 ? 0 : number;
  }
}
