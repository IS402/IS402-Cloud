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
  const [totalAmount, setTotalAmount] = useState(0); // Total amount state
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch cart data
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cart", {
          withCredentials: true, // Ensures cookies are sent
        });
        setCartData(response.data);
        setTotalAmount(response.data?.totalAmount || 0); // Initialize total amount
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

  // Clear the cart
  const handleClearCart = async () => {
    try {
      await axios.delete("http://localhost:5000/api/cart", {
        withCredentials: true,
      });
      setCartData(null); // Clear cart data locally
      setTotalAmount(0); // Reset total amount
      message.success("Đã xóa giỏ hàng");
    } catch (error) {
      message.error("Không thể xóa giỏ hàng");
    }
  };
  // Handle order confirmation
  const handleOrderConfirmation = () => {
    navigate("/payment"); // Redirect to the /payment page
  };
  // Update the total amount when a product's quantity changes
  const handleTotalChange = (productId, productTotal) => {
    if (!cartData) return;

    // Recalculate the total amount
    const updatedItems = cartData.items.map((item) =>
      item.product._id === productId
        ? { ...item, quantity: productTotal / item.product.price } // Cập nhật lại số lượng dựa vào tổng giá trị
        : item
    );

    const newTotalAmount = updatedItems.reduce(
      (sum, item) => sum + item.quantity * item.product.price,
      0
    );
    console.log(newTotalAmount)
    setCartData({ ...cartData, items: updatedItems });
    setTotalAmount(newTotalAmount);
  };

  // Remove a product from the cart
  const handleDeleteProduct = (productId) => {
    setCartData((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.product._id !== productId),
    }));

    // Update the total amount after deletion
    const updatedAmount = cartData.items
      .filter((item) => item.product._id !== productId)
      .reduce((sum, item) => sum + item.quantity * item.product.price, 0);

    setTotalAmount(updatedAmount);
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
              <DeleteOutlined
                style={{ fontSize: 20 }}
                onClick={handleClearCart}
              />
            </div>
            {cartData?.items.map((product) => (
              <ProductCartComponent
                key={product.product._id}
                product={product}
                onQuantityChange={handleTotalChange}
                onDelete={handleDeleteProduct}
              />
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
                  {`${totalAmount.toLocaleString()} đ`}
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
                onClick={handleOrderConfirmation} // Add onClick handler
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
