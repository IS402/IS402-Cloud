import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UserAddOutlined,
  ContainerOutlined,
  AndroidOutlined
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg"

const { Header, Sider, Content } = Layout;

const AdminComponent = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{height:'100%'}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" style={{height:50}}/>
        {/* <img src={logo} alt="" style={{height:30}}/> */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <AndroidOutlined />,
              label: (<Link to="/admin/brand">Thương hiệu</Link>),
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: (<Link to="/admin/product">Sản phẩm</Link>),
            },
            {
              key: "3",
              icon: <UserAddOutlined />,
              label: (<Link to="/admin/user">Khách hàng</Link>),
            },
            {
                key: "4",
                icon: <ContainerOutlined />,
                label: (<Link to="/admin/order">Đơn hàng</Link>),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: '85vh',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminComponent;
