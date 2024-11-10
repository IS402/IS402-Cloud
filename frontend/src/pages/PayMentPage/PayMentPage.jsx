import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../PayMentPage/PayMentPage.css";
const PayMentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { cartItems, total } = location.state || {};
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const orderData = {
      name,
      address,
      email,
      cartItems,
      total,
    };

    try {
      const response = await axios.post(
        "https://example.com/api/checkout",
        orderData
      );

      if (response.status === 200) {
        alert(`Đặt hàng thành công!`);
        navigate("/");
      }
    } catch (error) {
      setError("Đặt hàng không thành công, vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Trang thanh toán</h1>
      <h2 className="title">Thông tin đơn hàng</h2>
      <ul>
        {cartItems
          .filter((item) => item.selected)
          .map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x {item.price.toLocaleString()} VND
            </li>
          ))}
      </ul>

      <h2 className="subTitle">Nhập thông tin thanh toán</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="subTitle">Tên:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="subTitle">Địa chỉ:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="subTitle">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <h3 className="title">Tổng tiền: {total.toLocaleString()} VND</h3>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Đang xử lý..." : "Đặt hàng"}
          </button>
        </div>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default PayMentPage;
