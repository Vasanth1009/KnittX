import { Layout } from 'antd';
import { IconButton } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import { HiMenu } from '../../constants/Icons';

const TopBar = ({ handleCollapse }) => {
  const { Header } = Layout;
  return (
    <Header
      className="header site-layout-background"
      style={{ position: 'fixed', width: '100%' }}
    >
      <IconButton
        appearance="primary"
        icon={<HiMenu />}
        onClick={handleCollapse}
      ></IconButton>
      <Link to="/" className="text-3xl font-bold logo">
        KnittX
      </Link>
    </Header>
  );
};

export default TopBar;
