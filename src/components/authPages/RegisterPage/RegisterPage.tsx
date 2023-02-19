import { Typography } from '@mui/material';
import { FC, useState,useEffect } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useAuthRedirect } from '../../../hooks/useAuthRedirect';
import AuthBox from '../../shared/AuthBox';
import { validateRegisterForm } from '../../shared/utils/validators';
import RegisterPageFooter from './RegisterPageFooter';
import RegisterPageInputs from './RegisterPageInputs';

const RegisterPage: FC = () => {

  useAuthRedirect();
  const { register } = useActions();

  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ email, username, password }));
  }, [email, username, password, setIsFormValid]);

  const handleRegister = () => {
    register({
      email,
      username,
      password,
    });
  };

  return (
    <AuthBox>
      <Typography
        variant='h5'
        sx={{ color: '#FFF' }}
      >
        Create an account
      </Typography>
      <RegisterPageInputs 
        email={email}
        username={username}
        password={password}
        setEmail={setEmail}
        setUsername={setUsername}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
};

export default RegisterPage;