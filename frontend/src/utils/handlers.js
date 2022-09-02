import axios from 'axios';
import storage from './storage.js';
import routes from './routes.js';

const signInFormHandler = (setAuthFailed, { logIn }, navigate) => (
  async (values, { resetForm, setSubmitting }) => {
    try {
      setAuthFailed(false);
      const response = await axios.post(routes.signInPath(), values);
      storage.setItem(response.data);
      resetForm();
      logIn();
      navigate('/');
    } catch (error) {
      setSubmitting(false);
      if (error.isAxiosError && error.response.status === 401) {
        setAuthFailed(true);
      }
      console.log(error);
    }
  }
);
export default signInFormHandler;
