import { FC } from 'react';
import InputWithLabel from '../../shared/InputWithLabel';

interface Props {
  email: string;
  setEmail: (email: string) => void;
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

const RegisterPageInputs: FC<Props> = ({ 
  email, setEmail, username, setUsername, password, setPassword
}) => {
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
        value={username}
        setValue={setUsername}
        label='Username'
        type='text'
        placeholder='Enter a username'
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

export default RegisterPageInputs;