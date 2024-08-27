import { io } from 'socket.io-client';
import BackURL from '../../backendUrl';

const socket = io(BackURL,{reconnection:true});

export default socket;