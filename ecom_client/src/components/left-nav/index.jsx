import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreAddOutlined,
  TagsOutlined,
  PieChartOutlined,
  UserOutlined,
  IdcardOutlined,
  ShopOutlined,
} from "@ant-design/icons";

import logo from "../../assets/images/logo.png";
import "../left-nav/index.less";

const { SubMenu } = Menu;

export default class LeftNav extends Component {
  render() {
    return (
      <div>
        <div className="left-nav">
          <Link to="/" className="left-nav-header">
            <img src={logo} alt="company" />
            <h1>Background Management</h1>
          </Link>
        </div>

        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/home">Home</Link>
          </Menu.Item>

          <SubMenu key="sub1" icon={<ShopOutlined />} title="Products">
            <Menu.Item key="5" icon={<AppstoreAddOutlined />}>
              <Link to="/category">Category</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<TagsOutlined />}>
              <Link to="/product">Product</Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/user">User</Link>
          </Menu.Item>

          <Menu.Item key="3" icon={<IdcardOutlined />}>
            <Link to="/role">Role</Link>
          </Menu.Item>

          <Menu.Item key="4" icon={<PieChartOutlined />}>
            <Link to="/charts">Charts</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
