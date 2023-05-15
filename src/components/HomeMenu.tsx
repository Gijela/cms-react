import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";

import './HomeMenu.scss'
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Navigation One", "sub1", [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
  ]),

  getItem("Navigation Two", "sub2", [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),

  getItem("Navigation Three", "sub4", [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];

const App: React.FC = () => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState("1");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    // 这里只做了前面三个option的路由匹配
    if (e.key === '1') {
      navigate('/option1')
    } else if (e.key === '2') {
      navigate('/option2')
    } else if (e.key === '3') {
      navigate('/option3')
    }
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        theme="dark"
        onClick={onClick}
        style={{ width: 256 }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
        className="home-menu"
      />
    </>
  );
};

export default App;
