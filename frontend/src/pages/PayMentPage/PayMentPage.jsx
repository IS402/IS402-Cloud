import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Layout,
  theme,
  Breadcrumb,
  Row,
  Col,
  Checkbox,
  Typography,
  Button,
  Input,
  Radio,
  message,
} from "antd";
import ProductPaymentComponent from "../../components/ProductPaymentComponent/ProductPaymentComponent";
import image from "../../images/cod.png"
import momo from "../../images/momo.png"
import zalopay from "../../images/zalopay.png"
const { Content, Sider } = Layout;

const whiteColor = "#ffffff";
const { Text } = Typography;
const { TextArea } = Input;
const PayMentPage = () => {
  const [deliveryOption, setDeliveryOption] = useState("homeDelivery");  
  const [cartData, setCartData] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0); // Total amount state
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
          message.warning("Vui lòng đăng nhập để xem giá tiền thanh toán");
          navigate("/login");
        } else {
          message.error("Không thể tải giá tiền thanh toán");
        }
        setLoading(false);
      }
    };

    fetchCartData();
  }, [navigate]);

  const onChange = (e) => {
    setDeliveryOption(e.target.value);
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
                gap: 5,
                flexDirection: "column",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: 10,
                padding: "10px 15px",
              }}
            >
              <div
                style={{
                  padding: "10px 10px",
                  fontSize: 18,
                  fontWeight: "600",
                }}
              >
                Người đặt hàng
              </div>
              <Input placeholder="Họ và tên" style={{ padding: "10px 10px" }} />
              <Input
                placeholder="Số điện thoại"
                style={{ padding: "10px 10px" }}
              />
              <Input
                placeholder="Email (Không bắt buộc)"
                style={{ padding: "10px 10px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                gap: 5,
                flexDirection: "column",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: 10,
                padding: "10px 15px",
              }}
            >
              <div
                style={{
                  padding: "10px 10px",
                  fontSize: 18,
                  fontWeight: "600",
                }}
              >
                Hình thức giao hàng
              </div>
              <div>
                <Radio.Group onChange={onChange} value={deliveryOption}>
                  <Radio value="homeDelivery">Giao hàng tận nơi</Radio>
                  <Radio value="storePickup">Nhận tại cửa hàng</Radio>
                </Radio.Group>
              </div>
              {deliveryOption === "homeDelivery" && (
                <div
                  className="homeDelivery"
                  style={{ display: "flex", gap: 10, flexDirection: "column" }}
                >
                  <Input
                    placeholder="Địa chỉ"
                    style={{ padding: "10px 10px" }}
                  />
                  <TextArea
                    placeholder="Ghi chú (Ví dụ: Hãy gọi cho tôi khi chuẩn bị hàng xong)"
                    style={{ height: 100 }}
                  />
                  <div style={{ display: "flex", gap: 10 }}>
                    <Checkbox />
                    <Text>Nhờ người khác nhận hàng</Text>
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <Checkbox />
                    <Text>Yêu cầu hỗ trợ kỹ thuật</Text>
                  </div>
                </div>
              )}

              {deliveryOption === "storePickup" && (
                <div
                  className="storePickup"
                  style={{ display: "flex", gap: 10, flexDirection: "column" }}
                >
                  <TextArea
                    placeholder="Ghi chú (Ví dụ: Hãy gọi cho tôi khi chuẩn bị hàng xong)"
                    style={{ height: 100 }}
                  />
                  <div style={{ display: "flex", gap: 10 }}>
                    <Checkbox />
                    <Text>Yêu cầu hỗ trợ kỹ thuật</Text>
                  </div>
                </div>
              )}
            </div>
            <div
              style={{
                display: "flex",
                gap: 10,
                flexDirection: "column",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: 10,
                padding: "10px 15px",
              }}
            >
              <div
                style={{
                  padding: "10px 10px",
                  fontSize: 18,
                  fontWeight: "600",
                }}
              >
                Phương thức thanh toán
              </div>
              <div style={{display:'flex', alignItems:'center', gap:10, marginTop:10}}>
                <Checkbox/>
                <img src={image} alt="" style={{height:40}}/>
                <Text>Thanh toán khi nhận hàng</Text>
              </div>              
            </div>
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
             
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px 0px",
                }}
              >
                <Text>Phí vận chuyển</Text>
                <Text style={{ fontWeight: "600", fontSize: 16 }}>
                  50.000 đ
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
                  {(totalAmount + 50000).toLocaleString()} đ
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
                  marginTop: 20,
                }}
              >
                Đặt hàng
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default PayMentPage;
