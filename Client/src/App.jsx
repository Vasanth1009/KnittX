import { useEffect } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import AppRoutes from './routes';

import './styles/App.scss';

const App = () => {
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      <Navigate to="/" />;
    } else {
      <Navigate to="login" />;
    }
  }, []);

  const routing = useRoutes(AppRoutes());
  return <>{routing}</>;
};

export default App;
