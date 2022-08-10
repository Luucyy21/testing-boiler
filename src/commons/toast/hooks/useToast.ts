import {Types} from 'generated/types';
import {createRef} from 'react';
import Toast from '..';

export const toastRef = createRef<Toast>();

export const UseToast = (option: Types.IToats) => {
  if (toastRef.current) {
    toastRef.current.onShow(option);
  }
};

const Toasts = {
  show: (option: Types.IToats) => UseToast(option),
};
export default Toasts;
