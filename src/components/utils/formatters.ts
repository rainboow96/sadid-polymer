export const toPersianDigits = (value: string | number): string => {
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return value.toString().replace(/\d/g, (match) => persianNumbers[parseInt(match)]);
};
