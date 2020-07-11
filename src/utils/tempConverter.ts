export const kelvinToFahrenheit = (temp: number) => {
  return `${Math.floor(1.8 * (temp - 273) + 32)}º`;
};

export const kelvinToCelsius = (temp: number) => {
  return `${Math.floor(temp - 273.15)}º`;
};
