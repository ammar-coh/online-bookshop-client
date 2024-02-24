import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.REACT_APP_BASE_URL;

 export const socket = io(URL, {
    autoConnect: true,
    withCredentials: true, // Include cookies in cross-origin requests
    extraHeaders: {
        'Access-Control-Allow-Origin': '*',
        // Additional headers if required
    },
  });;
  // const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:8081';
