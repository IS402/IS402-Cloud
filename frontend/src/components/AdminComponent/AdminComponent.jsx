import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UserAddOutlined,
  ContainerOutlined,
  AndroidOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Typography } from "antd";
import { Link } from "react-router-dom";
import logo from "../../images/logo-removebg-preview.png";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;
const primaryColor = "#EC3C3C";
const AdminComponent = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100%" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/* <div className="demo-logo-vertical" style={{height:50}}/> */}
        <div style={{ padding: "0px 10px" }}>
          <img
            src={logo}
            alt=""
            style={{ height: "auto", width: "100%", margin: "10px 0px" }}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <AndroidOutlined />,
              label: <Link to="/admin/brand">Thương hiệu</Link>,
            },
            {
              key: "2",
              icon: <UserAddOutlined />,
              label: <Link to="/admin/user">Khách hàng</Link>,
            },
            {
              key: "3",
              icon: <ContainerOutlined />,
              label: <Link to="/admin/category">Danh mục</Link>,
            },
            {
              key: "4",
              icon: <VideoCameraOutlined />,
              label: <Link to="/admin/product">Sản phẩm</Link>,
            },
            {
              key: "5",
              icon: <ContainerOutlined />,
              label: <Link to="/admin/order">Đơn hàng</Link>,
            },
            {
              key: "6",
              icon: <BarChartOutlined />,
              label: <Link to="/admin/chart">Biểu đồ</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
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
          <div style={{display:'flex',alignItems:'center', columnGap:10, paddingRight:30}}>
            <div
              style={{
                backgroundColor: primaryColor,
                borderRadius: "50%",
                height: 40,
                width: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <UserOutlined style={{color:"#ffffff", height:30}}/>
            </div>
            <Text style={{fontWeight:'400'}}>21521871@gm.uit.edu.vn</Text>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "85vh",
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
