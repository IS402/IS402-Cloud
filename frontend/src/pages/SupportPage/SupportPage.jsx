import React from "react";
import { Layout, Menu, theme, Breadcrumb } from "antd";
import { contents } from "./SupportContent";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
const { Content, Sider } = Layout;

const whiteColor = "#ffffff";
const blackColor = "#000000";

const items = [
  {
    key: "1",
    label: (
      <Link to="/support/chinh-sach-khui-hop-san-pham" style={{ color: blackColor, fontSize: 16 }}>
        Chính sách khui hộp sản phẩm
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link to="/support/chinh-sach-thu-thap-&-xu-ly-du-lieu-ca-nhan" style={{ color: blackColor, fontSize: 16 }}>
        Chính sách thu thập & xử lý dữ liệu cá nhân
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link to="/support/chinh-sach-tra-gop"style={{ color: blackColor, fontSize: 16 }}>
        Chính sách trả góp
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link to="/support/ffriends"style={{ color: blackColor, fontSize: 16 }}>
        F.Friends - Bạn đồng hành
      </Link>
    ),
  },
  {
    key: "5",
    label: (
      <Link to="/support/gioi-thieu-may-doi-tra"style={{ color: blackColor, fontSize: 16 }}>
        Giới thiệu máy đổi trả
      </Link>
    ),
  },
  {
    key: "6",
    label: (
      <Link to="/support/huong-dan-mua-hang"style={{ color: blackColor, fontSize: 16 }}>
        Hướng dẫn mua hàng & thanh toán online
      </Link>
    ),
  },
  {
    key: "7",
    label: (
      <Link to="/support/quy-dinh-ho-tro-ky-thuat-va-sao-luu-du-lieu"style={{ color: blackColor, fontSize: 16 }}>
        Quy định về hỗ trợ kỹ thuật & sao lưu dữ liệu
      </Link>
    ),
  },
  {
    key: "8",
    label: (
      <Link to="/support/nha-nhap-khau-truc-tiep"style={{ color: blackColor, fontSize: 16 }}>
        Đại lý uỷ quyền và TTBH uỷ quyền của Apple
      </Link>
    ),
  },
  {
    key: "9",
    label: (
      <Link to="/support/diem-cung-cap-dich-vu-vien-thong-fpt"style={{ color: blackColor, fontSize: 16 }}>
        Danh sách điểm cung cấp dịch vụ viễn thông FPT
      </Link>
    ),
  },
  {
    key: "10",
    label: (
      <Link to="/support/chinh-sach-bao-mat"style={{ color: blackColor, fontSize: 16 }}>
        Chính sách bảo mật
      </Link>
    ),
  },
  {
    key: "11",
    label: (
      <Link to="/support/gioi-thieu"style={{ color: blackColor, fontSize: 16 }}>
        Giới thiệu về Wummibo Shop
      </Link>
    ),
  },
  {
    key: "12",
    label: (
      <Link to="/support/chinh-sach-bao-hanh"style={{ color: blackColor, fontSize: 16 }}>
        Chính sách bảo hành
      </Link>
    ),
  },
  {
    key: "13",
    label: (
      <Link to="/support/chinh-sach-giao-hang"style={{ color: blackColor, fontSize: 16 }}>
        Chính sách giao hàng & lắp đặt
      </Link>
    ),
  },
  {
    key: "14",
    label: (
      <Link to="/support/cau-hoi-thuong-gap"style={{ color: blackColor, fontSize: 16 }}>
        Câu hỏi thường gặp
      </Link>
    ),
  },
  {
    key: "15",
    label: (
      <Link to="/support/chinh-sach-goi-cuoc-di-dong-fpt"style={{ color: blackColor, fontSize: 16 }}>
        Chính sách gói cước di động FPT
      </Link>
    ),
  },
  {
    key: "16",
    label: (
      <Link to="/support/chinh-sach-doi-san-pham"style={{ color: blackColor, fontSize: 16 }}>
        Chính sách đổi trả
      </Link>
    ),
  },
  {
    key: "17",
    label: (
      <Link to="/support/chinh-sach-gia-cuoc"style={{ color: blackColor, fontSize: 16 }}>
        Chính sách mạng di động FPT
      </Link>
    ),
  },
];
const SupportPage = () => {
  const { id } = useParams();
  const content = contents.find((content) => content.id === id);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const renderTitle = () =>{
    if(content){
      return (
        <Breadcrumb.Item>{content.title}</Breadcrumb.Item>
      )
    }
  };
  const renderContent = () => {
    if (!content) {
      return (
        <div>
          <p style={{fontSize:18}}>THÔNG TIN LIÊN HỆ</p>
          <p style={{fontSize:18}}>
            Công ty Cổ phần Bán kẻ Kỹ thuật số FPT luôn mong muốn hỗ trợ và
            mang tới dịch vụ tốt nhất cho Quý khách.
          </p>
          <p style={{fontSize:18}}>
            Nếu Quý khách có bất cứ thắc mắc, góp ý liên quan tới dịch vụ,
            sản phẩm cũng như nhu cầu hợp tác. Xin mời Quý khách liên hệ
            theo thông tin sau:
          </p>
          <p style={{fontSize:18}}>
            Địa chỉ: 261-263 Khánh Hội, Phường 2, Quận 4, Thành phố Hồ Chí
            Minh
          </p>
          <p style={{fontSize:18}}>Email tiếp nhận: fptshop@fpt.com</p>
          <ul>
            <li style={{fontSize:18}}>Tư vấn, hỗ trợ: 1800 6601</li>
            <li style={{fontSize:18}}>Góp ý, phản ánh: 1800 6616</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <h1>{content.title}</h1>
          {content.body}
        </div>
      );
    }
  };

  return (
    <Content style={{ padding: "0 60px" }}>
      <Breadcrumb style={{ margin: "16px 0", padding: "0 70px" }}>
        <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item>Hỗ trợ</Breadcrumb.Item>
        {renderTitle()}
      </Breadcrumb>
      <Layout
        style={{
          padding: "15px 50px",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Sider style={{ background: colorBgContainer }} width={290}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "auto",
              backgroundColor: "#f3f4f6",
              borderRadius: 20,
              padding: "10px 10px",
            }}
            items={items}
          />
        </Sider>
        <Content style={{ padding: "0 30px", minHeight: 280 }}>
          {renderContent()}
        </Content>
      </Layout>
    </Content>
  );
};

export default SupportPage;
