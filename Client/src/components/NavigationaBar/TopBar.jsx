import { Avatar, Button, Image, Layout, Popover } from 'antd';
import { IconButton, Pane } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import { HiMenu, HiOutlineLogout } from '../../constants/Icons';

const content = (
  <div className="menu">
    <div className="menu-avatar">
      <Avatar
        src={<Image src="https://joeschmoe.io/api/v1/random" />}
        size={100}
      >
        Ada
      </Avatar>
      <span>Ada</span>
    </div>
    <div className="menu-buttons">
      <Button type="text" block className="menu-button">
        <Link to="login" className="menu-item">
          <HiOutlineLogout />
          <span>Logout</span>
        </Link>
      </Button>
    </div>
  </div>
);

const TopBar = ({ handleCollapse }) => {
  const { Header } = Layout;
  return (
    <Header className="header site-layout-background">
      <Pane flex={1} alignItems="center" display="flex">
        <IconButton
          appearance="primary"
          icon={<HiMenu />}
          onClick={handleCollapse}
        ></IconButton>
        <Link to="/" className="text-3xl font-bold logo">
          KnittX
        </Link>
      </Pane>
      <Pane>
        <Popover placement="bottomRight" content={content} trigger="click">
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </Popover>
      </Pane>
    </Header>
  );
};

export default TopBar;
