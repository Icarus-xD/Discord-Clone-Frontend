interface validateLoginFormArgs {
  email: string;
  password: string;
}

export const validateEmail = (email: string) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

export const validateLoginForm = (
  { email, password }: validateLoginFormArgs
) => {
  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  const isPasswordValid = password.length >= 6;

  return isEmailValid && isPasswordValid;
};

interface validateRegisterFormArgs {
  email: string;
  username: string;
  password: string;
}

export const validateRegisterForm = (
  { email, username, password }: validateRegisterFormArgs
) => {
  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  const isUsernameValid = username.length >= 3 && username.length <= 24;
  const isPasswordValid = password.length >= 6;

  return isEmailValid && isUsernameValid && isPasswordValid;
};