import axios from 'axios';

export default function MyAPI() {
  return axios.create({
    timeout: import.meta.env.VITE_DEFAULT_TIMEOUT,
  });
}
