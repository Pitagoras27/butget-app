export const formatMoney = (money) => (
  money.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
);