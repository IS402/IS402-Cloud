import React from 'react'
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
    const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/'); // Chuyển hướng về trang chính
  };
  return (
    <Result
      status="success"
      title="Cảm ơn bạn đã thanh toán!"
      subTitle="Đơn hàng của bạn đã được xử lý thành công. Chúng tôi sẽ sớm gửi thông tin đến bạn."
      style={{height:400}}
      extra={[
        <Button style={{ backgroundColor: '#ff4d4f', borderColor: '#ff4d4f', color:"#ffffff" }} key="home" onClick={handleBackToHome}>
          Quay lại trang chủ
        </Button>,
      ]}
    />
  )
}

export default ThankYouPage