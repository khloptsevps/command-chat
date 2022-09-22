import { useContext } from 'react';
import { ModalContext } from '../contexts/index.jsx';

const useModal = () => useContext(ModalContext);

export default useModal;
