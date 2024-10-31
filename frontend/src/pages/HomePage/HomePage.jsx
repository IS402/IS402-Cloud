import React from "react";
import { Carousel } from "antd";
import image1 from "../../images/xiaomi-14T-series-home-mo-ban.png";
import image2 from "../../images/thu-cu-banner-390-home.png";
import image3 from "../../images/Tặng bảo hành 12 tháng Vip.png";
import image4 from "../../images/sliding-home-iphone-16-pro-km-moi.png";
import image5 from "../../images/s24-ultra-thang-10-home.png";

const HomePage = () => {
  return (
    <div style={{ padding: "30px 100px" }}>
      <Carousel autoplay style={{ padding:'0 50px', borderRadius:20}}>
        <div style={{borderRadius:20}}>
          <img src={image1} alt="bacgkround" style={{height:500, width:'100%', borderRadius:20}}/>
        </div>
        <div style={{borderRadius:20}}>
          <img src={image2} alt="bacgkround" style={{height:500, width:'100%', borderRadius:20}}/>
        </div>
        <div style={{borderRadius:20}}>
          <img src={image3} alt="bacgkround" style={{height:500, width:'100%', borderRadius:20}}/>
        </div>
        <div style={{borderRadius:20}}>
          <img src={image4} alt="bacgkround" style={{height:500, width:'100%', borderRadius:20}}/>
        </div>
        <div style={{borderRadius:20}}>
          <img src={image5} alt="bacgkround" style={{height:500, width:'100%', borderRadius:20}}/>
        </div>
      </Carousel>
    </div>
  );
};

export default HomePage;
