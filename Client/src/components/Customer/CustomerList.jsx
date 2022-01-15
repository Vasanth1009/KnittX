import { Table } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PageHeader from '../PageHeader/PageHeader';
import { columns } from '../../services/customer-service';
import { useEffect } from 'react';
import { getCustomers } from '../../stores/customerStore';

function CustomerList() {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomers());
    return () => {};
  }, [dispatch]);

  return (
    <div>
      <PageHeader heading="Customers" path="new" buttonText="Add Customer" />
      <Table
        style={{ padding: '14px 0' }}
        className="drop-shadow"
        scroll={{ x: 1000 }}
        rowKey={(record) => record._id}
        columns={columns}
        dataSource={customers}
        pagination={{ defaultPageSize: 8 }}
      ></Table>
    </div>
  );
}

export default CustomerList;
