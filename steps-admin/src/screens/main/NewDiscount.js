import React from 'react';
import Header from './Header';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { useMutation } from 'react-query';

import './Main.css';

const createDiscount = async (data) => {
  await axios.post('http://localhost:4000/discounts/newdiscount', data);
};

const Main = () => {
  const mutation = useMutation((data) => createDiscount(data));
  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <Header />
      <div>new discount</div>
      <div className="first-input-line">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ minWidth: 600 }}
          onFinish={onSubmit}
        >
          <Form.Item className="input" label="Title" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            className="input"
            label="Discount"
            name="discount"
            rules={[{ required: true }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item className="input" label="Cost" name="cost" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item
            className="input"
            label="ImageUrl"
            name="imageUrl"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item className="input" label="Rules" name="rules" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            className="input"
            label="PromoCodes"
            name="promoCodes"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Main;
