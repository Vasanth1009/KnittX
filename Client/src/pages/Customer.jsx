import { Outlet } from 'react-router-dom';

const Customer = () => {
  return (
    <div className="h-full w-full">
      <Outlet />
    </div>
  );
};

export default Customer;
