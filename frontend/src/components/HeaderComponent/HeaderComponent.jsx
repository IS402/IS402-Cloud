import React, { useState, useEffect } from 'react';
import { Layout, Row, Menu, Button, Input, Dropdown, message } from 'antd';
import { 
  UserOutlined, 
  ShoppingCartOutlined, 
  SearchOutlined,
  EnvironmentOutlined,
  RightOutlined 
} from "@ant-design/icons";
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../../stores/useUserStore';
import logo from "../../images/logo1.png";
import truckImage from "../../images/delivery-truck.png";

const { Header } = Layout;
const primaryColor = "#EC3C3C";
const hoverColor = "#f65668";
const lightColor = "#ff8290";
const whiteColor = "#ffffff";

const items = [
  {
    key: "phones",
    label: (
      <Link to="/product/dien-thoai" style={{ color: whiteColor, fontSize: 16 }}>
        Điện thoại
      </Link>
    ),
  },
  {
    key: "accessories",
    label: (
      <Link to="/product/phu-kien" style={{ color: whiteColor, fontSize: 16 }}>
        Phụ kiện
      </Link>
    ),
  },
  {
    key: "brands",
    label: (
      <Link to="/product/brand/thuong-hieu" style={{ color: whiteColor, fontSize: 16 }}>
        Thương hiệu
      </Link>
    ),
  },
  {
    key: "smartwatches",
    label: (
      <Link to="/product/dong-ho" style={{ color: whiteColor, fontSize: 16 }}>
        Đồng hồ thông minh
      </Link>
    ),
  },
  {
    key: "tablets",
    label: (
      <Link to="/product/may-tinh-bang" style={{ color: whiteColor, fontSize: 16 }}>
        Máy tính bảng
      </Link>
    ),
  },
];

const HeaderComponent = () => {
  const navigate = useNavigate();
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [isInvoiceHovered, setIsInvoiceHovered] = useState(false);
  
  const { user, logout, checkAuth, loading } = useUserStore();

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLoginClick = () => {
    if (!user) {
      navigate('/login');
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      message.success('Đăng xuất thành công');
      navigate('/home');
    } catch (error) {
      message.error('Đăng xuất thất bại');
    }
  };
  const handleCart = () =>{
    navigate('/cart');
  }
  const menu = (
    <Menu
      items={[
        { key: "1", label: "Hà Nội" },
        { key: "2", label: "Đà Nẵng" },
        { key: "3", label: "Hồ Chí Minh" },
      ]}
    />
  );

  return (
    <Layout>
      <Header style={{ padding: 0, backgroundColor: primaryColor, height: "auto" }}>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: primaryColor,
            padding: "10px 100px",
          }}
        >
          <div
            className="demo-logo"
            style={{ marginRight: 20, display: "flex", width: 150, justifyContent: "center" }}
          >
            <Link to="/home" style={{ height: 40 }}>
              <img src={logo} alt="Logo" style={{ height: 40 }} />
            </Link>
          </div>

          <Dropdown overlay={menu} trigger={["click"]}>
            <Button
              type="primary"
              icon={<EnvironmentOutlined />}
              style={{
                borderRadius: 20,
                border: "none",
                height: 35,
                boxShadow: "none",
                backgroundColor: lightColor,
                fontSize: 16,
                marginLeft: 20,
              }}
            >
              Hồ Chí Minh <RightOutlined />
            </Button>
          </Dropdown>

          <Input
            placeholder="Bạn tìm gì..."
            prefix={<SearchOutlined />}
            style={{
              width: 380,
              border: "none",
              padding: 5,
              borderRadius: 20,
              paddingLeft: 10,
              height: 35,
              margin: "0 10px 0 20px",
            }}
          />

          <Button
            type="primary"
            onMouseEnter={() => setIsInvoiceHovered(true)}
            onMouseLeave={() => setIsInvoiceHovered(false)}
            icon={<img src={truckImage} alt="icon" style={{ width: 25, height: 25 }} />}
            style={{
              borderRadius: 20,
              border: "none",
              height: 35,
              boxShadow: "none",
              marginLeft: 10,
              backgroundColor: isInvoiceHovered ? hoverColor : primaryColor,
              fontSize: 16,
            }}
          >
            Tra cứu đơn hàng
          </Button>

          <Button
            type="primary"
            onClick={handleCart}
            onMouseEnter={() => setIsCartHovered(true)}
            onMouseLeave={() => setIsCartHovered(false)}
            icon={<ShoppingCartOutlined />}
            style={{
              borderRadius: 20,
              border: "none",
              height: 35,
              boxShadow: "none",
              marginLeft: 10,
              backgroundColor: isCartHovered ? hoverColor : primaryColor,
              fontSize: 16,
            }}
          >
            Giỏ hàng
          </Button>

          <Button
            type="primary"
            onClick={user ? handleLogout : handleLoginClick}
            onMouseEnter={() => setIsLoginHovered(true)}
            onMouseLeave={() => setIsLoginHovered(false)}
            icon={<UserOutlined />}
            style={{
              borderRadius: 20,
              border: "none",
              height: 35,
              boxShadow: "none",
              backgroundColor: isLoginHovered ? hoverColor : primaryColor,
              fontSize: 16,
              marginLeft: 10,
              maxWidth:180,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              textAlign: "left",
              display:'flex',
              justifyContent:'flex-start'
            }}
          >
            {loading ? 'Loading...' : user ? user.email : 'Đăng nhập'}
          </Button>
        </Row>

        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
            style={{
              flex: 1,
              minWidth: 0,
              backgroundColor: primaryColor,
              lineHeight: 1,
              paddingTop: 5,
              marginBottom: 15,
              display: "flex",
              justifyContent: "center",
            }}
          />
        </Row>
      </Header>
    </Layout>
  );
};

export default HeaderComponent;