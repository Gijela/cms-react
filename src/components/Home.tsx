import React from "react";
import { Layout, Space } from "antd";

import HomeMenu from "./HomeMenu.tsx";
import Option1 from "./Option1.tsx";
import Option2 from "./Option2.tsx";
import Option3 from "./Option3.tsx";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
    <Layout>
      <Sider><HomeMenu /></Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content>
          <Routes>
            <Route path="/option1" element={<Option1 />}></Route>
            <Route path="/option2" element={<Option2 />}></Route>
            <Route path="/option3" element={<Option3 />}></Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  </Space>
);

export default App;
