export const transformPhone = (phone: string): number => {
  const result = phone
    .split(/(.{1})/)
    .filter((i) => !!i)
    .map((c) => {
      if (/(\d)/.test(c)) {
        return c;
      } else if ('ABC'.includes(c)) {
        return 2;
      } else if ('DEF'.includes(c)) {
        return 3;
      } else if ('GHI'.includes(c)) {
        return 4;
      } else if ('JKL'.includes(c)) {
        return 5;
      } else if ('MNO'.includes(c)) {
        return 6;
      } else if ('PQRS'.includes(c)) {
        return 7;
      } else if ('TUV'.includes(c)) {
        return 8;
      } else if ('WXYZ'.includes(c)) {
        return 9;
      }
      return '';
    })
    .join('');
  return parseInt(result);
};
