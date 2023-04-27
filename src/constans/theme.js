export const theme = Object.freeze({
  colors: {
    black: '#2e2a2a',
    userTextColor: '#24232399',
    statsBgColor: '#f7f7f7',
    renderColor: getRandomHexColor,
  },
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
