import React from "react";
import {
    Row,
    Col,
    Form,
    Select,
    Input
  } from "antd";

  const { Search } = Input;
  const { Option } = Select;

const ProductFilter = ({onChange}) => {

    return (
        <Form layout={"horizontal"}>
        <Row>
          <Col sm={24} md={{ span: 6 }}>
            <Form.Item>
              <Search placeholder="Search Name" allowClear onSearch={(value) => onChange(value.toString(), "name")} />
            </Form.Item>
          </Col>
          <Col sm={8} md={{ span: 5, offset: 1 }}>
            <Form.Item label="SortBy">
              <Select
                defaultValue="id"
                style={{ width: 120 }}
                onChange={(value) =>
                  onChange(value, "sortBy")
                }
                placeholder="Select SortBy"
              >
                <Option value="id">Id</Option>
                <Option value="name">Name</Option>
                <Option value="category">Category</Option>
                <Option value="unitPrice">Price</Option>
                <Option value="status">Status</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col sm={8} md={{ span: 5, offset: 0 }}>
            <Form.Item label="OrderBy" >
              <Select
                defaultValue={0}
                style={{ width: 120 }}
                onChange={(value) =>
                  onChange(value, "orderBy")
                }
                placeholder="Select OrderBy"
              >
                <Option value={0}>---</Option>
                <Option value={1}>Ascending</Option>
                <Option value={2}>Descending</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col sm={8} md={{ span: 7, offset: 0 }}>
            <Form.Item label="Category" >
              <Select
                defaultValue={null}
                style={{ width: 120 }}
                onChange={(value) =>
                  onChange(value, "category")
                }
                placeholder="Select Category"
                
              >
                <Option value={null}>---</Option>
                <Option value="Cookies">Cookies</Option>
                <Option value="Candies">Candies</Option>
                <Option value="Cakes">Cakes</Option>
                <Option value="Desserts">Desserts</Option>
                <Option value="Drinks">Drinks</Option>
              </Select>
            </Form.Item>
          </Col>      
        </Row>
      </Form>
    )

}

export default ProductFilter