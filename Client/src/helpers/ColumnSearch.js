import { Button } from 'evergreen-ui';
import { Space, Input } from 'antd';
import { HiSearch } from '../constants/Icons';

const getColumnSearchProps = (dataIndex) => ({
  filterDropdown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
  }) => (
    <div style={{ padding: 8 }}>
      <Input
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={() => confirm()}
        style={{ marginBottom: 8, display: 'block' }}
      />
      <Space>
        <Button
          onClick={() => {
            clearFilters();
            confirm();
          }}
          style={{ width: 90 }}
        >
          Reset
        </Button>
        <Button
          appearance="primary"
          onClick={() => confirm()}
          iconBefore={<HiSearch />}
          style={{ width: 90 }}
        >
          Search
        </Button>
      </Space>
    </div>
  ),
  filterIcon: (filtered) => (
    <HiSearch style={{ color: filtered ? '#1890ff' : undefined }} />
  ),
  onFilter: (value, record) =>
    record[dataIndex]
      ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
      : '',
});

export default getColumnSearchProps;
