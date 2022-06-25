import { Avatar, Button, Image, Layout, Popover } from 'antd';
import { IconButton, Pane } from 'evergreen-ui';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiMenu, HiOutlineLogout } from '../../constants/Icons';
import { logout } from '../../helpers/firebase-config';

const TopBar = ({ handleCollapse }) => {
  const { Header } = Layout;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      setUser(currentUser);
    }
  }, [user]);

  const signOut = () => {
    logout();
    localStorage.removeItem('currentUser');
    navigate('login');
  };

  const content = (
    <div className="menu">
      <div className="menu-avatar">
        <Avatar
          src={<Image src="https://joeschmoe.io/api/v1/random" />}
          size={100}
        >
          Vasanth Prabhakaran
        </Avatar>
        <span className="menu-">Vasanth Prabhakaran</span>
      </div>
      <div className="menu-buttons">
        <Button
          type="text"
          onClick={() => signOut()}
          block
          className="menu-button"
        >
          <HiOutlineLogout />
          <span>Logout</span>
        </Button>
      </div>
    </div>
  );

  return (
    <Header className="header">
      <Pane flex={1} alignItems="center" display="flex">
        <HiMenu color="ffffff" onClick={handleCollapse} className="w-6 h-6" />
        <Link to="/" className="text-3xl font-bold logo">
          KnittX
        </Link>
      </Pane>
      <Pane>
        <Popover placement="bottomRight" content={content} trigger="click">
          <Avatar
            src="https://joeschmoe.io/api/v1/random"
            className="cursor-pointer"
          />
        </Popover>
      </Pane>
    </Header>
  );
};

export default TopBar;
