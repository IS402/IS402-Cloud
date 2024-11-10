import React, { useEffect } from "react";
import { useState } from "react";
import "../OrderPage/OrderPage.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const OrderPage = () => {
  const [cartItems, setCartItems] = useState([]);
  // { id: 1, name: "Sản phẩm 1", price: 100000, selected: false },
  // { id: 2, name: "Sản phẩm 2", price: 200000, selected: false },
  // { id: 3, name: "Sản phẩm 3", price: 300000, selected: false },
  // const history = useHistory();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://6576af1c0fd5d07e432ed3ca.mockapi.io/dataUITShop"
        );
        setCartItems(response.data);
      } catch (erorr) {
        console.log(erorr);
      }
    };
    fetchData();
  }, []);

  const selectItems = (id) => {
    setCartItems((selectItems) =>
      selectItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };
  var total = 0;
  function totalPrice() {
    cartItems
      .filter((item) => item.selected)
      .map((item) => {
        total = total + item.price;
        // *{cartItems.item.quantity}
      });
    return total;
  }
  const handleCheckout = () => {
    navigate('/payment', { state: { cartItems, total } }); // Điều hướng và truyền dữ liệu
  };

  return (
    <>
      <div className="container">
        <div className="cart">
          <h1 className="title">Giỏ hàng</h1>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="listItem">
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => selectItems(item.id)}
                />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="select">
          <h2 className="title">Sản phẩm đã chọn</h2>
          <ul>
            {cartItems
              .filter((item) => item.selected)
              .map((item) => (
                <li key={item.id} className="listItem">
                  {item.name}
                </li>
              ))}
          </ul>
          <div className="totalPrice">
            Tổng tiền: {totalPrice().toLocaleString("vi-VN")}
            {/* * {cartItems.item.quantity} */}
          </div>
          <button className="pay" onClick={handleCheckout}>Thanh toán</button>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
