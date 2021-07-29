import React from "react";
import { Pagination, Button } from "antd";

const itemRender = (current, type, originalElement) => {
    if (type === "prev") return <Button>Previous</Button>;
    if (type === "next") return <Button>Next</Button>;
    return originalElement;
  };

export const CustomPagination = ({total, onChange}) => {
  return (
    <Pagination
      defaultCurrent={1}
      total={total  * 10}
      itemRender={itemRender}
      onChange={onChange}
    />
  );
};


