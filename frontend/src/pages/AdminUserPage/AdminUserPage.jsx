import React, { useEffect, useState } from "react";
import {
  Space,
  Table,
  Tag,
  Typography,
  Button,
  Modal,
  Form,
  message,
  Input,
  Select
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from 'axios';

const { Text } = Typography;
const primaryColor = "#EC3C3C";
const hoverColor = "#f65668";

const AdminUserPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user/');
        setData(response.data.users);
      } catch (err) {
        setError(err.message);
        message.error('Failed to load users');
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
    setEditingRecord(false)
  };
  const handleSubmit = async (values) => {
    try {
      const payload = {
        username:values.userUsername,
        name: values.userName,
        email: values.userEmail,
        phoneNumber:values.userPhoneNumber,
        password:values.userPassword,
        role:values.userRole,
      };
      if (editingRecord) {
        // Chỉnh sửa sản phẩm
        await axios.patch(`http://localhost:5000/api/user/${editingRecord._id}`, payload);
        message.success("Cập nhật thông tin khách hàng thành công!");
      } else {
        // Thêm sản phẩm
        await axios.post('http://localhost:5000/api/user/', payload);
        message.success("Thêm khách hàng thành công!");
      }
      handleCancel();
    } catch (error) {
      setErrorMessage(error.response?.data.message || 'An error occurred');
    }
  };
  const handleEdit = (record) => {
    setEditingRecord(record);
    setIsModalVisible(true);
  };
  const confirmDelete = (id) => {
    Modal.confirm({
      title: "Bạn có chắc chắn muốn xóa khách hàng này?",
      content: "Thao tác này không thể hoàn tác.",
      okText: "Xóa",
      okType: "danger",
      cancelText: "Hủy",
      onOk: () => handleDelete(id), // Gọi hàm xóa khi xác nhận
    });
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/user/${id}`);
      message.success("Xóa danh mục thành công!");
  
      // Cập nhật lại danh sách sau khi xóa
      setData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      message.error(error.response?.data.message || "Đã xảy ra lỗi khi xóa!");
    }
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: 'Role',
      key: 'role',
      dataIndex: 'role',
      
      render: (_, { role }) => {
        let color = 'green'; // Mặc định là màu xanh
        if (role === 'admin') {
          color = 'blue'; // Nếu status là 'inactive', thay màu thành đỏ
        }
    
        return (
          <Tag color={color} key={role}>
            {role.toUpperCase()}
          </Tag>
        );
      },
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
  return (
    <div style={{ display: "flex", rowGap: 20, flexDirection: "column" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Khách hàng</Text>
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
          Thêm khách hàng
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />;
      <Modal
        title={editingRecord ? "Chỉnh sửa thông tin khách hàng" : "Thêm khách hàng"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null} // You can customize the footer if needed
        destroyOnClose // Optional: destroys the modal when it's closed
      >
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={editingRecord
            ? {
                userName: editingRecord?.name,
                userEmail: editingRecord?.email,
                userUsername:editingRecord?.username,
                userPhoneNumber: editingRecord?.phoneNumber,
                userRole: editingRecord?.role,
              }
            : undefined}
        >
          <Form.Item
            label="Tên khách hàng"
            name="userName"
          >
            <Input placeholder="Nhập tên khách hàng" />
          </Form.Item>

          <Form.Item
            label="Tên người dùng"
            name="userUsername"
            rules={[{ required: true, message: "Vui lòng nhập tên người dùng!" }]}
          >
            <Input placeholder="Nhập tên người dùng" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="userEmail"
            rules={[{ required: true, message: "Vui lòng nhập email!" }]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="userPhoneNumber"
          >
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="userPassword"
            rules={[{ required: true, message: "Vui lòng nhập email!" }]}
          >
            <Input placeholder="Nhập số mật khẩu" />
          </Form.Item>

          <Form.Item
            label="Vai trò"
            name="userRole"
          >
            <Select placeholder="Chọn vai trò">
              <Select.Option value="user">User</Select.Option>
              <Select.Option value="admin">Admin</Select.Option>
            </Select>
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

export default AdminUserPage;
