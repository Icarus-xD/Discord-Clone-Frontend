import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomPrimaryButton from '../../shared/CustomPrimaryButton';
import RedirectInfo from '../../shared/RedirectInfo';
import { Tooltip } from '@mui/material';

interface Props {
  isFormValid: boolean;
  handleLogin: () => void;
}

const LoginPageFooter: FC<Props> = ({ handleLogin, isFormValid }) => {

  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    navigate('/register');
  };

  return (
    <>
      <Tooltip
        title={
          !isFormValid ? 
            'Enter correct e-mail address and password should contains at least 6 characters' : 
            'Press to log in!'}
      >
        <div>
          <CustomPrimaryButton 
            label='Log In'
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>  
      </Tooltip>
      <RedirectInfo 
        text='Need an account?'
        redirectText=' Create an account'
        additionalStyles={{ marginTop: '5px' }}
        handleRedirect={handlePushToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;