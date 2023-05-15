import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Checkbox, Form, Input } from 'antd';
import './login.scss'

const Login: React.FC = () => {
  const navigate = useNavigate()

  type inputValue = {
    username: string,
    password: string,
    remember: boolean
  }

  // 登陆成功
  const onFinish = (values: inputValue) => {
    // 这里处理的登陆逻辑。values格式： {username: 'xxx', password: 'yyy', remember: true}
    // 从 values 对象中获取账号密码，然后调取接口去判断能否登陆成功，如果登陆成功，就进行路由跳转
    // 这里模拟账号密码是 admin, 12345
    if (values.username === 'admin' && values.password === '12345') {
      console.log('登陆成功:', values);
      navigate('/NavigationOne/Option1') // 在页面中实现路由跳转
    } else {
      onFinishFailed('账号密码错误, 测试账号是admin，密码是12345')
    }
  };

  // 登陆失败
  const onFinishFailed = (errorInfo: any) => {
    console.log('登陆失败:', errorInfo);
  };

  return (
    <div className='login-outer'>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className='login-form'
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: '测试账号是admin' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: '测试密码是12345' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
};

export default Login;