import React from "react";
import { Breadcrumb } from "antd";

const BreadCrumb = ({pathArr}) => (
  <Breadcrumb separator=">" items={pathArr} />
);

export default BreadCrumb;

