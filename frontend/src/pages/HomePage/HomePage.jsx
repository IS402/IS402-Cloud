import React, { useEffect, useState } from "react";
import { Carousel, Row, Col, Typography, message } from "antd";
import image1 from "../../images/xiaomi-14T-series-home-mo-ban.png";
import image2 from "../../images/thu-cu-banner-390-home.png";
import image3 from "../../images/Tặng bảo hành 12 tháng Vip.png";
import image4 from "../../images/sliding-home-iphone-16-pro-km-moi.png";
import image5 from "../../images/Sliding-air-pod-4-series.png";
import hotSales from "../../images/hot-sale-cuoi-tuan-20-03-2024.gif";
import ProductBoxComponent from "../../components/ProductBoxComponent/ProductBoxComponent";
import discount1 from "../../images/H3_1_daee070bf4.png"
import discount2 from "../../images/H3_405x175_a9884857ee.png"
import discount3 from "../../images/H3_405x175_48b1bd19d9.png";
import axios from "axios";

const { Text } = Typography;
const HomePage = () => {
  const [discountProduct, setDiscountProduct] = useState([]);
  const [phoneProduct, setPhoneProduct] = useState([]);
  const [watchProduct, setWatchProduct] = useState([]);
  const [ipadProduct, setIpadProduct] = useState([]);
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
    const fetchProductsByCategory  = async (categoryName) => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/category/${categoryName}`);
        setPhoneProduct(response.data.products);
      } catch (err) {
        message.error("Failed to load products");
      } finally {
        // setLoading(false);
      }
    };
    fetchProductsByCategory ("Điện thoại");
  }, []);
  useEffect(() => {
    const fetchProductsByCategory  = async (categoryName) => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/category/${categoryName}`);
        setWatchProduct(response.data.products);
      } catch (err) {
        message.error("Failed to load products");
      } finally {
        // setLoading(false);
      }
    };
    fetchProductsByCategory ("Đồng hồ");
  }, []);
  useEffect(() => {
    const fetchProductsByCategory  = async (categoryName) => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/category/${categoryName}`);
        setIpadProduct(response.data.products);
      } catch (err) {
        message.error("Failed to load products");
      } finally {
        // setLoading(false);
      }
    };
    fetchProductsByCategory ("Máy tính bảng");
  }, []);
  return (
    <div style={{ padding: "30px 100px" }}>
      <Carousel autoplay style={{ padding: "0 50px", borderRadius: 20 }}>
        <div style={{ borderRadius: 20 }}>
          <img
            src={image1}
            alt="bacgkround"
            style={{ height: 530, width: "100%", borderRadius: 20 }}
          />
        </div>
        <div style={{ borderRadius: 20 }}>
          <img
            src={image2}
            alt="bacgkround"
            style={{ height: 530, width: "100%", borderRadius: 20 }}
          />
        </div>
        <div style={{ borderRadius: 20 }}>
          <img
            src={image3}
            alt="bacgkround"
            style={{ height: 530, width: "100%", borderRadius: 20 }}
          />
        </div>
        <div style={{ borderRadius: 20 }}>
          <img
            src={image4}
            alt="bacgkround"
            style={{ height: 530, width: "100%", borderRadius: 20 }}
          />
        </div>
        <div style={{ borderRadius: 20 }}>
          <img
            src={image5}
            alt="bacgkround"
            style={{ height: 530, width: "100%", borderRadius: 20 }}
          />
        </div>
      </Carousel>
      <Row
        style={{
          backgroundColor: "#f83f5d",
          marginTop: 50,
          marginLeft: 50,
          marginRight: 50,
          paddingBottom: 20,
          borderRadius: 20,
        }}
      >
        <Row style={{ marginBottom: 30, marginTop: 10, width: "100%" }}>
          <img
            src={hotSales}
            alt="hot-sales"
            style={{ height: 60, marginLeft: 30 }}
          />
        </Row>
        <Row
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            padding: "0 10px",
          }}
        >
          {discountProduct.slice(0, 5).map((product) => (
            <ProductBoxComponent key={product._id} product={product} />
          ))}
        </Row>
      </Row>
      <Row>
        <Text
          style={{
            fontWeight: "bold",
            marginLeft: 50,
            marginRight: 50,
            marginTop: 20,
            fontSize: 24,
            textTransform:'uppercase'
          }}
        >
          ĐIỆN THOẠI NỔI BẬT NHẤT
        </Text>
        <div style={{display:'flex', justifyItems:'center',marginLeft: 50,marginRight: 50, gap:10, padding:'0 10px', flexWrap: 'wrap'}}>
        {phoneProduct.slice(0, 10).map((product) => (
            <ProductBoxComponent key={product._id} product={product} />
          ))}
        </div>
      </Row>
      <Row>
        <Text
          style={{
            fontWeight: "bold",
            marginLeft: 50,
            marginRight: 50,
            marginTop: 20,
            fontSize: 24,
            textTransform:'uppercase'
          }}
        >
          Đồng hồ thông minh
        </Text>
        <div style={{display:'flex', justifyItems:'center',marginLeft: 50,marginRight: 50, gap:10, padding:'0 10px', flexWrap: 'wrap'}}>
        {watchProduct.slice(0, 10).map((product) => (
            <ProductBoxComponent key={product._id} product={product} />
          ))}
        </div>
      </Row>
      <Row>
        <Text
          style={{
            fontWeight: "bold",
            marginLeft: 50,
            marginRight: 50,
            marginTop: 20,
            fontSize: 24,
            textTransform:'uppercase'
          }}
        >
          Máy tính bảng
        </Text>
        <div style={{display:'flex', justifyItems:'center',marginLeft: 50,marginRight: 50, gap:10, padding:'0 10px', flexWrap: 'wrap'}}>
        {ipadProduct.slice(0, 10).map((product) => (
            <ProductBoxComponent key={product._id} product={product} />
          ))}
        </div>
      </Row>
      <Row style={{boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", marginLeft: 50,marginRight: 50,marginTop: 20,borderRadius:20, padding:'15px 0'}}>
      <Text
          style={{
            fontWeight: "bold",
            marginLeft: 50,
            marginRight: 50,
            marginTop: 20,
            fontSize: 24,
            textTransform:'uppercase'
          }}
        >
          Ưu đãi thanh toán
        </Text>
        <Row autoplay style={{ padding: "0 20px", borderRadius: 20, display:'flex', gap:10, justifyContent:'center', marginTop:20 }}>
          <Col style={{ borderRadius: 20, flex:1 }}>
            <img src={discount1} alt="" style={{borderRadius:20, height:165}}/>
          </Col>
          <Col style={{ borderRadius: 20, flex:1 }}>
            <img src={discount2} alt="" style={{borderRadius:20, height:165}}/>
          </Col>
          <Col style={{ borderRadius: 20, flex:1 }}>
            <img src={discount3} alt="" style={{borderRadius:20, height:165}}/>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default HomePage;
