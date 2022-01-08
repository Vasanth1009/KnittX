import TableActionColumn from '../components/TableActionColumn/TableActionColumn';
import getColumnSearchProps from '../helpers/ColumnSearch';
import { deleteCustomer } from '../stores/customerStore';

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
    render: (name) => `${name}`,
    sorter: (a, b) => (a.name > b.name ? 1 : -1),
    sortDirections: ['ascend', 'descend'],
    ...getColumnSearchProps('name'),
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: '25%',
    render: (address) =>
      `${address.street + ', ' + address.city + ' - ' + address.pinCode}`,
    ...getColumnSearchProps('address'),
  },
  {
    title: 'Phone',
    dataIndex: 'phoneNo',
    key: 'phoneNo',
    width: '10%',
    ...getColumnSearchProps('phoneNo'),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Contact Person',
    dataIndex: 'contactPerson',
    key: 'contactPerson',
    width: '15%',
    sorter: (a, b) => (a.name > b.name ? 1 : -1),
    sortDirections: ['ascend', 'descend'],
    ...getColumnSearchProps('contactPerson'),
  },
  {
    title: 'GSTIN',
    dataIndex: 'gstIN',
    key: 'gstIN',
    width: '13%',
    ...getColumnSearchProps('gstIN'),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Action',
    dataIndex: 'action',
    fixed: 'right',
    width: '10%',
    align: 'center',
    render: (_, record) => (
      <TableActionColumn
        deleteData={deleteCustomer(record._id)}
      ></TableActionColumn>
    ),
  },
];
