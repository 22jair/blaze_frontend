import React, { useState, useEffect, useContext } from "react";
import { Typography, Button, Row, Col, Table, Space } from "antd";
import { CustomPagination } from "./../../components/CustomPagination";
import { Link, useHistory } from "react-router-dom";
import {
  paginateParamsInitialValues,
  paginateRequestInitialValues,
} from "./../../utils/entity";
import OrderModal from "../../modals/OrderModal";
import OrderFilter from "../../filters/OrderFilter";
import BlazeService from "./../../service/BlazeService";
import OrderContext from "../../context/OrderContext";

const { Title } = Typography;

export default function Order() {

  const history = useHistory();
  const { clearOrder } = useContext(OrderContext);
  const [modalLoading, setModalLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [paginateParams, setPaginateParams] = useState(paginateParamsInitialValues);
  const [paginateRequest, setPaginateRequest] = useState(paginateRequestInitialValues);
  const [modalVisible, setModalVisible] = useState(false);

  const columns = [
    { title: "N°", dataIndex: "orderNumber", key: "orderNumber" },
    { title: "Customer", dataIndex: "customer", key: "customer" },
    { title: "Status", dataIndex: "status", key: "status" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Total", key: "totalAmounts", render: (r) => r.totalAmounts.toFixed(2)  },
    {
      title: "Action",
      key: "action",
      render: (text, order) => (
        <Space size="middle">
          <Link to={`/orders/${order.id}`}>Edit</Link>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    fecthOrdersPaginate();
  }, [paginateParams]); 

  const fecthOrdersPaginate = async () => {
    setTableLoading(true);
    const { pageNumber, pageSize, sortBy, orderBy, customer, status } = paginateParams;
    const paginateUrl = `paginate?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&orderBy=${orderBy}&customer=${customer}&status=${status}`;
    const request = await BlazeService.get("order/" + paginateUrl);
    if (request.status === 200) {
      console.log(request.data.paginate.content);
      setOrders(request.data.paginate.content);
      setPaginateRequest(request.data);
    }
    setTableLoading(false);
  };

  const handleOnChangePaginate = async (page) =>
    setPaginateParams({ ...paginateParams, pageNumber: page - 1 });
  
  const handlePaginateParamsChange = (e, type) =>
    setPaginateParams({ ...paginateParams, [type]: e });

  const handleCancelModal = (bool = false) => {
    clearOrder()
    setModalVisible(false);     
    if(bool)  fecthOrdersPaginate()    
  }
  const handleShowModal = () => {
    setModalVisible(true);
    clearOrder()
  }

  return (
    <>
      <Title level={2}>Orders ({paginateRequest.totalItems}) </Title>     
      <Row>
        <Col sm={24} lg={20}>
          <OrderFilter onChange={handlePaginateParamsChange} />
        </Col>
        <Col sm={24} lg={4}>
          <Button type="primary" block  onClick={() => handleShowModal(false)}>
            Create Order
          </Button>
        </Col>
        <Col span={24} className={"mb-20"}>
          <Table
            loading={tableLoading}
            rowKey="id"
            columns={columns}
            dataSource={orders}
            pagination={false}
          />
        </Col>
        <Col span={24}>
          <Row justify="end">
            <CustomPagination
              total={paginateRequest.paginate.totalPages}
              onChange={handleOnChangePaginate}
            />
          </Row>
        </Col>         
      </Row>
      {/* Modal Create */}
      <OrderModal  modalVisible={modalVisible} modalLoading={modalLoading} handleCancelModal={handleCancelModal}/>
    </>
  );
}
