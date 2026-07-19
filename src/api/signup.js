import { apiRequest } from './client';

export const signupApi = {
  startSignup: (data) => apiRequest('/auth/signup/start', { method: 'POST', body: data }),
  markPaymentCompleted: (token) =>
    apiRequest(`/auth/signup/${token}/payment-completed`, { method: 'POST' }),
  getPaymentProofUploadUrl: (token, fileName) =>
    apiRequest(`/auth/signup/${token}/payment-proof/upload-url?fileName=${encodeURIComponent(fileName)}`),
  confirmPaymentProof: (token, data) =>
    apiRequest(`/auth/signup/${token}/payment-proof/confirm`, { method: 'POST', body: data }),
  uploadPaymentProofLocal: async (token, file) => {
    const formData = new FormData();
    formData.append('file', file);
    return apiRequest(`/auth/signup/${token}/payment-proof`, { method: 'POST', body: formData });
  },
};

export const billingApi = {
  getConfig: () => apiRequest('/api/billing/config'),
  getPlans: () => apiRequest('/api/billing/plans'),
};
