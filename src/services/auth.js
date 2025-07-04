export const login = async ({ username, password }) => {
  // Simulated single Admin login
  if (username === 'admin' && password === 'admin123') {
    return { status: 'success', token: 'mock-token-123' };
  } else {
    return { status: 'error', message: 'Invalid credentials' };
  }
};

export const logout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userRole');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

export const getUserRole = () => 'Admin';