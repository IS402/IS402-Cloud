import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Checkbox,
  Typography,
  Button,
  message,
} from "antd";
import ProductCartComponent from "../../components/ProductCartComponent/ProductCartComponent";
import { DeleteOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Text } = Typography;

const CartPage = () => {
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cart", {
          withCredentials: true, // Ensures cookies are sent
        });
        setCartData(response.data);
        setLoading(false);
      } catch (error) {
        if (error.response?.status === 401) {
          message.warning("Vui lòng đăng nhập để xem giỏ hàng");
          navigate("/login");
        } else {
          message.error("Không thể tải giỏ hàng");
        }
        setLoading(false);
      }
    };

    fetchCartData();
  }, [navigate]);

  const handleClearCart = async () => {
    try {
      await axios.delete("http://localhost:5000/api/cart", {
        withCredentials: true,
      });
      setCartData(null); // Clear cart data locally
      message.success("Đã xóa giỏ hàng");
    } catch (error) {
      message.error("Không thể xóa giỏ hàng");
    }
  };

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
          backgroundColor: "#ffffff",
        }}
      >
        <Row
          style={{
            backgroundColor: "#ffffff",
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
              <DeleteOutlined style={{ fontSize: 20 }} onClick={handleClearCart} />
            </div>
            {cartData?.items.map((product) => (
              <ProductCartComponent key={product.product._id} product={product} />
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
                {`${(cartData?.totalAmount || 0).toLocaleString()} đ`}
                </Text>
              </div>
              <Button
                style={{
                  backgroundColor: "#EC3C3C",
                  width: "100%",
                  height: 50,
                  color: "#ffffff",
                  borderRadius: 10,
                  fontSize: 18,
                  marginTop: 20,
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
