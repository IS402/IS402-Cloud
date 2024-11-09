import React, { useState } from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const { Text } = Typography;

const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await axios.post('http://localhost:5000/auth/signup', {
        username: values.username,
        name: values.name,
        email: values.email,
        password: values.password,
      });
      message.success('Registration successful!');
      navigate('/login'); // Redirect to login page after successful signup
    } catch (error) {
      setErrorMessage(error.response?.data.message || 'An error occurred');
    }
  };

  return (
    <div className='signup-container'>
      <Form
        name="signup_form"
        className="signup-form"
        initialValues={{}}
        onFinish={onFinish}
        autoComplete="off"
      >
        <h2 className="signup-title">Đăng Ký</h2>

        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Vui lòng nhập tên người dùng!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Tên người dùng" autoComplete="off" />
        </Form.Item>

        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Họ và tên" autoComplete="off" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Vui lòng nhập email!' },
            { type: 'email', message: 'Định dạng email không đúng!' },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" autoComplete="off" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" autoComplete="off" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Vui lòng xác nhận mật khẩu!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Mật khẩu không khớp!'));
              },
            }),
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Xác nhận mật khẩu" autoComplete="off" />
        </Form.Item>

     

        <Form.Item>
          <Button type="primary" htmlType="submit" className="signup-button">
            Đăng Ký
          </Button>
        </Form.Item>
        
        <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
          <Text>Đã có tài khoản? </Text> <Link to="/login">Đăng Nhập</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpPage;