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
  getItem("Navigation One", "NavigationOne", [
    getItem("Option 1", "Option1"),
    getItem("Option 2", "Option2"),
    getItem("Option 3", "Option3"),
    getItem("Option 4", "Option4"),
  ]),

  getItem("Navigation Two", "NavigationTwo", [
    getItem("切片上传下载", "Option5"),
    getItem("Option 6", "Option6"),
  ]),

  getItem("Navigation Three", "NavigationThree", [
    getItem("Option 9", "Option9"),
    getItem("Option 10", "Option10"),
    getItem("Option 11", "Option11"),
    getItem("Option 12", "Option12"),
  ]),
];

const App: React.FC = ({pathArr, setPathArr}) => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState("Option1");

  const onClick: MenuProps["onClick"] = (e) => {
    // 根据点击的菜单项，动态跳转到不同的路径，而且通过 pathArr 也可以动态展示面包屑
    pathArr = [] // 每次都清空前面的面包屑存储，否则会叠加
    const tempPathArr = [...pathArr]
    tempPathArr.push({title: e.keyPath[1], href: ''})
    tempPathArr.push({title: `Option${e.keyPath[0]}`, href: ''})
    setPathArr(tempPathArr)
    
    setCurrent(e.key);
    navigate(`/${e.keyPath[1]}/${e.keyPath[0]}`)
  };

  return (
    <>
      <Menu
        theme="dark"
        onClick={onClick}
        style={{ width: 256 }}
        defaultOpenKeys={["NavigationOne"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
        className="home-menu"
      />
    </>
  );
};

export default App;
