import React, {useState, useEffect} from "react";
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Typography,
  Collapse,
  message,
  Select,
  Radio
} from "antd";
import { useParams } from 'react-router-dom';
import axios from "axios";
import {MenuOutlined} from "@ant-design/icons"
import ProductBoxComponent from "../../components/ProductBoxComponent/ProductBoxComponent";

const { Content, Sider } = Layout;
const { Option } = Select;
const { Text } = Typography;
const { Panel } = Collapse;
const whiteColor = "#ffffff";
const brands = [
  { id: "Apple", name: "Apple", imageUrl: "Apple.png" },
  { id: "Samsung", name: "Samsung", imageUrl: "Samsung.png" },
  { id: "OPPO", name: "OPPO", imageUrl: "OPPO.png" },
  { id: "Xiaomi", name: "Xiaomi", imageUrl: "Xiaomi.png" },
  { id: "Honor", name: "Honor", imageUrl: "Honor.png" },
  { id: "Realme", name: "Realme", imageUrl: "Realme.png" },
  { id: "Tecno", name: "Tecno", imageUrl: "Tecno.png" },
  { id: "Benco", name: "Benco", imageUrl: "Benco.png" },
  { id: "ZTE", name: "ZTE", imageUrl: "ZTE.png" },
  { id: "Inoi", name: "Inoi", imageUrl: "Inoi.png" },
  { id: "TCL", name: "TCL", imageUrl: "TCL.png" },
  { id: "Nokia", name: "Nokia", imageUrl: "Nokia.png" },
  { id: "Masstel", name: "Masstel", imageUrl: "Masstel.png" },
  { id: "Viettel", name: "Viettel", imageUrl: "Viettel.png" },
  { id: "Mobell", name: "Mobell", imageUrl: "Mobell.jpg" },
  { id: "Itel", name: "Itel", imageUrl: "Itel.png" },
  { id: "Vivo", name: "Vivo", imageUrl: "Vivo.png" },
];
const priceOptions = [
  { label: 'Tất cả', value: 'all' },
  { label: 'Dưới 2 triệu', value: 'under2' },
  { label: 'Từ 2 - 4 triệu', value: '2to4' },
  { label: 'Từ 4 - 7 triệu', value: '4to7' },
  { label: 'Từ 7 - 13 triệu', value: '7to13' },
  { label: 'Từ 13 - 20 triệu', value: '13to20' },
  { label: 'Trên 20 triệu', value: 'above20' },
];
const operatingSystemOptions = [
  { label: 'Tất cả', value: 'all' },
  { label: 'IOS', value: 'IOS' },
  { label: 'Android', value: 'Android' },
];
const pinOptions = [
  { label: 'Tất cả', value: 'all' },
  { label: 'Dưới 3000 mah', value: '3000mah' },
  { label: 'Pin từ 3000 - 4000 mah', value: '3000to4000mah' },
  { label: 'Pin từ 4000 - 5000 mah', value: '4000to5000mah' },
  { label: 'Siêu trâu: trên 5000 mah', value: '5000mah' },
];
const cameraOptions = [
  { label: 'Tất cả', value: 'all' },
  { label: 'Quay phim Slow Motion', value: 'Quay phim Slow Motion' },
  { label: 'AI Camera', value: 'AI Camera' },
  { label: 'Hiệu ứng làm đẹp', value: 'Hiệu ứng làm đẹp' },
  { label: 'Zoom quang học', value: 'Zoom quang học' },
  { label: 'Chống rung OIS', value: 'Chống rung OIS' },
  { label: 'Chụp macro', value: 'Chụp macro' },
  { label: 'Chụp góc rộng', value: 'Chụp góc rộng' },
];
const screenOptions = [
  { label: 'Tất cả', value: 'all' },
  { label: 'Màn hình nhỏ', value: 'Màn hình nhỏ' },
  { label: 'Dưới 5.0 inch', value: 'Dưới 5.0 inch' },
  { label: 'Trên 6.0 inch', value: 'Trên 6.0 inch' },
];
const wifiOptions = [
  { label: 'Tất cả', value: 'all' },
  { label: '5G', value: '5G' },
  { label: '4G', value: '4G' },
  { label: '3G', value: '3G' },
];
const connectOptions = [
  { label: 'Tất cả', value: 'all' },
  { label: 'NFC', value: 'NFC' },
  { label: 'Bluetooth', value: 'Bluetooth' },
  { label: 'Hồng ngoại', value: 'Hồng ngoại' },
];

const ProductPage = () => {
  const { category } = useParams();
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [data, setData] = useState([]);
  const [brandData, setBrandData] = useState([]);
  
  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/category/plug/${category}`);
        setData(response.data.products);
        // console.log(response.data.products)
      } catch (err) {
        message.error("Failed to load products");
      }
    };

    if (category) {
      fetchProductsByCategory();
    }
  }, [category]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/brand/');
        const data = response.data;
        const updatedBrandData = data.map((brand) => {
          const matchedBrand = brands.find((b) => b.name === brand.name);
          return matchedBrand ? { ...brand, imageUrl: matchedBrand.imageUrl } : null;
        });
        const filteredBrandData = updatedBrandData.filter((brand) => brand !== null);
        setBrandData(filteredBrandData);
      } catch (err) {
        // setError(err.message);
        message.error('Failed to load brands');
      }
    };

    fetchData();
  }, []);
  const filteredProducts = selectedBrand
    ? data.filter(product => product.brand.name === selectedBrand)
    : data;
  return (
    <Content style={{ padding: "0 60px" , backgroundColor:whiteColor}}>
      <Breadcrumb style={{ margin: "16px 0", padding: "0 70px" }}>
        <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item>Điện thoại</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ marginTop: 50,marginLeft:50, marginRight:50,backgroundColor:whiteColor }}>
        <Row style={{ backgroundColor: whiteColor }}>
          {category == "dien-thoai" && (
            <Row style={{ display: "flex", gap: 10 }}>
            {brandData.map((brand) => (
              <div
                key={brand.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  width:"230px",
                  cursor:'pointer',
                  borderRadius:10,
                  padding: "10px 10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
                onClick={() => setSelectedBrand(brand.name)}
              >
                <img
                  src={require(`../../images/brands/${brand.imageUrl}`)}
                  alt={brand.name}
                  style={{ height: 60 }}
                />
                <Text style={{ fontSize: 14, width:100 }}>{brand.name}</Text>
              </div>
            ))}
          </Row>
          )}
        </Row>
        <Row style={{backgroundColor:whiteColor, marginTop:50, marginBottom:50, display:'flex',justifyContent:"space-between"}}>
          <Col span={5}>
            <div style={{boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",padding: "10px 0px",borderRadius:10,}}>
              <div style={{display:'flex', gap:10, padding:'10px 20px'}}>
                <MenuOutlined/>
                <Text style={{fontSize:18,fontWeight:'bold'}}>Bộ lọc tìm kiếm</Text>
              </div>
              <div style={{borderTop:'1px solid #E0E0E0'}}>
              <Collapse defaultActiveKey={['1']} ghost>
                <Panel
                  header={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{fontWeight:'bold'}}>Mức giá</span>
                    </div>
                  }
                  key="1"
                  collapsible="header"
                >
                  <Radio.Group>
                    {priceOptions.map(option => (
                      <Radio key={option.value} value={option.value} style={{ display: 'block', margin: '0px 0', fontWeight:'400', fontSize:14 }}>
                        {option.label}
                      </Radio>
                    ))}
                  </Radio.Group>
                </Panel>
              </Collapse>
              </div>
              <div style={{borderTop:'1px solid #E0E0E0'}}>
              <Collapse defaultActiveKey={['1']} ghost>
                <Panel
                  header={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{fontWeight:'bold'}}>Hệ điều hành</span>
                    </div>
                  }
                  key="1"
                  collapsible="header"
                >
                  <Radio.Group>
                    {operatingSystemOptions.map(option => (
                      <Radio key={option.value} value={option.value} style={{ display: 'block', margin: '0px 0', fontWeight:'400',fontSize:14 }}>
                        {option.label}
                      </Radio>
                    ))}
                  </Radio.Group>
                </Panel>
              </Collapse>
              </div>
              <div style={{borderTop:'1px solid #E0E0E0'}}>
              <Collapse defaultActiveKey={['1']} ghost>
                <Panel
                  header={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{fontWeight:'bold'}}>Hiệu năng và Pin</span>
                    </div>
                  }
                  key="1"
                  collapsible="header"
                >
                  <Radio.Group>
                    {pinOptions.map(option => (
                      <Radio key={option.value} value={option.value} style={{ display: 'block', margin: '0px 0', fontWeight:'400',fontSize:14 }}>
                        {option.label}
                      </Radio>
                    ))}
                  </Radio.Group>
                </Panel>
              </Collapse>
              </div>
              <div style={{borderTop:'1px solid #E0E0E0'}}>
              <Collapse defaultActiveKey={['1']} ghost>
                <Panel
                  header={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{fontWeight:'bold'}}>Camera</span>
                    </div>
                  }
                  key="1"
                  collapsible="header"
                >
                  <Radio.Group>
                    {cameraOptions.map(option => (
                      <Radio key={option.value} value={option.value} style={{ display: 'block', margin: '0px 0', fontWeight:'400',fontSize:14 }}>
                        {option.label}
                      </Radio>
                    ))}
                  </Radio.Group>
                </Panel>
              </Collapse>
              </div>
              <div style={{borderTop:'1px solid #E0E0E0'}}>
              <Collapse defaultActiveKey={['1']} ghost>
                <Panel
                  header={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{fontWeight:'bold'}}>Màn hình</span>
                    </div>
                  }
                  key="1"
                  collapsible="header"
                >
                  <Radio.Group>
                    {screenOptions.map(option => (
                      <Radio key={option.value} value={option.value} style={{ display: 'block', margin: '0px 0', fontWeight:'400',fontSize:14 }}>
                        {option.label}
                      </Radio>
                    ))}
                  </Radio.Group>
                </Panel>
              </Collapse>
              </div>
              <div style={{borderTop:'1px solid #E0E0E0'}}>
              <Collapse defaultActiveKey={['1']} ghost>
                <Panel
                  header={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{fontWeight:'bold'}}>Hỗ trợ mạng</span>
                    </div>
                  }
                  key="1"
                  collapsible="header"
                >
                  <Radio.Group>
                    {wifiOptions.map(option => (
                      <Radio key={option.value} value={option.value} style={{ display: 'block', margin: '0px 0', fontWeight:'400',fontSize:14 }}>
                        {option.label}
                      </Radio>
                    ))}
                  </Radio.Group>
                </Panel>
              </Collapse>
              </div>
              <div style={{borderTop:'1px solid #E0E0E0'}}>
              <Collapse defaultActiveKey={['1']} ghost>
                <Panel
                  header={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{fontWeight:'bold'}}>Kết nối</span>
                    </div>
                  }
                  key="1"
                  collapsible="header"
                >
                  <Radio.Group>
                    {connectOptions.map(option => (
                      <Radio key={option.value} value={option.value} style={{ display: 'block', margin: '0px 0', fontWeight:'400',fontSize:14 }}>
                        {option.label}
                      </Radio>
                    ))}
                  </Radio.Group>
                </Panel>
              </Collapse>
              </div>
            </div>
          </Col>
          <Col span={18}>
            <div style={{boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",padding: "15px 20px",borderRadius:10,display:'flex', gap:10, alignItems:'center'}}>
              <Text style={{fontSize:16}}>Lọc nhanh:</Text>
              <Select
                placeholder="Chọn thương hiệu"
                value={selectedBrand}
                onChange={setSelectedBrand}
                style={{ width: '170px' }}
              >
                {brands.map((brand) => (
                  <Option key={brand.id} value={brand.id}>
                    {brand.name}
                  </Option>
                ))}
              </Select>
            </div>
            <Row>
              <div style={{display:'flex', justifyItems:'center', marginTop:20,marginLeft: 0,marginRight: 0, gap:10, padding:'0 0px', flexWrap: 'wrap'}}>
              {filteredProducts.map((product) => (
                <ProductBoxComponent key={product._id} product={product} />
              ))}
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default ProductPage;
