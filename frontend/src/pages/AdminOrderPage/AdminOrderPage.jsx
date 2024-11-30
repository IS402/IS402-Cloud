import React, {useEffect, useState} from 'react'
import { Space, Table, Tag, Typography, message } from 'antd';
import axios from "axios";

const {Text}=Typography;

const AdminOrderPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Total amount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
    },
    {
      title: 'Shipping address',
      dataIndex: 'shippingAddress',
      key: 'shippingAddress',
    },
    {
      title: 'Payment status',
      key: 'paymentStatus',
      dataIndex: 'paymentStatus',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = 'orange';
            if (tag === 'failed') {
              color = 'volcano';
            }else if(tag === 'completed'){
              color = 'green';
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
      title: 'Order status',
      dataIndex: 'shippingAddress',
      key: 'shippingAddress',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = 'orange';
            if (tag === 'cancelled') {
              color = 'volcano';
            }else if(tag === 'delivered'){
              color = 'green';
            }else if(tag === 'shipped'){
              color = 'blue'
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
      title: 'Order date',
      dataIndex: 'orderDate',
      key: 'orderDate',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Confirm</a>
          <a>Cancel</a>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/order/");
        setData(response.data);
      } catch (err) {
        message.error("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div style={{display:'flex', rowGap:20, flexDirection:'column'}}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>Đơn hàng</Text>
        <Table columns={columns} dataSource={data} />;
    </div>
  )
}

export default AdminOrderPage