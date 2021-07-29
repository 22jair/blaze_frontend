import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Row,
  Col,
  Table,
  Form,
  message,
} from "antd";
import { CustomPagination } from './../../components/CustomPagination'
import { paginateParamsInitialValues, paginateRequestInitialValues, productInitialValues } from './../../utils/entity'
import BlazeService from "./../../service/BlazeService";
import ProductModal from "../../modals/ProductModal";
import ProductFilter from "../../filters/ProductFilter";

const { Title } = Typography;

export default function Product() {

  const [form] = Form.useForm();
  const [modalLoading, setModalLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);
  const [productos, setProducts] = useState([]);
  const [paginateParams, setPaginateParams] = useState(paginateParamsInitialValues);
  const [paginateRequest, setPaginateRequest] = useState(paginateRequestInitialValues);
  const [modalVisible, setModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const columns = [
    {
      title: "N°",
      dataIndex: "n",
      render: (text, record) => (productos.indexOf(record) + 1 + (paginateParams.pageNumber * paginateParams.pageSize)),
    },
    { title: "Name", dataIndex: "name" },
    { title: "Category", dataIndex: "category" },
    { title: "Price", dataIndex: "unitPrice" },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => (record.status ? "Active" : "Inactive"),
    },
    {
      title: "Action",
      render: (text, product) => (
        <Button type="link" onClick={() => handleShowModal(product)}>
          Edit
        </Button>
      ),
    },
  ];

  useEffect(() => {
    fecthProductsPaginate();
  }, [paginateParams]); 

  const fecthProductsPaginate = async () => {
    setTableLoading(true);
    // console.log(paginateParams);
    const { pageNumber, pageSize, sortBy, orderBy, category, name } =
      paginateParams;
    const paginateUrl = `paginate?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&orderBy=${orderBy}&category=${category}&name=${name}`;
    const request = await BlazeService.get("product/" + paginateUrl);
    if (request.status === 200) {      
      setProducts(request.data.paginate.content);
      setPaginateRequest(request.data);
    }
    setTableLoading(false);
  };

  const fecthProduct = async (objectProduct) => {
    setModalLoading(true);
    let request = false;
    if (isEdit) {
      request = await BlazeService.put("product", objectProduct).catch((err) => message.error(`Error: ${err}`));
    } else {
      request = await BlazeService.post("product", objectProduct).catch((err) => message.error(`Error: ${err}`));
    }

    if (request) {
      message.success(`Success!, ${isEdit ? "Edited" : "Created"} Product`, 5);
      fecthProductsPaginate();
      handleCancelModal();
    }
    setModalLoading(false);
  };


  const handleShowModal = async (objectProduct) => {
    if (objectProduct) {
      setIsEdit(true);
      form.setFieldsValue(objectProduct);
    } else {
      setIsEdit(false);
    }
    setModalVisible(true);
  };

  const handleCancelModal = () => {
    form.resetFields();
    setModalVisible(false);
  };

  const handleOnChangePaginate = async (page) => setPaginateParams({ ...paginateParams, pageNumber: page - 1 });

  const handlePaginateParamsChange = (e, type) => setPaginateParams({ ...paginateParams, [type]: e });

  return (
    <>
      <Title level={2}>Products ({paginateRequest.totalItems}) </Title>
      <Row>
        <Col sm={24} lg={20}>
          <ProductFilter onChange={handlePaginateParamsChange} />
        </Col>
        <Col sm={24} lg={4}>
          <Button type="primary" block onClick={() => handleShowModal(false)}>
            Create Product
          </Button>
        </Col>        
        <Col span={24} className={"mb-20"}>
          <Table loading={tableLoading} rowKey="id" columns={columns} dataSource={productos} pagination={false}/>
        </Col>
        <Col span={24}>
          <Row justify="end">
            <CustomPagination  total={paginateRequest.paginate.totalPages} onChange={handleOnChangePaginate}/>                       
          </Row>
        </Col>
      </Row>

      {/* Modal Create / Edit */}
      <ProductModal
        form={form}
        isEdit={isEdit}
        modalLoading={modalLoading}
        modalVisible={modalVisible}
        handleCancelModal={handleCancelModal}
        productInitialValues={productInitialValues}
        fecthProduct={fecthProduct}
      />
    </>
  );
}
