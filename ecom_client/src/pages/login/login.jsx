import React, { Component } from "react";
import { Form, Input, Icon, Button, message } from "antd";
import { withRouter } from "../../withRouter";
import { reqLogin } from "../../api";
import "./login.less";
import logo from "../../assets/images/logo.png";

class Login extends Component {
  onFinish = async (values) => {
    if (values) {
      const { username, password } = values;
      console.log(
        `Submit ajax request, username ${username}, password ${password}`
      );
      reqLogin(username, password)
        .then((response) => {
          if (response.data.status === 0) {
            message.success("Login successful");
            console.log("Login successful", response.data);
            this.props.navigate("/");
          } else {
            message.error(
              "Login failed, please enter the correct username and password"
            );
          }
        })
        .catch((err) => {
          message.error(err.message);
        });
    } else {
      console.log("Validation failed");
      alert("Username and password cannot be null!");
    }
  };

  render() {
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>Ecommerce Background Management System</h1>
        </header>

        <section className="login-content">
          <h3>User login</h3>
          <Form onFinish={this.onFinish} className="login-form">
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Please input your username!",
                },
                { min: 4, message: "Minimum 4 digits for username" },
                { max: 12, message: "Maximum 12 digits for username" },
                {
                  pattern: /^[a-zA-Z0-9_]+$/,
                  message:
                    "Must be constituted of letters, numbers, or underline",
                },
              ]}
            >
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Please input your password!",
                },
                { min: 4, message: "Minimum 4 digits for password" },
                { max: 12, message: "Maximum 12 digits for password" },
                {
                  pattern: /^[a-zA-Z0-9_]+$/,
                  message:
                    "Must be constituted of letters, numbers, or underline",
                },
              ]}
            >
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}

export default withRouter(Login);
