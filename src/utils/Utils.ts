export default {
  random: (max: number = 10) => {
    return Math.floor(Math.random() * max + 1);
  },
  randomFrom: (min: number = 10, max: number = 20) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
};
