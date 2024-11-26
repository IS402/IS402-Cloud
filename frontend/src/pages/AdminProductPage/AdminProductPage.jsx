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
  Spin,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

const { Text } = Typography;
// const [form] = Form.useForm();
const primaryColor = "#EC3C3C";
const hoverColor = "#f65668";

const AdminProductPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [fileList, setFileList] = useState([]);
  const [images, setImages] = useState([
    { key: '', value: '' }, // Mỗi đối tượng đại diện cho một hình ảnh
  ]);


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products/");
        setData(response.data.products);
      } catch (err) {
        setError(err.message);
        message.error("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/brand/");
        setBrands(response.data);
      } catch (err) {
        setError(err.message);
        message.error("Failed to load brands");
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/category/");
        setCategories(response.data);
      } catch (err) {
        setError(err.message);
        message.error("Failed to load categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
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
  const handleImageChange = (info, index) => {
    const newImages = [...images];
  
    if (info.fileList && info.fileList.length > 0) {
      const file = info.fileList[info.fileList.length - 1]; // Lấy file cuối
      const imageUrl = file.thumbUrl || URL.createObjectURL(file.originFileObj);
  
      // Cập nhật hình ảnh ở vị trí index
      newImages[index] = {
        ...newImages[index],
        value: imageUrl,
      };
    } else {
      // Xóa hình ảnh nếu không có file
      newImages[index] = null;
    }
  
    setImages(newImages);
  };
  
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
        images: values.images || [],
      };
      if (editingRecord) {
        // Chỉnh sửa sản phẩm
        await axios.patch(
          `http://localhost:5000/api/products/${editingRecord._id}`,
          payload
        );
        message.success("Cập nhật sản phẩm thành công!");
      } else {
        // Thêm sản phẩm
        await axios.post("http://localhost:5000/api/products/", payload);
        console.log(values.images)
        message.success("Thêm sản phẩm thành công!");
      }
      handleCancel();
    } catch (error) {
      setErrorMessage(error.response?.data.message || "An error occurred");
    }
  };
  const handleEdit = (record) => {
    setEditingRecord(record);
    setImageUrl(record.image);
    setIsModalVisible(true);
  };
  const confirmDelete = (id) => {
    Modal.confirm({
      title: "Bạn có chắc chắn muốn xóa sản phẩm này?",
      content: "Thao tác này không thể hoàn tác.",
      okText: "Xóa",
      okType: "danger",
      cancelText: "Hủy",
      onOk: () => handleDelete(id), // Gọi hàm xóa khi xác nhận
    });
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      message.success("Xóa danh mục thành công!");

      // Cập nhật lại danh sách sau khi xóa
      setData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      message.error(error.response?.data.message || "Đã xảy ra lỗi khi xóa!");
    }
  };
  const columns = [
    {
      title: "Image",
      dataIndex: "images",
      key: "images",
      render: (_, { images }) => {
        // Kiểm tra nếu mảng images rỗng hoặc không có ảnh
        if (images && images.length > 0) {
          return (
            <img
              src={images[0]} // Lấy ảnh đầu tiên từ mảng images
              alt="Product"
              style={{ width: 50, height: "auto" }}
            />
          );
        } else {
          return <span></span>;
        }
      },
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
      render: (_, { brand }) => {
        if (!brand) return null; // Trường hợp không có brand

        let color = "blue"; // Mặc định là màu xanh
        if (brand.status === "null") {
          color = "volcano"; // Nếu brand có status là 'inactive', thay màu thành đỏ
        }

        return (
          <Tag color={color} key={brand._id}>
            {brand.name.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (_, { category }) => {
        if (!category) return null; // Trường hợp không có brand

        let color = "blue"; // Mặc định là màu xanh
        if (category.status === "null") {
          color = "volcano"; // Nếu brand có status là 'inactive', thay màu thành đỏ
        }

        return (
          <Tag color={color} key={category._id}>
            {category.name.toUpperCase()}
          </Tag>
        );
      },
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
      title: "Status",
      key: "status",
      dataIndex: "status",

      render: (_, { status }) => {
        let color = "green"; // Mặc định là màu xanh
        if (status === "inactive") {
          color = "volcano"; // Nếu status là 'inactive', thay màu thành đỏ
        }

        return (
          <Tag color={color} key={status}>
            {status.toUpperCase()}
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
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sản phẩm</Text>
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
          Thêm sản phẩm
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />;
      <Modal
        title={editingRecord ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null} // You can customize the footer if needed
        destroyOnClose // Optional: destroys the modal when it's closed
      >
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={
            editingRecord
              ? {
                  productName: editingRecord?.name,
                  productDescription: editingRecord?.description,
                }
              : undefined
          }
        >
          <Form.Item
            label="Tên sản phẩm"
            name="productName"
            rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
          >
            <Input placeholder="Nhập tên sản phẩm" />
          </Form.Item>

          <Form.Item
            label="Mô tả sản phẩm"
            name="productDescription"
            rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
          >
            <Input.TextArea placeholder="Nhập mô tả sản phẩm" />
          </Form.Item>

          <Form.Item
            label="Giá"
            name="productPrice"
            rules={[
              { required: true, message: "Vui lòng nhập giá tiền sản phẩm!" },
            ]}
          >
            <Input placeholder="Nhập giá tiền sản phẩm" />
          </Form.Item>

          <Form.Item
            label="Giá đã được giảm"
            name="productDiscountPrice"
            // rules={[{ required: true, message: "Vui lòng nhập giá tiền sản phẩm!" }]}
          >
            <Input placeholder="Nhập giá tiền sản phẩm đã được giảm" />
          </Form.Item>

          <Form.Item
            label="Thương hiệu"
            name="productBrand"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập thương hiệu sản phẩm!",
              },
            ]}
          >
            <Select placeholder="Chọn thương hiệu">
              {brands.map((brand) => (
                <Select.Option key={brand._id} value={brand._id}>
                  {brand.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Danh mục"
            name="productCategory"
            rules={[
              { required: true, message: "Vui lòng nhập danh mục sản phẩm!" },
            ]}
          >
            <Select placeholder="Chọn danh mục">
              {categories.map((category) => (
                <Select.Option key={category._id} value={category._id}>
                  {category.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.List name="productSpecifications">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, fieldKey }) => (
                  <div
                    key={key}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <Form.Item
                      name={[name, "key"]}
                      fieldKey={[fieldKey, "key"]}
                      rules={[
                        { required: true, message: "Nhập tên thông số!" },
                      ]}
                      style={{ flex: 1, marginRight: "8px" }}
                    >
                      <Input placeholder="Tên thông số (e.g., Dung lượng)" />
                    </Form.Item>
                    <Form.Item
                      name={[name, "value"]}
                      fieldKey={[fieldKey, "value"]}
                      rules={[
                        { required: true, message: "Nhập giá trị thông số!" },
                      ]}
                      style={{ flex: 1, marginRight: "8px" }}
                    >
                      <Input placeholder="Giá trị (e.g., 256GB)" />
                    </Form.Item>
                    <button
                      onClick={() => remove(name)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      ❌
                    </button>
                  </div>
                ))}
                <Form.Item>
                  <button
                    type="button"
                    onClick={() => add()}
                    style={{
                      padding: "8px 12px",
                      border: "1px solid #1890ff",
                      background: "#f0f5ff",
                      color: "#1890ff",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    + Thêm thông số
                  </button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item
            label="Tồn kho"
            name="productStock"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập hãng sản xuất sản phẩm!",
              },
            ]}
          >
            <Input placeholder="Nhập hãng sản xuất sản phẩm" />
          </Form.Item>

          <Form.List name="images">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, fieldKey }) => (
                  <div
                    key={key}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <Form.Item
                      name={[name, "key"]}
                      fieldKey={[fieldKey, "key"]}
                      rules={[
                        { required: true, message: "Nhập tên hình ảnh!" },
                      ]}
                      style={{ flex: 1, marginRight: "8px" }}
                    >
                      <Input placeholder="Tên hình ảnh (e.g., Mặt trước)"
                      onChange={(e) => {
                        const newImages = [...images];
                        newImages[name] = {
                          ...newImages[name],
                          key: e.target.value, // Cập nhật key
                        };
                        setImages(newImages);
                      }} />
                    </Form.Item>

                    <Form.Item
                      name={[name, "value"]}
                      fieldKey={[fieldKey, "value"]}
                      rules={[
                        { required: true, message: "Vui lòng chọn hình ảnh!" },
                      ]}
                      style={{ flex: 2, marginRight: "8px" }}
                    >
                      <Upload
                        name="brandImage"
                        listType="picture-card"
                        beforeUpload={(file) => {
                          const newImages = [...images];
                          const imageUrl = URL.createObjectURL(file); // Tạo URL tạm thời
                          newImages[name] = {
                            ...newImages[name],
                            value: imageUrl, // Cập nhật value
                          };
                          setImages(newImages);
                          return false; // Ngăn upload tự động
                        }}
                        showUploadList={false}
                        onChange={(info) => handleImageChange(info, name)} 
                        style={{ width: '100px', height:'50px' }}
                      >
                        + Chọn hình ảnh
                      </Upload>
                    </Form.Item>
                    {images[name]?.value && (
                      <div style={{ textAlign: "center", marginTop: "10px" }}>
                        <img
                          src={images[name].value}
                          alt="brand"
                          style={{ width: "100%", maxWidth: "100px" }}
                        />
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => remove(name)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        marginLeft: "8px",
                      }}
                    >
                      ❌
                    </button>
                  </div>
                ))}

                <Form.Item>
                  <button
                    type="button"
                    onClick={() => add()}
                    style={{
                      padding: "8px 12px",
                      border: "1px solid #1890ff",
                      background: "#f0f5ff",
                      color: "#1890ff",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    + Thêm hình ảnh
                  </button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item style={{ display: "flex", justifyContent: "center" }}>
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

export default AdminProductPage;
