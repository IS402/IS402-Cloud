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

const AdminBrandPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
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
    setEditingRecord(false);
    setFileList([]);
    setImageUrl("");
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
      const payload = {
        name: values.brandName,
        description: values.brandDescription,
        image: imageUrl, // Lấy URL ảnh từ trạng thái
      };
      if (editingRecord) {
        // Chỉnh sửa sản phẩm
        await axios.patch(`http://localhost:5000/api/brand/${editingRecord._id}`, payload);
        message.success("Cập nhật sản phẩm thành công!");
      } else {
        // Thêm sản phẩm
        await axios.post('http://localhost:5000/api/brand/', payload);
        message.success("Thêm sản phẩm thành công!");
      }
      handleCancel();
      setData((prevData) => [...prevData, payload]);
    } catch (error) {
      setErrorMessage(error.response?.data.message || 'An error occurred');
    }
  };
  const handleEdit = (record) => {
    setEditingRecord(record);
    setImageUrl(record.image);
    setIsModalVisible(true);
  };
  const confirmDelete = (id) => {
    Modal.confirm({
      title: "Bạn có chắc chắn muốn xóa thương hiệu này?",
      content: "Thao tác này không thể hoàn tác.",
      okText: "Xóa",
      okType: "danger",
      cancelText: "Hủy",
      onOk: () => handleDelete(id), // Gọi hàm xóa khi xác nhận
    });
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/brand/${id}`);
      message.success("Xóa thương hiệu thành công!");
  
      // Cập nhật lại danh sách sau khi xóa
      setData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      message.error(error.response?.data.message || "Đã xảy ra lỗi khi xóa!");
    }
  };
  const columns = [
    {
      title: "Logo",
      dataIndex: "image",
      key: "image",
      render: (image) => image ? (<img src={image} alt="Logo" style={{ width: '40px', height: 'auto' }} />) : null,
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
          <a onClick={() => handleEdit(record)}>Edit</a>
          <a onClick={() => confirmDelete(record._id)}>Delete</a>
        </Space>
      ),
    },
  ];
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
        title={editingRecord ? "Chỉnh sửa thương hiệu" : "Thêm thương hiệu"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        destroyOnClose
      >
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={editingRecord ? {
            brandName: editingRecord?.name,
            brandDescription: editingRecord?.description,
          }: undefined}
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

          <Form.Item  style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="primary"
              htmlType="submit"
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
              {editingRecord ? "Cập nhật" : "Lưu"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminBrandPage;
