import React from 'react';
import { Layout, Menu } from 'antd';
import CustomerDashboard from './CustomerDashboard';

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          background: '#1b1b1b',
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
        }}
      >
        <h1 style={{ color: '#52c41a', margin: 0 }}>Customer Dashboard</h1>
      </Header>
      <Layout>
        <Sider theme="dark">
          <Menu defaultSelectedKeys={['1']} mode="inline" style={{ height: '100%' }}>
            <Menu.Item key="1">
              Dashboard
            </Menu.Item>
            <Menu.Item key="2">
              Customers
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '20px', background: '#141414' }}>
          <CustomerDashboard />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
