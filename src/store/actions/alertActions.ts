import { createAction } from '@reduxjs/toolkit';

export const openAlertMessage = createAction<string>('alert/show');

export const openAlertError = createAction<string>('alert/showError');

export const closeAlertMessage = createAction('alert/close');

export const getAlertActions = () => {
  return {
    openAlertMessage,
    openAlertError,
    closeAlertMessage,
  };
};