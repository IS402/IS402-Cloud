import React, { useState, useEffect } from "react";
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Typography,
  Checkbox,
  Button,
  message,
} from "antd";
import image from "../../images/ss-s24-ultra-xam-222.png";
import star from "../../images/star.png";
import combo from "../../images/combo.svg";
import cart from "../../images/add-to-cart.png";
import warranty from "../../images/Type_Bao_hanh_chinh_hang_4afa1cb34d.svg";
import shipping from "../../images/Type_Giao_hang_toan_quoc_318e6896b4.svg";
import { Link } from "react-router-dom";
import ProductBoxComponent from "../../components/ProductBoxComponent/ProductBoxComponent";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useUserStore } from "../../stores/useUserStore";
import { useNavigate } from "react-router-dom";
const { Content, Sider } = Layout;
const { Text } = Typography;

const whiteColor = "#ffffff";


const ProductDetailPage = () => {
  const user = useUserStore((state) => state.user);
  const { id } = useParams();
  const navigate = useNavigate();
  const [discountProduct, setDiscountProduct] = useState([]);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedWarranty, setSelectedWarranty] = useState(null);
  const [data, setData] = useState([]);
  const options1 = ["256 GB", "512 GB", "1 TB"];
  const options2 = [
    "Titan Sa mạc",
    "Titan Trắng",
    "Titan Đen",
    "Titan Tự nhiên",
  ];
  const options3 = ["Đặc quyền bảo hành 2 năm", "Đặc quyền 12 tháng 1 đổi 1"];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products/");
        setDiscountProduct(response.data.products);
      } catch (err) {
        message.error("Failed to load products");
      } finally {
        // setLoading(false);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchProductsById = async () => {
      try {
        // console.log(id)
        const response = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );
        setData(response.data.products[0]);
        // setLoading(false);
      } catch (err) {
        message.error("Failed to load products");
        // setLoading(false); //
      }
    };

    if (id) {
      fetchProductsById();
    }
  }, [id]);
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN').format(amount);
  };
  const payByMonth = ()=>{
    if(data.discountPrice>0){
      return data.discountPrice/24;
    }
    return data.price/24;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = async () => {
    if (!user) {
      message.warning("Vui lòng đăng nhập để thêm vào giỏ hàng");
      navigate("/login");
      return;
    }
  
    try {
      const response = await axios.post(
        "http://localhost:5000/api/cart/",
        {
          productId: data._id,
          quantity: 1, // You may adjust the quantity dynamically if needed
        },
        { withCredentials: true } // Ensures the cookies are sent with the request
      );
      
      if (response.status === 200) {
        message.success("Đã thêm vào giỏ hàng");
      } else {
        message.error("Không thể thêm vào giỏ hàng");
      }
    } catch (error) {
      if (error.response) {
        // Handle specific HTTP status codes
        if (error.response.status === 401) {
          message.warning("Vui lòng đăng nhập để thêm vào giỏ hàng");
          navigate("/login");
        } else if (error.response.status === 400) {
          message.error("Dữ liệu không hợp lệ");
        } else if (error.response.status === 404) {
          message.error("Sản phẩm không tồn tại");
        } else {
          message.error(
            error.response.data?.message || "Đã xảy ra lỗi, vui lòng thử lại sau"
          );
        }
      } else {
        // Handle network or unexpected errors
        message.error("Không thể kết nối đến máy chủ");
      }
      console.error("Error in handleAddToCart:", error);
    }
  };
  
  return (
    <Content style={{ padding: "0 60px" }}>
      <Breadcrumb style={{ margin: "16px 0", padding: "0 70px" }}>
        <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item>Hỗ trợ</Breadcrumb.Item>
        <Breadcrumb.Item>{data.name}</Breadcrumb.Item>
      </Breadcrumb>
      <Layout style={{ marginTop: 50 }}>
        <Row style={{ backgroundColor: whiteColor }}>
          <Col span={12} style={{ marginLeft: 50, padding: "0 20px" }}>
            <Row style={{ display: "flex", justifyContent: "center" }}>
              {data.images && data.images.length > 0 ? (
                <img src={data.images[0]} alt="" style={{ height: 360 }} />
              ) : (
                <span>No image</span>
              )}
              {/* <img src={data.images[0]} alt="" style={{ height: 360 }} /> */}
            </Row>
            <Row>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  marginTop: 20,
                }}
              >
                {data.images && data.images.length > 0 ? (
                  data.images.map((image, index) => (
                    <Col
                      key={index}
                      className={`cursor-button ${
                        selectedColor === index ? "box-select" : ""
                      }`}
                      style={{
                        padding: "5px 1px",
                        border: "1px solid #d1d5db",
                        borderRadius: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 10,
                        width: 80,
                        height: 80,
                        cursor: "pointer",
                      }}
                      onClick={() => setSelectedColor(index)}
                    >
                      <img
                        src={image}
                        alt={`Product image ${index}`}
                        style={{ height: 36 }}
                      />
                      <Text
                        className="title"
                        style={{
                          fontSize: 12,
                          textAlign: "center",
                          display: "block",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "normal",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          display: "-webkit-box",
                        }}
                      >
                        {data.name}
                      </Text>
                    </Col>
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </div>
            </Row>
            <Row
              style={{
                display: "flex",
                marginTop: "20px",
                flexDirection: "column",
                padding: "20px 20px",
                gap: 10,
                borderTop: "1px solid #E0E0E0 ",
                borderBottom: "1px solid #E0E0E0 ",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                Chính sách dành cho sản phẩm
              </Text>
              <div style={{ display: "flex", gap: 30 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <img src={warranty} alt="" />
                  <Text>Hàng chính hãng - Bảo hành (tháng): 12</Text>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <img src={shipping} alt="" />
                  <Text>Giao hàng toàn quốc</Text>
                </div>
              </div>
            </Row>
          </Col>
          <Col span={10} style={{ marginLeft: 40, padding: "0 30px" }}>
            <div>
              <Text style={{ fontWeight: "bold", fontSize: 26 }}>
                {data.name}
              </Text>
            </div>
            <div style={{ display: "flex" }}>
              <Col
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  marginRight: 5,
                  color: "#6b7280",
                }}
              >
                No.{data._id}
              </Col>
              <Col>
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    marginRight: 5,
                    color: "#6b7280",
                  }}
                >
                  |{" "}
                </Text>
                <img src={star} alt="" style={{ height: 14 }} />
                <Text
                  style={{ fontSize: 16, textAlign: "center", marginRight: 5 }}
                >
                  {" "}
                  5.0
                </Text>
              </Col>
              <Col>
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    marginRight: 5,
                    color: "#6b7280",
                  }}
                >
                  |{" "}
                </Text>
                <Link
                  style={{ fontSize: 16, textAlign: "center", marginRight: 5 }}
                >
                  1 đánh giá
                </Link>
              </Col>
              <Col>
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    marginRight: 5,
                    color: "#6b7280",
                  }}
                >
                  |{" "}
                </Text>
                <Link
                  style={{ fontSize: 16, textAlign: "center", marginRight: 5 }}
                >
                  144 bình luận
                </Link>
              </Col>
            </div>
            {/* <div style={{ display: "flex", marginTop: 30 }}>
              <Col
                style={{ display: "flex", alignItems: "center", columnGap: 50 }}
              >
                <Text style={{ fontSize: 16, textAlign: "center", width: 100 }}>
                  Dung lượng
                </Text>
                <div style={{ display: "flex", gap: 10 }}>
                  {options1.map((option, index) => (
                    <Col
                      key={index}
                      className={`cursor-button ${
                        selectedStorage === index ? "box-select" : ""
                      }`}
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        padding: "10px 12px",
                        border: "1px solid #d1d5db",
                        borderRadius: 8,
                        cursor: "pointer",
                      }}
                      onClick={() => setSelectedStorage(index)}
                    >
                      {option}
                    </Col>
                  ))}
                </div>
              </Col>
            </div> */}
            {/* <div style={{ display: "flex", marginTop: 30 }}>
              <Col
                style={{ display: "flex", alignItems: "center", columnGap: 50 }}
              >
                <Text style={{ fontSize: 16, textAlign: "center", width: 100 }}>
                  Màu sắc
                </Text>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {options2.map((option, index) => (
                    <Col
                      key={index}
                      className={`cursor-button ${
                        selectedColor === index ? "box-select" : ""
                      }`}
                      style={{
                        padding: "10px 12px",
                        border: "1px solid #d1d5db",
                        borderRadius: 8,
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        cursor: "pointer",
                      }}
                      onClick={() => setSelectedColor(index)}
                    >
                      <img src={image} alt="" style={{ height: 30 }} />
                      <Text style={{ fontSize: 16, fontWeight: "500" }}>
                        {option}
                      </Text>
                    </Col>
                  ))}
                </div>
              </Col>
            </div> */}
            <div
              style={{
                borderRadius: 10,
                borderWidth: 1,
                background: "linear-gradient(180deg, #fffbeb, #fff)",
                padding: 20,
                marginTop: 50,
                border: "1px solid orange",
              }}
            >
              <Row style={{ display: "flex" }}>
                <Col
                  style={{ display: "flex", flexDirection: "column", flex: 1 }}
                >
                  <Text
                    style={{ fontSize: 16, fontWeight: "500", color: "gray" }}
                  >
                    Mua ngay với giá
                  </Text>
                  {data.discountPrice > 0 ? (
                    <>
                      <Text
                        className="product-price"
                        style={{ color: "#d70018", fontWeight: "500", fontSize: 26 }}
                      >
                        {`${formatCurrency(data.discountPrice)} ₫`}
                      </Text>
                      <Text
                        className="product-price"
                        style={{
                          color: "#707070",
                          fontWeight: "500",
                          textDecoration: "line-through",
                          marginLeft: 10,
                          fontSize: 24,
                        }}
                      >
                        {`${formatCurrency(data.price)} ₫`}
                      </Text>
                    </>
                  ) : (
                    <Text
                      className="product-price"
                      style={{ color: "#d70018", fontWeight: "bold", fontSize: 26 }}
                    >
                      {`${formatCurrency(data.price)} ₫`}
                    </Text>
                  )}
                </Col>
                <Col
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 16, fontWeight: "500", color: "gray" }}
                  >
                    Hoặc
                  </Text>
                </Col>
                <Col
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 16, fontWeight: "500", color: "gray" }}
                  >
                    Trả góp
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    {`${formatCurrency(payByMonth())} ₫/tháng`}
                  </Text>
                </Col>
              </Row>
              <Row>
                <div
                  className="box-select"
                  style={{
                    borderRadius: 7,
                    padding: "8px 10px",
                    width: "100%",
                    marginTop: 30,
                  }}
                >
                  Trả góp 0%
                </div>
              </Row>
            </div>
            <div
              style={{
                border: "1px solid gray",
                borderRadius: 10,
                marginTop: 20,
              }}
            >
              <Row
                style={{
                  padding: "10px 10px",
                  width: "100%",
                  background: "#D3D3D3",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Quà tặng và ưu đãi khác
                </Text>
              </Row>
              <Row
                style={{
                  display: "flex",
                  padding: "0px 10px",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Col>
                  <img
                    src="https://fptshop.com.vn/img/icons/gift.svg?w=64&q=100"
                    alt=""
                  />
                </Col>
                <Col style={{ flex: 1 }}>
                  <p style={{ wordWrap: "break-word", fontSize: 17 }}>
                    Tặng phiếu mua hàng 100,000đ mua Tai nghe AirPods(Trừ
                    AirPods 4) (Hạn sử dụng 7 ngày){" "}
                  </p>
                </Col>
              </Row>
              <Row
                style={{
                  display: "flex",
                  padding: "0px 10px",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Col>
                  <img
                    src="https://fptshop.com.vn/img/icons/gift.svg?w=64&q=100"
                    alt=""
                  />
                </Col>
                <Col style={{ flex: 1 }}>
                  <p style={{ wordWrap: "break-word", fontSize: 17 }}>
                    Apple Watch giảm thêm đến 500,000đ khi mua kèm iPhone{" "}
                  </p>
                </Col>
              </Row>
              <Row
                style={{
                  display: "flex",
                  padding: "0px 10px",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Col>
                  <img
                    src="https://fptshop.com.vn/img/icons/gift.svg?w=64&q=100"
                    alt=""
                  />
                </Col>
                <Col style={{ flex: 1 }}>
                  <p style={{ wordWrap: "break-word", fontSize: 17 }}>
                    Tặng mã giảm giá 200,000đ mua dịch vụ chọn số đẹp{" "}
                  </p>
                </Col>
              </Row>
              <Row
                style={{
                  display: "flex",
                  padding: "0px 10px",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Col>
                  <img
                    src="https://fptshop.com.vn/img/icons/gift.svg?w=64&q=100"
                    alt=""
                  />
                </Col>
                <Col style={{ flex: 1 }}>
                  <p style={{ wordWrap: "break-word", fontSize: 17 }}>
                    Thu cũ đổi mới Chợ Tốt - Giảm 2.000.000đ khi thu cũ iPhone
                    qua Chợ Tốt.
                  </p>
                </Col>
              </Row>
            </div>
            <div
              style={{
                border: "1px solid gray",
                borderRadius: 10,
                marginTop: 20,
              }}
            >
              <Row
                style={{
                  padding: "10px 10px",
                  width: "100%",
                  background: "#D3D3D3",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Chọn gói bảo hành
                </Text>
              </Row>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  padding: "10px 10px",
                }}
              >
                {options3.map((option, index) => (
                  <Col
                    key={index}
                    className={`cursor-button ${
                      selectedWarranty === index ? "box-select" : ""
                    }`}
                    style={{
                      padding: "10px 12px",
                      border: "1px solid #d1d5db",
                      borderRadius: 8,
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      alignItems: "center",
                      gap: 10,
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedWarranty(index)}
                  >
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>
                      {option}
                    </Text>
                    <Text
                      style={{ fontSize: 14, fontWeight: "500", color: "red" }}
                    >
                      +900.000đ
                    </Text>
                  </Col>
                ))}
              </div>
            </div>
            <div
              style={{
                border: "1px solid gray",
                borderRadius: 10,
                marginTop: 20,
              }}
            >
              <Row
                style={{
                  padding: "10px 10px",
                  width: "100%",
                  background: "#D3D3D3",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Combo ưu đãi
                </Text>
              </Row>
              <Row
                style={{
                  padding: "20px 20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Checkbox>
                  <div style={{ display: "flex" }}>
                    <img
                      src={combo}
                      alt=""
                      style={{ height: 45, backgroundColor: "#e5e7eb" }}
                    />
                    <Row
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: 10,
                      }}
                    >
                      <Col>
                        <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                          Gói Phụ kiện Chuẩn
                        </Text>
                      </Col>
                      <Col>
                        <Text style={{ fontWeight: "bold", color: "red" }}>
                          +999.000 ₫
                        </Text>
                      </Col>
                    </Row>
                  </div>
                </Checkbox>
                <Link style={{ color: "blue" }}>Chi tiết</Link>
              </Row>
            </div>
            <div
              style={{
                borderRadius: 10,
                marginTop: 20,
                display: "flex",
                gap: 5,
              }}
            >
              <Button
                style={{
                  border: "1px solid #Ec3C3C",
                  height: 60,
                  width: 60,
                  flex: 1,
                  borderRadius: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center",
                }}
                onClick={handleAddToCart}
              >
                <img src={cart} alt="" style={{ height: 30 }} />
              </Button>
              <Button
                style={{
                  border: "1px solid #Ec3C3C",
                  height: 60,
                  display: "flex",
                  flex: 6,
                  borderRadius: 10,
                  fontSize: 20,
                  justifyContent: "center",
                  alignItem: "center",
                  color: whiteColor,
                  backgroundColor: "#EC3C3C",
                }}
              >
                Mua ngay
              </Button>
              <Button
                style={{
                  border: "1px solid #000000",
                  height: 60,
                  display: "flex",
                  flex: 6,
                  gap: 2,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItem: "center",
                  flexDirection: "column",
                  color: whiteColor,
                  fontWeight: "500",
                  backgroundColor: "#000000",
                }}
              >
                <div>Trả góp</div>
                <div>(Chỉ từ 1.488.342đ)</div>
              </Button>
            </div>
          </Col>
        </Row>
      </Layout>
      <Row style={{ padding: "0px 40px" }}>
        <Text
          style={{
            fontWeight: "bold",
            marginLeft: 50,
            marginRight: 50,
            marginTop: 50,
            marginBottom: 20,
            fontSize: 24,
            textTransform: "uppercase",
          }}
        >
          Một số sản phẩm khác
        </Text>
        <div
          style={{
            display: "flex",
            justifyItems: "center",
            justifyContent: "space-evenly",
            marginLeft: 50,
            marginRight: 50,
            columnGap: 10,
            rowGap: 30,
            padding: "0 10px",
            flexWrap: "wrap",
          }}
        >
          {discountProduct.slice(0, 10).map((product) => (
            <ProductBoxComponent key={product._id} product={product} />
          ))}
        </div>
      </Row>
    </Content>
  );
};

export default ProductDetailPage;
