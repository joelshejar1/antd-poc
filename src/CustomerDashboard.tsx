import React, { useState } from 'react';
import { Table, Card, Row, Col, Button, Drawer } from 'antd';
import { DashboardGraph } from './DashBoardGraph';

interface Customer {
  key: number;
  name: string;
  email: string;
  phone: string;
  status: string;
}

// Dummy customer data
const dummyData: Customer[] = [
  { key: 1, name: 'John Doe', email: 'john@example.com', phone: '(123) 456-7890', status: 'Active' },
  { key: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '(098) 765-4321', status: 'Inactive' },
  { key: 3, name: 'Sam Johnson', email: 'sam@example.com', phone: '(111) 222-3333', status: 'Active' },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <strong style={{ color: '#52c41a' }}>{text}</strong>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];

const CustomerDashboard: React.FC = () => {
  // State for toggling the Drawer
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <div>
      {/* Button to toggle Drawer */}
      <Row justify="end" style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={showDrawer}>
          Open Details
        </Button>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card
            title="Total Customers"
            bordered={false}
            style={{ background: '#1f1f1f', color: 'white' }}
          >
            <h2 style={{ color: '#52c41a' }}>{dummyData.length}</h2>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Active Customers"
            bordered={false}
            style={{ background: '#1f1f1f', color: 'white' }}
          >
            <h2 style={{ color: '#52c41a' }}>
              {dummyData.filter(customer => customer.status === 'Active').length}
            </h2>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Inactive Customers"
            bordered={false}
            style={{ background: '#1f1f1f', color: 'white' }}
          >
            <h2 style={{ color: '#52c41a' }}>
              {dummyData.filter(customer => customer.status === 'Inactive').length}
            </h2>
          </Card>
        </Col>
      </Row>
      <Table
        style={{ marginTop: '20px' }}
        dataSource={dummyData}
        columns={columns}
        pagination={false}
      />

      {/* Drawer for additional details */}
      <Drawer
        title="Customer Details Graph"
        placement="right"
        onClose={onClose}
        visible={drawerVisible}
        width={500}
        bodyStyle={{ background: '#141414', padding: 24 }}
        headerStyle={{ background: '#1f1f1f' }}
      >
        <DashboardGraph />
      </Drawer>
    </div>
  );
};

export default CustomerDashboard;
