import React, { Component } from "react";
import { Layout } from "antd";
import LeftNav from "../../components/left-nav";
import Header from "../../components/header";
const { Footer, Sider, Content } = Layout;

class Admin extends Component {
  render() {
    return (
      <Layout style={{ height: "100%" }}>
        <Sider>
          <LeftNav />
        </Sider>

        <Layout>
          <Header>Header</Header>
          <Content style={{ backgroundColor: "#fff" }}>Content</Content>
          <Footer style={{ textAlign: "center", color: "#cccccc" }}>
            Made with ❤
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;
