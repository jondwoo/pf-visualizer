export const fixDecimals = (data) => {
  let x = 0;
  let len = data.length;
  while (x < len) {
    data[x] = data[x].toFixed(2);
    x++;
  }
  return data;
};
