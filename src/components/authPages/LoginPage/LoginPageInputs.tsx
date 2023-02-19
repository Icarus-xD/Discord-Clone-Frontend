import { FC } from 'react';
import InputWithLabel from '../../shared/InputWithLabel';

interface Props {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

const LoginPageInputs: FC<Props> = ({ email, setEmail, password, setPassword }) => {
  return (
    <>
      <InputWithLabel 
        value={email}
        setValue={setEmail}
        label='E-mail'
        type='text'
        placeholder='Enter e-mail address'
      />
      <InputWithLabel 
        value={password}
        setValue={setPassword}
        label='Password'
        type='password'
        placeholder='Enter password'
      />
    </>
  );
};

export default LoginPageInputs;