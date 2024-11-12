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
import axios from 'axios';

const { Text } = Typography;
const primaryColor = "#EC3C3C";
const hoverColor = "#f65668";
const columns = [
  {
    title: "Logo",
    dataIndex: "image",
    key: "image",
    render: (image) => <img src={image} alt="Logo" style={{ width: '40px', height: 'auto' }} />,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
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

];
const AdminBrandPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [fileList, setFileList] = useState([]); 

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/brand/');
        setData(response.data);
      } catch (err) {
        setError(err.message);
        message.error('Failed to load brands');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
    // If the fileList has new files
    if (info.fileList && info.fileList.length > 0) {
      const newFileList = info.fileList.slice(-1); // Keep only the last selected file
      setFileList(newFileList); // Update the file list
      const file = newFileList[0];
      const imageUrl = file.thumbUrl || URL.createObjectURL(file.originFileObj);
      setImageUrl(imageUrl); // Update the image preview URL
    } else {
      setFileList([]); // Clear the file list if no image is selected
      setImageUrl("");  // Reset the preview
    }
  };
  const handleSubmit = async (values) => {
    try {
      await axios.post('http://localhost:5000/api/brand/', {
        name: values.brandName,
        description: values.brandDescription,
        image: values.brandImage,
      });
      message.success('Brand added successfully!');
      handleCancel();
    } catch (error) {
      setErrorMessage(error.response?.data.message || 'An error occurred');
    }
  };
  // if (loading) {
  //   return <Spin size="large" />;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }
  return (
    <div style={{ display: "flex", rowGap: 20, flexDirection: "column" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Thương hiệu</Text>
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
          Thêm thương hiệu
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />;
      <Modal
        title="Thêm thương hiệu"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null} // You can customize the footer if needed
        destroyOnClose // Optional: destroys the modal when it's closed
      >
        <Form
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Tên thương hiệu"
            name="brandName"
            rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
          >
            <Input placeholder="Nhập tên thương hiệu" />
          </Form.Item>

          <Form.Item
            label="Mô tả thương hiệu"
            name="brandDescription"
            // rules={[
            //   { required: true, message: "Vui lòng nhập mô tả thương hiệu!" },
            // ]}
          >
            <Input.TextArea placeholder="Nhập mô tả thương hiệu" />
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

export default AdminBrandPage;
