import { useState, useEffect, useContext } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import {
  Typography,
  Button,
  Row,
  Col,
  Descriptions,
  Modal,
  message,
  Form,
  Select,
  InputNumber,
} from "antd";
import { orderInitialValues } from "./../../utils/entity";
import BlazeService from "../../service/BlazeService";
import OrderProductTable from "../../tables/OrderProductTable";
import OrderContext from "../../context/OrderContext";
import { QuestionCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;
const initialItem = { product: {}, quantity: 1 };

function OrderProduct() {
  let { id } = useParams();
  const history = useHistory();
  const {
    state,
    setOrder,
    updateStatus,
    deleteItem,
    ServiceAddItem,
    saveOrder,
  } = useContext(OrderContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [isEditItem, setIsEditItem] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [item, setItem] = useState(initialItem);

  useEffect(() => {
    fetchOrder();
    getProducts();
  }, []);

  const fetchOrder = async () => {
    setLoading(true);
    const request = await BlazeService.get("order/" + id);
    if (request.status === 200) {
      if (request.data.productOrderList[0] == null)
        request.data.productOrderList = [];
      setOrder(request.data);
    }
    setLoading(false);
  };

  const getProducts = async () => {
    const request = await BlazeService.get("product/status");
    setProducts(request.data);
  };

  const showModalItem = (item = null) => {
    if (item != null) {
      setItem(item);
      setIsEditItem(true);
    } else {
      setItem(initialItem);
      setIsEditItem(false);
    }
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const confirmOrderStatus = (state) => {
    return Modal.confirm({
      title: `Confirm ${state === "Completed" ? "Complete" : "Recject"} Order?`,
      icon: <QuestionCircleOutlined />,
      okText: "Ok",
      cancelText: "Cancel",
      onOk: () => fetchUpdateOrder(state),
    });
  };

  const confirmDeleteItem = (item) => {
    return Modal.confirm({
      title: `Delete Item ${item.productOrderNumber}?`,
      icon: <QuestionCircleOutlined />,
      okText: "Ok",
      cancelText: "Cancel",
      onOk: () => fetchDeleteItem(item),
    });
  };

  const fetchDeleteItem = (item) => {
    deleteItem(item)
      .then(() => {
        fetchOrder();
        message.success(`Success!, Item Delated`, 5);
      })
      .catch((err) => {
        message.error(`Error!, ${err}`, 5);
      });
  };

  const fetchUpdateOrder = (state) => {
    updateStatus(state)
      .then(() => {
        fetchOrder();
        message.success(`Success!, Order Updated`, 5);
      })
      .catch((err) => {
        message.error(`Error!, ${err}`, 5);
      });
  };

  // Modal Item
  const handleSelect = (value) => {
    const product = products.find((p) => p.id === value);
    setItem({ ...item, product: { ...product } });
  };
  const handleQuantity = (quantity) => setItem({ ...item, quantity });

  const handleFetchItem = () => {
    if (Object.keys(item.product).length === 0)
      return message.error(`Error: Item is required!`);
    if (item.quantity === 0)
      return message.error(`Error: Quantity can't be lees then 0!`);

    isEditItem
      ? saveOrder(true, item)
          .then(() => {
            fetchOrder();
            message.success(`Success!, Item Updated`, 5);
            setIsModalVisible(false);
          })
          .catch((err) => {
            message.error(`Error!, ${err}`, 5);
          })
      : ServiceAddItem(item)
          .then(() => {
            fetchOrder();
            message.success(`Success!, Item Added`, 5);
            setIsModalVisible(false);
          })
          .catch((err) => {
            message.error(`Error!, ${err}`, 5);
          });
  };

  if (loading) return <h1>Loading....</h1>;

  if (error) return <h1>Id not found</h1>;

  console.log(state)

  return (
    <>
      <Row justify={"space-between"}>
        <Title level={2}>Orders N° 1 </Title>
        <Button
          type="primary"
          size={"large"}
          style={{ backgroundColor: "#3f3f3f", border: "1px solid #ccc" }}
          onClick={() => history.push("/orders")}
        >
          Back
        </Button>
      </Row>
      <Row>
        <Descriptions bordered className={"mb-20"}>
          <Descriptions.Item span={3} label="Customer">
            {state.customer}
          </Descriptions.Item>
          <Descriptions.Item span={3} label="Status">
            {state.status}
          </Descriptions.Item>
          <Descriptions.Item span={3} label="Date">
            {state.date}
          </Descriptions.Item>
        </Descriptions>
      </Row>
      <Row>
        <Col span={24}>
          <OrderProductTable
            onClickDelet={confirmDeleteItem}
            onClickEdit={showModalItem}
            isEdit={true}
            dataSource={state.productOrderList}
            className={"mb-20"}
            actions={ state.status === "Pending" ? true : false }
          />
        </Col>
      </Row>
      <Row>
      {state.status === "Pending" && (
        <Col sm={24} md={8} offset={21} className={"mb-20"}>
          <Button type="primary" onClick={() => showModalItem()}>
            Add Item+
          </Button>
        </Col>
      )}
        <Col sm={24} md={8} offset={16} className={"mb-20"}>
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
        {state.status === "Pending" && (
          <Col sm={24} md={8} offset={16} className={"mb-20"}>
            <Row justify={"space-around"}>
              <Button
                style={{ backgroundColor: "#489766", color: "white" }}
                onClick={() => confirmOrderStatus("Completed")}
              >
                Complete Order{" "}
              </Button>
              <Button
                style={{ backgroundColor: "tomato", color: "white" }}
                onClick={() => confirmOrderStatus("Rejected")}
              >
                {" "}
                Reject Order{" "}
              </Button>
            </Row>
          </Col>
        )}
      </Row>

      {/* Edit / Add  */}
      <Modal
        title={isEditItem ? "Edit item" : "Add Item"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
        footer={null}
      >
        <Row>
          <Col span={11}>
            <Form.Item label="Product  ">
              <Select
                showSearch
                onChange={handleSelect}
                value={item.product.name}
                optionFilterProp="name"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {!isEditItem ? (
                  products.map((p) => (
                    <Select.Option key={p.id} value={p.id}>
                      {p.name}
                    </Select.Option>
                  ))
                ) : (
                  <Select.Option key={item.product.id} value={item.product.id}>
                    {item.product.name}
                  </Select.Option>
                )}
              </Select>
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item label="Quantity">
              <InputNumber
                min={1}
                max={999}
                defaultValue={1}
                value={item.quantity}
                onChange={(value) => handleQuantity(value)}
              />
            </Form.Item>
          </Col>
          <Col span={4} offset={1}>
            <Button
              type="primary"
              style={{ width: "100%" }}
              onClick={handleFetchItem}
            >
              {isEditItem ? "Edit" : "Add"}
            </Button>
          </Col>
        </Row>
      </Modal>
    </>
  );
}

export default OrderProduct;
