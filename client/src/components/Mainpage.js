import React, { Fragment } from "react";
import Input from "./Input.js";
import List from "./List.js";

import Header from "./Header";

const Mainpage = () => {
  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <Input />
          <List />
        </div>
      </div>
    </>
  );
};

export default Mainpage;
