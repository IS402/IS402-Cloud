import React, { useEffect, useState } from "react";
import {
  Space,
  Table,
  Tag,
  Typography,
  Button,
  Modal,
  Form,
  Input,
  message,
  Upload,
  Spin
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Text } = Typography;
const primaryColor = "#EC3C3C";
const hoverColor = "#f65668";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const AdminProductPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [fileList, setFileList] = useState([]); 

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("Bạn chỉ có thể tải lên hình ảnh!");
    }
    return isImage;
  };
  const handleImageChange = (info) => {
    if (info.fileList && info.fileList.length > 0) {
      const newFileList = info.fileList.slice(-1);
      setFileList(newFileList);
      const file = newFileList[0];
      const imageUrl = file.thumbUrl || URL.createObjectURL(file.originFileObj);
      setImageUrl(imageUrl);
    } else {
      setFileList([]);
      setImageUrl("");
    }
  };
  return (
    <div style={{ display: "flex", rowGap: 20, flexDirection: "column" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sản phẩm</Text>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          type="primary"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={showModal}
          icon={<PlusOutlined />}
          style={{
            borderRadius: 10,
            border: "none",
            height: 35,
            boxShadow: "none",
            backgroundColor: isHovered ? hoverColor : primaryColor,
            fontSize: 16,
          }}
        >
          Thêm sản phẩm
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />;
      <Modal
        title="Thêm sản phẩm"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null} // You can customize the footer if needed
        destroyOnClose // Optional: destroys the modal when it's closed
      >
        <Form
          layout="vertical"
          onFinish={(values) => {
            console.log("Form values:", values);
            handleCancel(); // Close the modal after form submission
          }}
        >
          <Form.Item
            label="Tên sản phẩm"
            name="productName"
            rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
          >
            <Input placeholder="Nhập tên sản phẩm" />
          </Form.Item>

          <Form.Item
            label="Mô tả sản phẩm"
            name="productDescription"
            rules={[
              { required: true, message: "Vui lòng nhập mô tả sản phẩm!" },
            ]}
          >
            <Input.TextArea placeholder="Nhập mô tả sản phẩm" />
          </Form.Item>

          <Form.Item
            label="Giá"
            name="productPrice"
            rules={[{ required: true, message: "Vui lòng nhập giá tiền sản phẩm!" }]}
          >
            <Input placeholder="Nhập giá tiền sản phẩm" />
          </Form.Item>

          <Form.Item
            label="Giá đã được giảm"
            name="productDiscountPrice"
            // rules={[{ required: true, message: "Vui lòng nhập giá tiền sản phẩm!" }]}
          >
            <Input placeholder="Nhập giá tiền sản phẩm đã được giảm" />
          </Form.Item>

          <Form.Item
            label="Danh mục"
            name="productCategory"
            rules={[{ required: true, message: "Vui lòng nhập danh mục sản phẩm!" }]}
          >
            <Input placeholder="Nhập danh mục sản phẩm" />
          </Form.Item>

          <Form.Item
            label="Hãng sản xuất"
            name="productBrand"
            rules={[{ required: true, message: "Vui lòng nhập hãng sản xuất sản phẩm!" }]}
          >
            <Input placeholder="Nhập hãng sản xuất sản phẩm" />
          </Form.Item>

          <Form.Item
            label="Tồn kho"
            name="productBrand"
            rules={[{ required: true, message: "Vui lòng nhập hãng sản xuất sản phẩm!" }]}
          >
            <Input placeholder="Nhập hãng sản xuất sản phẩm" />
          </Form.Item>

          <Form.Item
            label="Ảnh thương hiệu"
            name="brandImage"
            valuePropName="fileList"
            getValueFromEvent={(e) => e && e.fileList}
            // rules={[{ required: true, message: "Vui lòng chọn ảnh thương hiệu!" }]}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Upload
                name="brandImage"
                listType="picture-card"
                beforeUpload={beforeUpload}
                showUploadList={false}
                onChange={handleImageChange}
                style={{ width: '200px' }}
              >
                <Button 
                  icon={<PlusOutlined />} 
                  style={{
                    margin: '0', 
                    padding: '0 10px', 
                    height: '32px', 
                    fontSize: '14px',
                    border:'none',
                    boxShadow:'none',
                    backgroundColor:'#FAFAFA'
                  }}
                >
                  Chọn ảnh
                </Button>
              </Upload>
            </div>

            {/* Display Image Preview */}
            {imageUrl && (
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <img src={imageUrl} alt="brand" style={{ width: '100%', maxWidth: '200px' }} />
              </div>
            )}
          </Form.Item>

          <Form.Item style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="primary"
              style={{
                borderRadius: 10,
                border: "none",
                height: 35,
                boxShadow: "none",
                backgroundColor: primaryColor,
                fontSize: 16,
                minWidth: 180,
              }}
            >
              Lưu
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminProductPage;
