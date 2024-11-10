import React, { useEffect, useState } from "react";
import {
  Layout,
  Menu,
  Input,
  Button,
  Dropdown,
  Row,
  message
} from "antd";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  RightOutlined,
  EnvironmentOutlined
} from "@ant-design/icons";
import axios from 'axios';
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
    label: <span style={{ color: whiteColor, fontSize: 16 }}>Điện thoại</span>,
  },
  {
    key: "accessories",
    label: <span style={{ color: whiteColor, fontSize: 16 }}>Phụ kiện</span>,
  },
  {
    key: "brands",
    label: <span style={{ color: whiteColor, fontSize: 16 }}>Thương hiệu</span>,
  },
  {
    key: "smartwatches",
    label: (
      <span style={{ color: whiteColor, fontSize: 16 }}>
        Đồng hồ thông minh
      </span>
    ),
  },
  {
    key: "tablets",
    label: (
      <span style={{ color: whiteColor, fontSize: 16 }}>Máy tính bảng</span>
    ),
  },
];
const HeaderComponent = () => {
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [isInvoiceHovered, setIsInvoiceHovered] = useState(false);

  // const [user, setUser] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/check-login', { withCredentials: true });
        setUserEmail(response.data.email); // Lấy email nếu đăng nhập thành công
      } catch (error) {
        console.log("User is not logged in", error.response?.data.message);
        setUserEmail(null); // Nếu chưa đăng nhập
      }
    };
    checkLoginStatus();
  }, []);
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: "Hà Nội",
        },
        {
          key: "2",
          label: "Đà Nẵng",
        },
        {
          key: "3",
          label: "Hồ Chí Minh",
        },
      ]}
    />
  );
  return (
    <Layout>
      <Header
        style={{ padding: 0, backgroundColor: primaryColor, height: "auto" }}
      >
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: primaryColor,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 100,
            paddingRight: 100,
          }}
        >
          <div
            className="demo-logo"
            style={{ marginRight: "20px", display: "flex", width: "150px", justifyContent:'center'}}
          >
            <a href="/home" style={{height:40}}><img src={logo} alt="Logo" style={{ height: "40px" }} /></a>
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
                textAlign: "left",
                fontSize: 16,
                display: "flex",
                marginLeft: 20,
                justifyContent: "space-between",
                width: 180,
              }}
            >
              Hồ Chí Minh <RightOutlined />
            </Button>
          </Dropdown>
          <Input
            placeholder="Bạn tìm gì..."
            prefix={<SearchOutlined />}
            style={{
              width: 420,
              border: "none",
              padding: 5,
              borderRadius: 20,
              paddingLeft: 10,
              height: 35,
              marginRight: "10px",
              marginLeft: 20,
            }}
          />
          <Button
            type="primary"
            onMouseEnter={() => setIsInvoiceHovered(true)}
            onMouseLeave={() => setIsInvoiceHovered(false)}
            icon={
              <img
                src={truckImage}
                alt="icon"
                style={{ width: 25, height: 25 }}
              />
            }
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
          {userEmail ? (
            <Button
            type="primary"
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
            }}
          >
            {userEmail}
          </Button>
          ) : (
            <Button
            type="primary"
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
            }}
          >
            Đăng nhập
          </Button>
          )}
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
