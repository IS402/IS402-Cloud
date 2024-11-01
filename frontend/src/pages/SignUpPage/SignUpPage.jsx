import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const {Text}=Typography

const SignUpPage = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
    // Xử lý logic đăng ký tại đây
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
          className="username"
          rules={[{ required: true, message: 'Vui lòng nhập tên người dùng!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Tên người dùng" autoComplete="off" />
        </Form.Item>

        <Form.Item
          className="email"
          rules={[
            { required: true, message: 'Vui lòng nhập email!' },
            { type: 'email', message: 'Định dạng email không đúng!' },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" autoComplete="off" />
        </Form.Item>

        <Form.Item
          className="password"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" autoComplete="off" />
        </Form.Item>

        <Form.Item
          className="confirmPassword"
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
          <Button htmlType="submit" className="signup-button">
            Đăng Ký
          </Button>
        </Form.Item>
        <Form.Item style={{display:'flex', justifyContent:'center'}}>
          <Text>Đă có tài khoản </Text>
          <Link to="/login">Đăng Nhập</Link>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SignUpPage