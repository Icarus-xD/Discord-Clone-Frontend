import { FC, useState, useEffect } from 'react';
import AuthBox from '../../shared/AuthBox';
import LoginPageInputs from './LoginPageInputs';
import LoginPageHeader from './LoginPageHeader';
import LoginPageFooter from './LoginPageFooter';
import { validateLoginForm } from '../../shared/utils/validators';
import { useActions } from '../../../hooks/useActions';
import { useAuthRedirect } from '../../../hooks/useAuthRedirect';

const LoginPage: FC = () => {
  
  useAuthRedirect();
  const { login } = useActions();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ email, password }));
  }, [email, password, setIsFormValid]);

  const handleLogin = () => {
    login({
      email,
      password,
    });
  };

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter 
        isFormValid={isFormValid}
        handleLogin={handleLogin}
      />
    </AuthBox>
  );
};

export default LoginPage;