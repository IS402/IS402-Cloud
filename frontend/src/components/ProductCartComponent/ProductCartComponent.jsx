import React from "react";
import { Checkbox, Col, Typography } from "antd";
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons";

const whiteColor = "#ffffff";
const { Text } = Typography;

const ProductCartComponent = ({ product, onQuantityChange, onDelete }) => {
  const renderImage = (images) => {
    if (!images || images.length === 0) {
      return <span>No image</span>;
    }

    // Handle base64 image data
    if (images[0].data) {
      const base64String = Buffer.from(images[0].data).toString('base64');
      const contentType = images[0].contentType;
      return (
        <img
          src={`data:${contentType};base64,${base64String}`}
          alt={product?.product?.name || "Product"}
          style={{ 
            height: 60, 
            width: '100%',
            objectFit: "cover",
            borderRadius: 6 
          }}
        />
      );
    }

    // Handle regular image URLs
    return (
      <img
        src={images[0]}
        alt={product?.product?.name || "Product"}
        style={{ 
          height: 60, 
          width: '100%',
          objectFit: "cover",
          borderRadius: 6 
        }}
      />
    );
  };
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        borderRadius: 10,
        backgroundColor: whiteColor,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px 20px",
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
        {product?.product?.images && product.product.images.length > 0 ? (
          <img
            src={product.product.images[0]}
            alt={product?.product?.name || "Product"}
            style={{ height: 60, objectFit: "cover" }}
          />
        ) : (
          <span>No image</span>
        )}
      </Col>
      <Text style={{ fontWeight: "500", fontSize: 16 }}>
        {product?.product?.name || "Tên sản phẩm"}
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
            {`${(product?.product?.price || 0).toLocaleString()} đ`}
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
            onClick={() =>
              onQuantityChange &&
              onQuantityChange(product?.product?._id, product?.quantity - 1)
            }
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
            <Text>{product?.quantity || 0}</Text>
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
            onClick={() =>
              onQuantityChange &&
              onQuantityChange(product?.product?._id, product?.quantity + 1)
            }
          />
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <DeleteOutlined
          style={{ fontSize: 20 }}
          onClick={() => onDelete && onDelete(product?.product?._id)}
        />
      </div>
    </div>
  );
};

export default ProductCartComponent;
