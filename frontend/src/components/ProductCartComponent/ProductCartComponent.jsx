import React from "react";
import { Checkbox, Col, Input, Typography } from "antd";
import image from "../../images/ss-s24-ultra-xam-222.png";
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons";

const whiteColor = "#ffffff";
const { Text } = Typography;
const ProductCartComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        borderRadius: 10,
        backgroundColor: whiteColor,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        padding:"20px 20px",
      }}
    >
      <Checkbox />
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
          alignItems: "center",
          marginLeft: 100,
        }}
      >
        <div>
          <Text style={{ color: "#EC3C3C", fontWeight: "500" }}>
            39.000.000
          </Text>
        </div>
        <div style={{ display: "flex" }}>
          <MinusOutlined
            style={{
              padding: "5px 5px",
              border: "1px solid #D3D3D3",
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              height: 25,
              width: 25,
              display: "flex",
              justifyContent: "center",
            }}
          />
          <div
            style={{
              padding: "5px 5px",
              border: "1px solid #D3D3D3",
              height: 25,
              width: 25,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Text>1</Text>
          </div>
          <PlusOutlined
            style={{
              padding: "5px 5px",
              border: "1px solid #D3D3D3",
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              height: 25,
              width: 25,
              display: "flex",
              justifyContent: "center",
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <DeleteOutlined style={{ fontSize: 20 }} />
      </div>
    </div>
  );
};

export default ProductCartComponent;
