import React from 'react'
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const {Text}=Typography

const LoginPage = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
    // Xử lý logic đăng nhập tại đây
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
          rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Tài khoản" />
        </Form.Item>

        <Form.Item
          className="password"
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