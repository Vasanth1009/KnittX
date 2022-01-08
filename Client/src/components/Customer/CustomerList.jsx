import { Table } from 'antd';
import { useSelector } from 'react-redux';

import PageHeader from '../PageHeader/PageHeader';
import { columns } from '../../services/customer-service';

function CustomerList() {
  const customers = useSelector((state) => state.customers);

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
