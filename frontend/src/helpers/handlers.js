import axios from 'axios';
import storage from './storage.js';

// temporary
const api = '/api/v1/login';

const signInFormHandler = (setAuthFailed, { logIn }) => (
  async (values, { resetForm, setSubmitting }) => {
    try {
      setAuthFailed(false);
      const response = await axios.post(api, values);
      storage.setItem('user', response.data);
      resetForm();
      logIn();
    } catch (error) {
      setSubmitting(false);
      if (error.isAxiosError && error.response.status === 401) {
        setAuthFailed(true);
      }
    }
  }
);

export default signInFormHandler;
