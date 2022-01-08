import { Space, Popconfirm } from 'antd';
import { useDispatch } from 'react-redux';

import { HiOutlineTrash, HiOutlinePencilAlt } from '../../constants/Icons';

function TableActionColumn({ deleteData }) {
  const dispatch = useDispatch();

  const confirm = () => {
    dispatch(deleteData);
  };

  return (
    <div>
      <Space size="middle">
        <HiOutlinePencilAlt color="#3366FF" />
        <Popconfirm title="Sure to delete?" onConfirm={confirm}>
          <HiOutlineTrash color="#D14212" />
        </Popconfirm>
      </Space>
    </div>
  );
}

export default TableActionColumn;
