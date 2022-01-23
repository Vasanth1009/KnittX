import { Popconfirm, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import PageHeader from '../PageHeader/PageHeader';
import { columns } from '../../services/customer-service';
import { Button } from 'evergreen-ui';
import { useEffect, useState } from 'react';
import { HiOutlineTrash } from '../../constants/Icons';
import { deleteMultipleCustomer } from '../../stores/customerStore';

const CustomerList = () => {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  const [selectedCustomers, setSelectedCustomers] = useState([]);

  useEffect(() => {
    setSelectedCustomers([]);
  }, [customers]);

  const rowSelection = {
    selectedCustomers,
    onChange: (selectedCustomerIds) =>
      setSelectedCustomers(selectedCustomerIds),
  };

  const deleteSelectedCustomer = () => {
    dispatch(deleteMultipleCustomer(selectedCustomers));
  };

  return (
    <div>
      <PageHeader heading="Customers" path="new" buttonText="Add Customer" />
      <div style={{ padding: '14px 0' }}>
        {selectedCustomers.length ? (
          <div className="m-5 flex justify-between items-center">
            <span>
              {`Selected ${selectedCustomers.length} out of ${customers.length} customers`}
            </span>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={deleteSelectedCustomer}
            >
              <Button
                appearance="primary"
                intent="danger"
                iconBefore={HiOutlineTrash}
              >
                Delete
              </Button>
            </Popconfirm>
          </div>
        ) : (
          ''
        )}
        <Table
          rowSelection={rowSelection}
          className="drop-shadow"
          scroll={{ x: 1000 }}
          rowKey={(record) => record._id}
          columns={columns}
          dataSource={customers}
          pagination={{ defaultPageSize: 8 }}
        ></Table>
      </div>
    </div>
  );
};

export default CustomerList;
