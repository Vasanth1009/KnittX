import { Navigate } from 'react-router-dom';
import CustomerForm from '../components/Customer/CustomerForm';
import CustomerList from '../components/Customer/CustomerList';
import AppLayout from '../components/Layout/AppLayout';
import Customer from '../pages/Customer';
import DeliveryChallan from '../pages/DeliveryChallan';
import Invoice from '../pages/Invoice';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import SignUp from '../pages/SignUp';

const AppRoutes = () => [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '', element: <Navigate to="profile" /> },
      { path: 'profile', element: <Profile /> },
      {
        path: 'customers',
        element: <Customer />,
        children: [
          { path: '', element: <CustomerList /> },
          { path: 'new', element: <CustomerForm /> },
          { path: ':id/edit', element: <CustomerForm /> },
        ],
      },
      { path: 'invoices', element: <Invoice /> },
      { path: 'delivery-challans', element: <DeliveryChallan /> },
    ],
  },
  { path: 'login', element: <Login /> },
  { path: 'signup', element: <SignUp /> },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
];

export default AppRoutes;
