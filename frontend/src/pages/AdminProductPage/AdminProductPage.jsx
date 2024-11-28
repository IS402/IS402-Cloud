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
  Select,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

const { Text } = Typography;
const primaryColor = "#EC3C3C";
const hoverColor = "#f65668";

const AdminProductPage = () => {
  const [form] = Form.useForm();
  const [isHovered, setIsHovered] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState(false);
  const [images, setImages] = useState([]); // Store base64 images
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  // Fetch products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products/");
        setData(response.data.products);
      } catch (err) {
        message.error("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Fetch brands
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/brand/");
        setBrands(response.data);
      } catch (err) {
        message.error("Failed to load brands");
      }
    };
    fetchBrands();
  }, []);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/category/");
        setCategories(response.data);
      } catch (err) {
        message.error("Failed to load categories");
      }
    };
    fetchCategories();
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingRecord(false);
    setImages([]);
    form.resetFields();
  };

  // Convert selected images to base64
  const handleImageChange = (info) => {
    const file = info.fileList[info.fileList.length - 1]?.originFileObj;
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      setImages((prevImages) => [...prevImages, base64]); // Append new base64 image
    };
    reader.readAsDataURL(file);
  };

  // Submit form data
  const handleSubmit = async (values) => {
    try {
      const payload = {
        name: values.productName,
        description: values.productDescription,
        price: values.productPrice,
        discountPrice: values.productDiscountPrice || 0,
        brand: values.productBrand,
        category: values.productCategory,
        stock: values.productStock || 0,
        specifications: values.productSpecifications || [],
        images, // Send base64 images
      };

      console.log('Payload to be sent:', payload); 

      if (editingRecord) {
        await axios.patch(`http://localhost:5000/api/products/${editingRecord._id}`, payload);
        message.success("Product updated successfully!");
      } else {
        await axios.post("http://localhost:5000/api/products/", payload);
        message.success("Product added successfully!");
      }

      handleCancel();
      setData((prevData) => [...prevData, payload]); // Update the table locally
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error(error.response?.data.message || "Failed to save product");
    }
  };

  // Edit product
  const handleEdit = (record) => {
    setEditingRecord(record);
    setImages(record.images || []);
    setIsModalVisible(true);
  };

  // Delete product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      message.success("Product deleted successfully!");
      setData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      message.error("Failed to delete product");
    }
  };

  // Columns for the Ant Design table
  const columns = [
    {
      title: "Image",
      dataIndex: "images",
      key: "images",
      render: (images) =>
        images && images.length > 0 ? (
          <img src={images[0]} alt="Product" style={{ width: 50, height: "auto" }} />
        ) : (
          <span>No image</span>
        ),
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
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      render: (brand) => (brand ? <Tag color="blue">{brand.name}</Tag> : null),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category) => (category ? <Tag color="green">{category.name}</Tag> : null),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Discount price",
      dataIndex: "discountPrice",
      key: "discountPrice",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <a onClick={() => handleEdit(record)}>Edit</a>
          <a onClick={() => handleDelete(record._id)}>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Text style={{ fontSize: "24px", fontWeight: "bold" }}>Sản phẩm</Text>
      <div style={{ textAlign: "right", marginBottom: "20px" }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={showModal}
          style={{
            backgroundColor: isHovered ? hoverColor : primaryColor,
            borderColor: "transparent",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Add Product
        </Button>
      </div>
      <Table columns={columns} dataSource={data} loading={loading} rowKey="_id" />

      <Modal
        title={editingRecord ? "Edit Product" : "Add Product"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={
            editingRecord
              ? {
                  productName: editingRecord.name,
                  productDescription: editingRecord.description,
                  productPrice: editingRecord.price,
                  productDiscountPrice: editingRecord.discountPrice,
                  productBrand: editingRecord.brand?._id,
                  productCategory: editingRecord.category?._id,
                  productStock: editingRecord.stock,
                }
              : {}
          }
        >
          <Form.Item
            label="Product Name"
            name="productName"
            rules={[{ required: true, message: "Please enter the product name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="productDescription"
            rules={[{ required: true, message: "Please enter the product description" }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Price"
            name="productPrice"
            rules={[{ required: true, message: "Please enter the product price" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item label="Discount Price" name="productDiscountPrice">
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Brand"
            name="productBrand"
            rules={[{ required: true, message: "Please select a brand" }]}
          >
            <Select>
              {brands.map((brand) => (
                <Select.Option key={brand._id} value={brand._id}>
                  {brand.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Category"
            name="productCategory"
            rules={[{ required: true, message: "Please select a category" }]}
          >
            <Select>
              {categories.map((category) => (
                <Select.Option key={category._id} value={category._id}>
                  {category.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Stock"
            name="productStock"
            rules={[{ required: true, message: "Please enter the stock quantity" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item label="Images">
            <Upload
              listType="picture-card"
              multiple
              beforeUpload={() => false}
              onChange={handleImageChange}
            >
              + Upload
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingRecord ? "Update Product" : "Add Product"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminProductPage;
