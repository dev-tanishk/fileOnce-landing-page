import { API_BASE_URL } from '../constants/api';

export async function apiRequest(path, { method = 'GET', body, headers = {} } = {}) {
  const url = `${API_BASE_URL}${path}`;
  const init = {
    method,
    headers: {
      ...headers,
    },
  };

  if (body instanceof FormData) {
    init.body = body;
  } else if (body !== undefined) {
    init.headers['Content-Type'] = 'application/json';
    init.body = JSON.stringify(body);
  }

  const res = await fetch(url, init);
  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const err = new Error(data.message || res.statusText || 'Request failed');
    err.response = { data, status: res.status };
    throw err;
  }

  return data;
}

export function extractError(error, fallback = 'Something went wrong') {
  if (error.response?.data?.message) return error.response.data.message;
  if (error.message) return error.message;
  return fallback;
}
