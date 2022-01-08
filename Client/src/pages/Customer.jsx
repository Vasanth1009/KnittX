import { Outlet } from 'react-router-dom';

function Customer() {
  return (
    <div className="h-full w-full">
      <Outlet />
    </div>
  );
}

export default Customer;
