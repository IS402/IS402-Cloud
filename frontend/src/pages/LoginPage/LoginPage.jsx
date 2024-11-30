import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const {Text}=Typography

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      console.log('Login attempt with:', values);

      const response = await axios.post('http://localhost:5000/auth/login', {
        email: values.email,
        password: values.password,
      },
      {
        withCredentials: true, // Important for cookies
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Login response:', response.data);
      message.success('Login successful!');
      if (response.data.role === 'admin') {
        navigate('/admin/brand');
      } else {
        navigate('/home');
      }
    } catch (error) {
      console.error('Login error:', error.response?.data);
      setErrorMessage(error.response?.data.message || 'An error occurred');
    }
  };
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
      <Form
        name="login_form"
        className="login-form"
        initialValues={{}}
        onFinish={onFinish}
        style={{boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius:10, padding:'20px 20px'}}
      >
        <h2 className="login-title">Đăng Nhập</h2>

        <Form.Item
          className="username"
          name="email"
          rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          className="password"
          name="password"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" className="login-remember">
          <Checkbox>Nhớ tài khoản</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" className="login-button">
            Đăng Nhập
          </Button>
        </Form.Item>
        <Form.Item style={{display:'flex', justifyContent:'center'}}>
          <Text>Hoặc </Text>
          <Link to="/signup">Đăng ký</Link>
        </Form.Item>
      </Form>
    </div>
  )
};

export default LoginPage