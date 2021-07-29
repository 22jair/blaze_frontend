import React, { useContext, useState, useEffect } from "react";
import BlazeService from "../service/BlazeService";
import OrderContext from "../context/OrderContext";
import OrderProductTable from "../tables/OrderProductTable";
import {
  Button,
  Row,
  Col,
  Modal,
  Form,
  Input,
  Select,  
  Descriptions,
  InputNumber,
  message,
} from "antd";


const OrderModal = ({
  modalVisible,
  handleCancelModal  
}) => {
  const { state, removeItem, addItem, addCustomer, saveOrder } =
    useContext(OrderContext);
  const [products, setProducts] = useState([]);
  const [item, setItem] = useState({ product: {}, quantity: 1 });
  const  [modalLoading, setModalLoading] = useState(false)
 
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const request = await BlazeService.get("product/status");
    setProducts(request.data);
  };

  const handleSelect = (value) => {
    const product = products.find((p) => p.id === value);
    setItem({ ...item, product: { ...product } });
  };

  const handleQuantity = (quantity) => setItem({ ...item, quantity });
  const handleAddItem = () => addItem(item);

  const handleSumit = () => {
    
    if (state.customer.length === 0 || state.customer === "")
      return message.error(`Error: Customer is required!`);
    if (state.productOrderList.length <= 0)
      return message.error(`Error: Insert at least one Product`);

    setModalLoading(true)
    saveOrder()
      .then((e) => {
        handleCancelModal(true)        
        message.success(`Success!, Created Order`, 5);
      })
      .catch((err) =>  message.error(`Error: ${err}`))
      .finally( () => setModalLoading(false))          
  };

  return (
    <Modal
      title={"Create Order"}
      visible={modalVisible}
      confirmLoading={modalLoading}
      onCancel={handleCancelModal}
      width={1000}
      footer={null}
    >
      <Row>
        <Col sm={24} lg={15} className={"mb-20"}>
          <Row>
            <Col span={24}>
              <Form.Item label="Customer">
                <Input
                  type="text"
                  onChange={(e) => addCustomer(e.target.value)}
                  value={state.customer}
                />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item label="Product  ">
                <Select
                  showSearch
                  onChange={handleSelect}
                  optionFilterProp="name"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {products.map((p) => (
                    <Select.Option key={p.id} value={p.id}>
                      {p.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={7} offset={1}>
              <Form.Item label="Quantity">
                <InputNumber
                  min={1}
                  max={999}
                  defaultValue={1}
                  onChange={(value) => handleQuantity(value)}
                />
              </Form.Item>
            </Col>
            <Col span={4} offset={1}>
              <Button
                type="primary"
                style={{ width: "100%" }}
                onClick={handleAddItem}
              >
                Add
              </Button>
            </Col>
            <Col span={24}>
              <OrderProductTable onClickDelet={removeItem} dataSource={state.productOrderList}  size="small" />             
            </Col>
          </Row>
        </Col>
        <Col sm={24} lg={8} offset={1} className={"mb-20"}>
          <Descriptions title="Taxes" bordered>
            <Descriptions.Item span={3} label="Sub Total">
              {state.subTotal}
            </Descriptions.Item>
            <Descriptions.Item span={3} label="Taxes">
              <h4 style={{ width: "100%" }}>cityTax: {state.taxes.cityTax}</h4>
              <h4 style={{ width: "100%" }}>
                countryTax: {state.taxes.countryTax}
              </h4>
              <h4 style={{ width: "100%" }}>
                stateTax: {state.taxes.stateTax}
              </h4>
              <h4 style={{ width: "100%" }}>
                federalTax: {state.taxes.federalTax}
              </h4>
            </Descriptions.Item>
            <Descriptions.Item span={3} label="Total Taxes">
              {state.totalTaxes}
            </Descriptions.Item>
            <Descriptions.Item span={3} label="Total">
              {state.totalTaxes + state.subTotal}
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col span={8} offset={8}>
          <Button
            type="primary"
            onClick={handleSumit}
            loading={modalLoading}
            block
          >
            Create Product
          </Button>
        </Col>
      </Row>
    </Modal>
  );
};

export default OrderModal;
