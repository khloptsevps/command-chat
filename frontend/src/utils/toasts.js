import { toast } from 'react-toastify';

const networkError = () => {
  toast.error('Ошибка соединения', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default {
  networkError,
};
