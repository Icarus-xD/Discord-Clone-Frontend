import { createSlice } from '@reduxjs/toolkit';
import { getAlertActions } from '../actions/alertActions';

const actions = getAlertActions();

export interface AlertInitialState {
  showAlertMessage: boolean;
  alertMessageContent: string;
  error: boolean;
} 

const initialState: AlertInitialState = {
  showAlertMessage: false,
  alertMessageContent: '',
  error: false,
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.openAlertMessage, (state, { payload }) => {
        state.alertMessageContent = payload;
        state.showAlertMessage = true;
        state.error = false;
      })
      .addCase(actions.openAlertError, (state, { payload }) => {
        console.log(payload);
        state.alertMessageContent = payload;
        state.showAlertMessage = true;
        state.error = true;
      })
      .addCase(actions.closeAlertMessage, (state, _) => {
        state.showAlertMessage = false;
        state.alertMessageContent = '';
        state.error = false;
      });
  },
});

const alertReducer = alertSlice.reducer;

export default alertReducer;