import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';

export const useAuthRedirect = () => {
  const userDetails = useSelector((state: RootState) => state.auth.userDetails);

  const navigate = useNavigate();
  
  useEffect(() => {
    userDetails !== null && navigate('/dashboard'); 
  }, [userDetails, navigate]);
};