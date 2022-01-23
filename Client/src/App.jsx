import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./styles/App.scss";
import Customer from "./pages/Customer";
import DeliveryChallan from "./pages/DeliveryChallan";
import Invoice from "./pages/Invoice";
import Profile from "./pages/Profile";
import AppLayout from "./components/Layout/AppLayout";
import CustomerForm from "./components/Customer/CustomerForm";
import CustomerList from "./components/Customer/CustomerList";
import Login from "./pages/Login";
import { useState } from "react";
import fireApp from "./helpers/firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  return (
    <Router>
      {isLoggedIn ? (
        <Routes>
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
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
