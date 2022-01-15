import { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import TopBar from '../NavigationaBar/TopBar.jsx';
import SideBar from '../NavigationaBar/SideBar.jsx';
import Notification from '../Common/Notification.jsx';
import { getCustomers } from '../../stores/customerStore';

function AppLayout() {
  const dispatch = useDispatch();
  const { Content } = Layout;
  const [collapse, setCollapse] = useState(false);

  return (
    <Layout className="layout">
      <TopBar handleCollapse={() => setCollapse(!collapse)}></TopBar>
      <SideBar
        collapse={collapse}
        handleCollapse={(broken) => setCollapse(broken)}
      ></SideBar>
      <Notification />
      <Content className="content container" >
        <Outlet />
      </Content>
    </Layout>
  );
}

export default AppLayout;
