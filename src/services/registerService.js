import api from '../api/axios';

export async function registerUser(data) {
  return api.post('/api/register', data);
}
