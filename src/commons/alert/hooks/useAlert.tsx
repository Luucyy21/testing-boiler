import {Types} from 'generated/types';
import {createRef} from 'react';
import Alert from '..';

export const alertRef = createRef<Alert>();

export const UseAlert = (option: Types.ISnackBar) => {
  if (alertRef && alertRef.current) {
    alertRef.current.onShow(option);
  }
};

const Alerts = {
  show: (option: Types.ISnackBar) => UseAlert(option),
};

export default Alerts;
