import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Layout,
  theme,
  Breadcrumb,
  Row,
  Col,
  Checkbox,
  Typography,
  Button,
  message
} from "antd";
import ProductCartComponent from "../../components/ProductCartComponent/ProductCartComponent";
import { DeleteOutlined } from "@ant-design/icons";
const { Content, Sider } = Layout;

const whiteColor = "#ffffff";
const { Text } = Typography;
const CartPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cart/");
        setData(response.data);
      } catch (err) {
        message.error("Failed to load products");
      } finally {
        // setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <Content style={{ padding: "0 60px" }}>
      <Breadcrumb style={{ margin: "16px 0", padding: "0 70px" }}>
        <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item>Giỏ hàng</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          marginTop: 50,
          marginLeft: 50,
          marginRight: 50,
          backgroundColor: whiteColor,
        }}
      >
        <Row
          style={{
            backgroundColor: whiteColor,
            marginTop: 50,
            marginBottom: 50,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Col
            span={15}
            style={{ display: "flex", gap: 20, flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                padding: "20px 20px",
                borderRadius: 8,
              }}
            >
              <div style={{ display: "flex", gap: 20 }}>
                <Checkbox />
                <Text style={{ fontWeight: "500", fontSize: 16 }}>
                  Chọn tất cả
                </Text>
              </div>
              <DeleteOutlined style={{ fontSize: 20 }} />
            </div>
              {data.map((product) => (
              <ProductCartComponent key={product._id} product={product} />
            ))}
          </Col>
          <Col span={8}>
            <div
              style={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: 10,
                padding: "20px 20px",
              }}
            >
              <div style={{ fontWeight: "bold", fontSize: 18 }}>
                Thông tin đơn hàng
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px 0px",
                }}
              >
                <Text>Tổng tiền</Text>
                <Text style={{ fontWeight: "600", fontSize: 16 }}>
                  39.000.000 đ
                </Text>
              </div>
              <hr style={{ backgroundColor: "#E0E0E0 " }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px 0px",
                }}
              >
                <Text>Tổng khuyến mãi</Text>
                <Text style={{ fontWeight: "600", fontSize: 16 }}>
                  9.000.000 đ
                </Text>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px 0px",
                }}
              >
                <Text>Phí vận chuyển</Text>
                <Text style={{ fontWeight: "600", fontSize: 16 }}>
                  39.000.000 đ
                </Text>
              </div>
              <hr style={{ backgroundColor: "#E0E0E0 " }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px 0px",
                }}
              >
                <Text>Cần thanh toán</Text>
                <Text
                  style={{ color: "#EC3C3C", fontWeight: "600", fontSize: 16 }}
                >
                  39.000.000 đ
                </Text>
              </div>
              <Button
                style={{
                  backgroundColor: "#EC3C3C",
                  width: "100%",
                  height: 50,
                  color: whiteColor,
                  borderRadius: 10,
                  fontSize: 18,
                  marginTop:20
                }}
              >
                Xác nhận đơn hàng
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default CartPage;
