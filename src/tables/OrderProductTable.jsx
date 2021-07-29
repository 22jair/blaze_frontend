import React from "react";
import { Button, Table, Space } from "antd";

const OrderProductTable = ({
  onClickDelet = () => {},
  onClickEdit = () => {},
  isEdit = false,
  dataSource = [],
  size = "middle",
  className = "",
  actions = true,
}) => {
  let columns = [
    { title: "N°", dataIndex: "productOrderNumber" },
    { title: "Name", render: (text, item) => item.product.name },
    { title: "Quantity", dataIndex: "quantity" },
    { title: "Unit Price", render: (text, item) => item.product.unitPrice },
    { title: "Cost", dataIndex: "cost" },
  ];

  actions &&
    columns.push({
      title: "Action",
      width: "15%",
      render: (text, item) => (
        <Space size="middle">
          {isEdit ? (
            <Button type="link" onClick={() => onClickEdit(item)}>
              Edit
            </Button>
          ) : (
            ""
          )}
          <Button type="link" onClick={() => onClickDelet(item)}>
            Delete
          </Button>
        </Space>
      ),
    });

  return (
    <Table
      rowKey="productOrderNumber"
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      size={size}
      className={className}
    />
  );
};

export default OrderProductTable;
