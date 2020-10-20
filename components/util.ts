export const textTruncate = (
  str?: string,
  length = 88,
  ending = "..."
): string => {
  if (str === null || str === undefined) return "Não possue descrição.";
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  }
  return str;
};

export const breakpoints = {
  phone: {
    min: "320px",
    max: "480px",
  },
  tablet: {
    min: "481px",
    max: "768px",
  },
  desktop: {
    min: "769px",
    max: "1024px",
  },
  monitor: "1021",
};
