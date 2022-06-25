import { Navigate } from 'react-router-dom';
import CustomerForm from '../components/Customer/CustomerForm';
import CustomerList from '../components/Customer/CustomerList';
import InvoiceForm from '../components/Invoice/InvoiceForm';
import InvoiceList from '../components/Invoice/InvoiceList';
import AppLayout from '../components/Layout/AppLayout';
import InvoicePDFPreview from '../components/Templates/InvoicePDF/InvoicePDFPreview';
import Customer from '../pages/Customer';
import DeliveryChallan from '../pages/DeliveryChallan';
import Invoice from '../pages/Invoice';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import SignUp from '../pages/SignUp';

const AppRoutes = () => [
  {
    path: '',
    element: <AppLayout />,
    children: [
      { path: '', element: <Navigate to="customers" /> },
      {
        path: 'customers',
        element: <Customer />,
        children: [
          { path: '', element: <CustomerList /> },
          { path: 'new', element: <CustomerForm /> },
          { path: ':id/edit', element: <CustomerForm /> },
        ],
      },
      { path: 'profile', element: <Profile /> },
      {
        path: 'invoices',
        element: <Invoice />,
        children: [
          { path: '', element: <InvoiceList /> },
          { path: 'new', element: <InvoiceForm /> },
          { path: ':id/edit', element: <CustomerForm /> },
          { path: ':id/invoice-preview', element: <InvoicePDFPreview /> },
          { path: 'invoice-preview', element: <InvoicePDFPreview /> },
        ],
      },
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
