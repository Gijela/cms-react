import React from "react";
import { Breadcrumb } from "antd";

const BreadCrumb = ({pathArr}) => {
  return (
    <div className="bread-crumb">
      <Breadcrumb
        separator=">"
        items={pathArr}
      />
    </div>
  )
};

export default BreadCrumb;

