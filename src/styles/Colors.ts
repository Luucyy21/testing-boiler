const colorAdjust = (color, amount) => {
  return (
    '#' +
    color
      ?.replace(/^#/, '')
      .replace(/../g, c =>
        (
          '0' +
          Math.min(255, Math.max(0, parseInt(c, 16) + amount)).toString(16)
        ).substr(-2),
      )
  );
};

export default {
  colorAdjust,
  PRIMARY: '#3c1361',
  SECONDARY: '#DDA700',

  TEXT: '#565D70',
  BORDER: '#ddd',
  BACKGROUND: '#f4f4f4',

  TRANSPARENT: '#0000',

  RED: '#EA2027',
  BLUE: '#0287EE',
  GOLD: '#FFAE00',
  GREEN: '#1CC222',
  PURPLE: '#A700A6',
  DARKBLUE: '#2C185F',
  ORANGE: '#ffcf33',
  YELLOW: '#f1c40f',
  PINK: '#f14e6d',

  BLUE_MDEIUM: '#0652DD',
  LIST_BACKGROUND: '#000000c7',
  Blur: (color: string) => `${color}0F`,

  GRAY_LIGHT: '#E6E6E6',
  GRAY_MEDIUM: '#CACACA',
  GRAY_DARK: '#8A8A8A',

  RANDOM: [
    '#0652DD',
    '#F8004E',
    '#A700A6',
    '#1CC222',
    '#FFAE00',
    '#0287EE',
    '#ff553e',
    '#D980FA',
    '#f1c40f',
    '#d35400',
  ],
};
