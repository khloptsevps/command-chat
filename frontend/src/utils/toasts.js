import { toast } from 'react-toastify';

export default ({ type, text }) => {
  const params = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  switch (type) {
    case 'netWorkError':
      toast.error(text, params);
      break;
    case 'success':
      toast.success(text, params);
      break;
    default:
      break;
  }
};
