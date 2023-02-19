import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomPrimaryButton from '../../shared/CustomPrimaryButton';
import RedirectInfo from '../../shared/RedirectInfo';
import { Tooltip } from '@mui/material';

interface Props {
  isFormValid: boolean;
  handleRegister: () => void;
}

const RegisterPageFooter: FC<Props> = ({ handleRegister, isFormValid }) => {

  const navigate = useNavigate();

  const handlePushToLoginPage = () => {
    navigate('/login');
  };

  return (
    <>
      <Tooltip
        title={
          !isFormValid ? 
            'Correct e-mail address should be provided, username should contains between 3 and 24 characters and password should contains at least 6 characters' : 
            'Press to register!'}
      >
        <div>
          <CustomPrimaryButton 
            label='Register'
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>  
      </Tooltip>
      <RedirectInfo 
        text='Already have an account?'
        redirectText=' Log in with your account'
        additionalStyles={{ marginTop: '5px' }}
        handleRedirect={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;