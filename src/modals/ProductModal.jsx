import React from "react";
import {
  Button,
  Row,
  Col,
  Modal,
  Form,
  Input,
  Select,
  Radio,
  InputNumber  
} from "antd";

const validateMessages = {
  required: "${label} it's required!",
};

const isRequired = { required: true };

const ProductModal = ({form, isEdit, modalLoading, modalVisible, handleCancelModal, productInitialValues, fecthProduct}) => {

    return(
        <Modal
        title={isEdit ? "Edit Product" : "Create Product"}
        visible={modalVisible}
        confirmLoading={modalLoading}
        onCancel={handleCancelModal}
        width={400}
        footer={null}
      >
        <Form
          form={form}
          validateMessages={validateMessages}
          initialValues={productInitialValues}
          requiredMark={true}
          onFinish={fecthProduct}
          layout="vertical"
        >
          <Form.Item hidden={true} name="id">
            <Input />
          </Form.Item>
          <Form.Item rules={[isRequired]} name="name" label="Name">
            <Input />
          </Form.Item>
          <Form.Item rules={[isRequired]} name="category" label="Category">
            <Select>
              <Select.Option value="Cookies">Cookies</Select.Option>
              <Select.Option value="Candies">Candies</Select.Option>
              <Select.Option value="Cakes">Cakes</Select.Option>
              <Select.Option value="Desserts">Desserts</Select.Option>
              <Select.Option value="Drinks">Drinks</Select.Option>
            </Select>
          </Form.Item>

          <Row>
            <Col span={12}>
              <Form.Item
                name="unitPrice"
                label="Price $"
                rules={[ isRequired, { type: "number", min: 1, max: 9999, message: "Price must be between $1 and $9999", }]}
              >
                <InputNumber />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item rules={[isRequired]} name="status" label="Status">
                <Radio.Group>
                  <Radio.Button value={true}>Active</Radio.Button>
                  <Radio.Button value={false}>Inactive</Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }} loading={modalLoading} >
              {isEdit ? "Edit" : "Create"} Product
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    )

}

export default ProductModal