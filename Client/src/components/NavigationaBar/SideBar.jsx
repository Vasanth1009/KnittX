import React, { useEffect, useMemo, useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { navigations } from '../../constants/Navigations';

const SideBar = ({ collapse, handleCollapse }) => {
  const { Sider } = Layout;
  const router = useLocation();
  const [selectedPath, setSelectedPath] = useState('1');
  const navigationMenus = useMemo(() => navigations, []);

  useEffect(() => {
    const checkNavigation = () => {
      navigations.forEach((navigation, index) => {
        if (router.pathname === navigation.path) {
          setSelectedPath(`${index + 1}`);
        }
      });
    };
    checkNavigation();
  }, [navigationMenus, router]);

  return (
    <Sider
      breakpoint="md"
      onBreakpoint={(broken) => handleCollapse(broken)}
      width={250}
      className="site-layout-background"
      trigger={null}
      collapsible
      collapsed={collapse}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        className="sider-menu"
        selectedKeys={[selectedPath]}
      >
        {navigationMenus.map((navigation, index) => (
          <Menu.Item key={index + 1} icon={navigation.icon}>
            <Link to={navigation.path}>{navigation.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default SideBar;
