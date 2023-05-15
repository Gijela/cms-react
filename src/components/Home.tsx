import React, { useState } from "react";
import { Layout, Space } from "antd";

import HomeMenu from "./HomeMenu.tsx";
import BreadCrumb from './Breadcrumb.tsx'
import Option1 from "./Option1.tsx";
import Option2 from "./Option2.tsx";
import Option3 from "./Option3.tsx";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import './Home.scss'

const { Header, Sider, Content } = Layout;

const Home: React.FC = () => {
  const [pathArr, setPathArr] = useState([
    // 给一默认值，当登陆成功的时候，首次进入主页默认面包屑显示这个路径内容
    {
      title: 'NavigationOne', 
    }, 
    {
      title: 'Option1'
    }
  ])
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Sider><HomeMenu pathArr={pathArr} setPathArr={setPathArr} /></Sider>
        <Layout>
          <Header className="header"><BreadCrumb pathArr={pathArr} /></Header>
          <Content>
            <Routes>
              <Route path="/Option1" element={<Option1 />}></Route>
              <Route path="/Option2" element={<Option2 />}></Route>
              <Route path="/Option3" element={<Option3 />}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Space>
  )
};

export default Home;
