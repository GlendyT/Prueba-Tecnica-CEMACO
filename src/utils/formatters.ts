
export const formatPriceWithParts = (price: number) => {
  const [integerPart, decimalPart] = price.toFixed(2).split(".");
  return {
    integer: integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    decimal: decimalPart,
  };
};
