import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import fireApp from './helpers/firebase-config';
import AppRoutes from './routes';

const App = () => {
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  const routing = useRoutes(AppRoutes());
  onAuthStateChanged(auth, (user) => {
    // localStorage.setItem('currentUser', JSON.stringify(user));
    // if (!user) {
    //   localStorage.removeItem('currentUser');
    // }
    setIsLoading(false);
  });

  if (isLoading) return <>Loading....</>;

  const currentUser = localStorage.getItem('currentUser');
  if (currentUser === null) <Navigate to="login" />;

  return <>{routing}</>;
};

export default App;
