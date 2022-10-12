import { useContext } from 'react';
import { SocketContext } from '../contexts/index.jsx';

export default () => {
  const socketApi = useContext(SocketContext);
  return socketApi;
};
