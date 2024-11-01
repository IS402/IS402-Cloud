import React from "react";
import { Row, Col, Typography } from "antd";
import image from "../../images/ss-s24-ultra-xam-222.png";
import star from "../../images/star.png";
import starBlack from "../../images/star_black.png";
import love from "../../images/heart.png";
import loveBlack from "../../images/heart_black.png";
const { Text } = Typography;

const ProductBoxComponent = () => {
  return (
    <div
      style={{
        padding: "15px 15px",
        background: "#ffffff",
        borderRadius: 15,
        width: 200,
        display: "flex",
        justifyContent: "center",
        position:'relative',
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
      }}
    >
      <a href="/">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={image} alt="" style={{ height: 160 }} />
        </div>
        <div>
          <Text style={{ fontWeight: "bold" }}>
            Samsung Galaxy S24 Ultra 12GB 256GB
          </Text>
        </div>
        <div style={{ marginTop: 30 }}>
          <Text
            className="product-price"
            style={{ color: "#d70018", fontWeight: "bold" }}
          >
            41.990.000đ
          </Text>
          <Text
            className="product-price"
            style={{
              color: "#707070",
              fontWeight: "bold",
              textDecoration: "line-through",
              marginLeft: 10,
              fontSize:12
            }}
          >
            43.990.000đ
          </Text>
        </div>
        <div>
          <Text
            className="member-price"
            style={{ color: "#444", fontSize: 11 }}
          >
            Member giảm thêm đến
          </Text>
          <Text
            className="member-price"
            style={{ color: "#d70018", fontWeight: "bold", marginLeft: 10 }}
          >
            400.000đ
          </Text>
        </div>
        <div>
          <Text
            className="student-price"
            style={{ color: "#444", fontSize: 11 }}
          >
            Student giảm thêm đến
          </Text>
          <Text
            className="student-price"
            style={{ color: "#d70018", fontWeight: "bold", marginLeft: 10 }}
          >
            600.000đ
          </Text>
        </div>
        <div
          style={{
            marginTop: 30,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Col style={{ display: "flex", gap: 2 }}>
            <img src={star} alt="" style={{ height: 17 }} />
            <img src={star} alt="" style={{ height: 17 }} />
            <img src={star} alt="" style={{ height: 17 }} />
            <img src={star} alt="" style={{ height: 17 }} />
            <img src={star} alt="" style={{ height: 17 }} />
          </Col>
          <Col style={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Text style={{ color: "#777", fontSize: 12 }}>Yêu thích</Text>
            <img src={love} alt="" style={{ height: 20 }} />
          </Col>
        </div>
        <div
          style={{
            background: "#fff",
            border: "1px solid #0c53b7",
            borderRadius: 5,
            color: "#0c53b7",
            fontSize: 10,
            fontWeight:500,
            padding:'2px 5px',
            position:'absolute',
            right:'0',
            top:'0',
            width:'fit-content'
          }}
        >
          Trả góp 0%
        </div>
      </a>
    </div>
  );
};

export default ProductBoxComponent;
