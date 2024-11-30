import React, { useState, useEffect } from "react";
import { Checkbox, Col, Typography, message } from "antd";
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";

const whiteColor = "#ffffff";
const { Text } = Typography;

const ProductCartComponent = ({ product, onQuantityChange, onDelete, onTotalChange }) => {
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(product?.quantity || 1);
  const [base64Image, setBase64Image] = useState(null);
  const [totalPrice, setTotalPrice] = useState((product?.product?.price || 0) * quantity);

  // Convert buffer to Base64 and store it
  useEffect(() => {
    if (product?.product?.images?.length > 0 && product.product.images[0]?.data) {
      const bufferData = product.product.images[0].data.data; // Buffer data
      const contentType = product.product.images[0].contentType; // Image content type
      const base64 = `data:${contentType};base64,${Buffer.from(bufferData).toString("base64")}`;
      setBase64Image(base64);
    }
  }, [product]);

  // Update total when quantity changes
  useEffect(() => {
    const productTotal = quantity * product?.product?.price || 0;
    onTotalChange && onTotalChange(product?.product?._id, productTotal);
  }, [quantity, product, onTotalChange]);


  const handleQuantityChange = async (productId, newQuantity) => {
    if (newQuantity < 1) {
      message.warning("Số lượng tối thiểu là 1");
      return;
    }

    if (newQuantity > product?.product?.stock) {
      message.warning("Số lượng vượt quá hàng tồn kho");
      return;
    }

    setLoading(true);
    try {
      await axios.put(
        `http://localhost:5000/api/cart/update-quantity`,
        {
          productId,
          quantity: newQuantity,
        },
        { withCredentials: true }
      );

      setQuantity(newQuantity); // Update quantity locally
      onQuantityChange && onQuantityChange(productId, newQuantity * (product?.product?.price || 0)); // Notify parent component
      setTotalPrice(newQuantity * (product?.product?.price || 0));
    } catch (error) {
      message.error("Không thể cập nhật số lượng");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (productId) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:5000/api/cart/remove/${productId}`, {
        withCredentials: true,
      });
      onDelete && onDelete(productId);
      message.success("Đã xóa sản phẩm khỏi giỏ hàng");
    } catch (error) {
      message.error("Không thể xóa sản phẩm");
    } finally {
      setLoading(false);
    }
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
      <Checkbox style={{flex:1}}/>
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
          justifyContent: "center",
          flex:1
        }}
      >
        {base64Image ? (
          <img
            src={base64Image}
            alt={product?.product?.name || "Product"}
            style={{ height: 60, objectFit: "cover" }}
          />
        ) : (
          <span>No image</span>
        )}
      </Col>
      <Text style={{ fontWeight: "500", fontSize: 16, flex:3 }}>
        {product?.product?.name || "Tên sản phẩm"}
      </Text>
      <div
        style={{
          display: "flex",
          gap: 20,
          flex:4,
          alignItems: "center",
          marginLeft: 100,
        }}
      >
        <div>
          <Text style={{ color: "#EC3C3C", fontWeight: "500" }}>
          {`${totalPrice.toLocaleString()} đ`}
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
              alignItems: "center",
            }}
            onClick={() =>
              !loading && handleQuantityChange(product?.product?._id, quantity - 1)
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
              alignItems: "center",
            }}
          >
            <Text>{quantity}</Text>
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
              alignItems: "center",
            }}
            onClick={() =>
              !loading && handleQuantityChange(product?.product?._id, quantity + 1)
            }
          />
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "center",flex:1 }}>
        <DeleteOutlined
          style={{ fontSize: 20 }}
          onClick={() => !loading && handleDelete(product?.product?._id)}
        />
      </div>
    </div>
  );
};

export default ProductCartComponent;
