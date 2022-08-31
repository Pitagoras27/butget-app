export const formatMoney = (money) => (
  money.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
);

export const formatDate = (timestamp) => new Date(timestamp)
  .toLocaleString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
});

export const generateId = () => Math.random(Date.now()).toString(16).substring(2);
