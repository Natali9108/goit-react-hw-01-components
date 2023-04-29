export const theme = Object.freeze({
  colors: {
    black: '#2e2a2a',
    primaryBlack: '#000000',
    primaryWhite: '#ffffff',
    userTextColor: '#24232399',
    statsBgColor: '#b4b6bf66',
    statsBorderColor: '#aeafb7',
    renderColor: getRandomHexColor,
  },
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
