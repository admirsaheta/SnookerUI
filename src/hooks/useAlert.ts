import { useEffect } from 'react';
import { Alert as RNAlert } from 'react-native';
import { UIAlert } from '../utilities/UIAlert';

// @ts-ignore
const triggerAlert = ({ title, message = null, actions }: UIAlert) => {
// @ts-ignore
  const mappedButtons = actions.map(({ title, action, role = 'default' }) => ({
    text: title,
    onPress: action,
    style: role,
  }));
  RNAlert.alert(title, message, mappedButtons);
};

export const useAlert = (alertData: UIAlert) => {
  useEffect(() => {
    if (alertData?.isPresented?.value) {
      triggerAlert(alertData);
      alertData.isPresented.setValue(false);
    }
  }, [alertData?.isPresented?.value]);
};
