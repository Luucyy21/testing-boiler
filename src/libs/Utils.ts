export const sleep = (timeout: number) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(null);
    }, timeout);
  });
