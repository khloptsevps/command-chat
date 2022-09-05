import axios from 'axios';
import { toast } from 'react-toastify';
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
      if (axios.isAxiosError(error)) {
        toast.error('Ошибка соединения', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }
);
export default signInFormHandler;
