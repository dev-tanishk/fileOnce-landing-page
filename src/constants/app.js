/** Main app (login, dashboard, payment proof upload from email). */
export const APP_URL =
  import.meta.env.VITE_APP_URL ??
  (import.meta.env.DEV ? 'http://localhost:5173' : 'https://app.fileonce.in');

export const APP_LOGIN_URL = `${APP_URL}/login`;

export const EARLY_ACCESS_PATH = '/early-access';
