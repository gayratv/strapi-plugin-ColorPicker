import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import DeniReactTreeView from "deni-react-treeview";
import { dataTree } from "./data";

const ReactTreeView = () => {
  return <DeniReactTreeView items={dataTree} />;
};
/*
import "./style1.scss";

const ReactTreeView = () => {
  return (
    <div>
      <h1>Привет</h1>
    </div>
  );
}; */

export default ReactTreeView;
