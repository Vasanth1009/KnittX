import { Space, Popconfirm } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { HiOutlineTrash, HiOutlinePencilAlt } from '../../constants/Icons';

const TableActionColumn = ({ editData, deleteData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const confirmEdit = () => {
    navigate(editData);
  };

  const confirmDelete = () => {
    dispatch(deleteData);
  };

  return (
    <div>
      <Space size="middle">
        <HiOutlinePencilAlt color="#3366FF" onClick={confirmEdit} />
        <Popconfirm title="Sure to delete?" onConfirm={confirmDelete}>
          <HiOutlineTrash color="#D14212" />
        </Popconfirm>
      </Space>
    </div>
  );
};

export default TableActionColumn;
