import React from "react";
import { Checkbox, Col, Input, Typography } from "antd";
import image from "../../images/ss-s24-ultra-xam-222.png";
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons";

const whiteColor = "#ffffff";
const { Text } = Typography;
const ProductPaymentComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        borderRadius: 10,
        backgroundColor: whiteColor,
        padding:"20px 20px",
      }}
    >
      <Col
        style={{
          padding: "5px 1px",
          border: "1px solid #d1d5db",
          borderRadius: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          width: 80,
          height: 80,
          cursor: "pointer",
        }}
      >
        <img src={image} alt="" style={{ height: 60 }} />
      </Col>
      <Text style={{ fontWeight: "500", fontSize: 16 }}>
        Samsung Galaxy S24 Ultra 12GB 512GB
      </Text>
      <div
        style={{
          display: "flex",
          gap: 20,
          flex:5,
          alignItems: "center",
          justifyContent:'flex-end',
          marginLeft: 100,
        }}
      >
        <div>
          <Text style={{ color: "#EC3C3C", fontWeight: "500", fontSize:18 }}>
            39.000.000 đ
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ProductPaymentComponent;
