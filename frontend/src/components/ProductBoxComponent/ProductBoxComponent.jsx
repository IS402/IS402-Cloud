import React from "react";
import { Row, Col, Typography } from "antd";
import image from "../../images/ss-s24-ultra-xam-222.png";
import star from "../../images/star.png";
import starBlack from "../../images/star_black.png";
import love from "../../images/heart.png";
import loveBlack from "../../images/heart_black.png";
import { Link, useNavigate } from "react-router-dom";
const { Text } = Typography;

const ProductBoxComponent = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate(`/product-detail/${product._id}`);
  };
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN').format(amount);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        padding: "15px 15px",
        background: "#ffffff",
        borderRadius: 15,
        width: 200,
        display: "flex",
        justifyContent: "center",
        position: "relative",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
      }}
    >
      <Link to={`/product-detail/${product._id}`}>
        <div style={{ display: "flex", justifyContent: "center", height:170 }}>
          {product.images && product.images.length > 0 ? (
            <img
              src={product.images[0]}
              alt="Product"
              style={{
                width: "160px",
                height: 160,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.width = "170px";
                e.target.style.height = "170px";
              }}
              onMouseLeave={(e) => {
                e.target.style.width = "160px";
                e.target.style.height = "160px";
              }}
            />
          ) : (
            <span>No image</span>
          )}
        </div>
        <div>
          <Text
            className="title"
            style={{
              fontWeight: "bold",
              display: "block",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              display: "-webkit-box",
            }}
          >
            {product.name}
          </Text>
        </div>
        <div style={{ marginTop: 30 }}>
          {product.discountPrice > 0 ? (
            <>
              <Text
                className="product-price"
                style={{ color: "#d70018", fontWeight: "bold" }}
              >
                {`${formatCurrency(product.discountPrice)} ₫`}
              </Text>
              <Text
                className="product-price"
                style={{
                  color: "#707070",
                  fontWeight: "bold",
                  textDecoration: "line-through",
                  marginLeft: 10,
                  fontSize: 12,
                }}
              >
                {`${formatCurrency(product.price)} ₫`}
              </Text>
            </>
          ) : (
            <Text
              className="product-price"
              style={{ color: "#d70018", fontWeight: "bold" }}
            >
              {`${formatCurrency(product.price)} ₫`}
            </Text>
          )}
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
            fontWeight: 500,
            padding: "2px 5px",
            position: "absolute",
            right: "0",
            top: "0",
            width: "fit-content",
          }}
        >
          Trả góp 0%
        </div>
      </Link>
    </div>
  );
};

export default ProductBoxComponent;
