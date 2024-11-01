import React from "react";
import { Carousel, Row, Col, Typography } from "antd";
import image1 from "../../images/xiaomi-14T-series-home-mo-ban.png";
import image2 from "../../images/thu-cu-banner-390-home.png";
import image3 from "../../images/Tặng bảo hành 12 tháng Vip.png";
import image4 from "../../images/sliding-home-iphone-16-pro-km-moi.png";
import image5 from "../../images/Sliding-air-pod-4-series.png";
import hotSales from "../../images/hot-sale-cuoi-tuan-20-03-2024.gif";
import ProductBoxComponent from "../../components/ProductBoxComponent/ProductBoxComponent";
import discount1 from "../../images/H3_1_daee070bf4.png"
import discount2 from "../../images/H3_405x175_a9884857ee.png"
import discount3 from "../../images/H3_405x175_48b1bd19d9.png"

const { Text } = Typography;
const HomePage = () => {
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
          {Array.from({ length: 5 }).map((_, index) => (
            <ProductBoxComponent key={index} />
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
        {Array.from({ length: 10 }).map((_, index) => (
            <ProductBoxComponent key={index} />
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
        {Array.from({ length: 10 }).map((_, index) => (
            <ProductBoxComponent key={index} />
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
        {Array.from({ length: 10 }).map((_, index) => (
            <ProductBoxComponent key={index} />
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
