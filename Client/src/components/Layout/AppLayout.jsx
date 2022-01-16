import { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import TopBar from '../NavigationaBar/TopBar.jsx';
import SideBar from '../NavigationaBar/SideBar.jsx';
import { getCustomers } from '../../stores/customerStore.js';
import { useDispatch } from 'react-redux';

const AppLayout = () => {
  const { Content } = Layout;
  const dispatch = useDispatch();

  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    dispatch(getCustomers());
    return () => {};
  }, [dispatch]);

  return (
    <Layout className="layout">
      <TopBar handleCollapse={() => setCollapse(!collapse)}></TopBar>
      <SideBar
        collapse={collapse}
        handleCollapse={(broken) => setCollapse(broken)}
      ></SideBar>
      <Content
        className={(collapse ? 'ml-20' : 'ml-64') + ' content container'}
      >
        <Outlet />
      </Content>
    </Layout>
  );
};

export default AppLayout;
