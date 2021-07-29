import React from "react";
import { Row, Col, Form, Select, Input } from "antd";

const { Search } = Input;
const { Option } = Select;

const OrderFilter = ({ onChange }) => {
  return (
    <Form layout={"horizontal"}>
      <Row>
        <Col sm={24} md={{ span: 6 }}>
          <Form.Item>
            <Search
              placeholder="Search Customer"
              allowClear
              onSearch={(value) => onChange(value.toString(), "customer")}
              
            />
          </Form.Item>
        </Col>
        <Col sm={8} md={{ span: 5, offset: 1 }}>
          <Form.Item label="SortBy">
            <Select
              defaultValue="id"
              style={{ width: 120 }}
              onChange={(value) => onChange(value, "sortBy")}
              placeholder="Select SortBy"
            >
              <Option value="id">Id</Option>
              <Option value="customer">Customer</Option>
              <Option value="status">Status</Option>
              <Option value="date">Date</Option>
              <Option value="totalAmounts">Total</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col sm={8} md={{ span: 5, offset: 0 }}>
          <Form.Item label="OrderBy">
            <Select
              defaultValue={0}
              style={{ width: 120 }}
              onChange={(value) => onChange(value, "orderBy")}
              placeholder="Select OrderBy"
            >
              <Option value={0}>---</Option>
              <Option value={1}>Ascending</Option>
              <Option value={2}>Descending</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col sm={8} md={{ span: 7, offset: 0 }}>
          <Form.Item label="Status">
            <Select
              defaultValue={null}
              style={{ width: 120 }}
              onChange={(value) => onChange(value, "status")}
              placeholder="Select Status"
            >
              <Option value={null}>---</Option>
              <Option value={"Pending"}>Pending</Option>
              <Option value={"Completed"}>Completed</Option>
              <Option value={"Rejected"}>Rejected</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default OrderFilter;
