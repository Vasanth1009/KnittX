import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/App.scss';
import Customer from './pages/Customer';
import DeliveryChallan from './pages/DeliveryChallan';
import Invoice from './pages/Invoice';
import Profile from './pages/Profile';
import AppLayout from './components/Layout/AppLayout';
import CustomerForm from './components/Customer/CustomerForm';
import CustomerList from './components/Customer/CustomerList';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Profile />} />
          <Route path="customers" element={<Customer />}>
            <Route index element={<CustomerList />} />
            <Route path="new" element={<CustomerForm />} />
            <Route path=":id/edit" element={<CustomerForm />} />
          </Route>
          <Route path="invoices" element={<Invoice />} />
          <Route path="delivery-challans" element={<DeliveryChallan />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
