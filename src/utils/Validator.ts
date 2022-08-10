const Validator = {
  isSkill(s: string) {
    // allow alphanumeric, +, - , ()
    return /^[\w+\-()\s]+$/.test(s);
  },

  isNotNull: (variable: any) => {
    return variable !== null && !!(variable || '').toString().trim();
  },

  isNumber: (number: any) => {
    return !/[^0-9]/.test(number);
  },

  isInvalid: (variable: any, replace: any = null) => {
    return Validator.isNotNull(variable) ? variable : replace;
  },

  isEmail(email: string) {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  },
};

export default Validator;
