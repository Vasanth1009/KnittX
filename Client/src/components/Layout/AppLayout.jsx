import { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import TopBar from '../NavigationBar/TopBar.jsx';
import SideBar from '../NavigationBar/SideBar.jsx';
import { getCustomers } from '../../stores/customerStore.js';
import { useDispatch } from 'react-redux';

const AppLayout = () => {
  const { Content } = Layout;
  const dispatch = useDispatch();

  const [collapse, setCollapse] = useState(false);
  const [collapsible, setCollapsible] = useState(false);

  useEffect(() => {
    dispatch(getCustomers());
    return () => {};
  }, [dispatch]);

  return (
    <Layout className="layout">
      <TopBar handleCollapse={() => setCollapse(!collapse)}></TopBar>
      <SideBar
        collapse={collapse}
        collapsible={collapsible}
        handleCollapse={(broken) => setCollapsible(broken)}
      ></SideBar>
      <Content
        className={
          'content ' + (collapse ? (collapsible ? 'ml-0' : 'ml-20') : 'ml-64')
        }
      >
        <Outlet />
      </Content>
    </Layout>
  );
};

export default AppLayout;
