import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
import "antd/dist/antd.css";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Admin />} history={this.props.history} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
