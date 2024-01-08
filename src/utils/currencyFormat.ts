export const currencyFormat = (num: number) =>
  Number(num)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
