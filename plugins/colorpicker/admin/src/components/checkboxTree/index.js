import React from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import { nodes } from "./data";

const Title = styled.h5`
  margin-bottom: 1rem;
  color: #333740;
`;

const FontAWS = styled.span`
  font-family: "Font Awesome 5 Free" !important;
  font-weight: 900 !important;
  content: "\f007";
`;
const FontAWS2 = styled.span`
  &:before {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f007";
  }
`;

class CheckBoxTree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: [],
      expanded: [],
    };
  }

  render() {
    return (
      <div>
        <Title>Checkbox Tree U+02191 &#8593; &uarr; \2191</Title>
        {/* <FontAWS>&#61447; &#xf007; &#xf1ea; </FontAWS> */}
        {/* <FontAWS>{"&#61447; &#xf007; &#xf1ea; uf007 "}</FontAWS> */}
        {/* <FontAWS>{`String${String.fromCharCode(61447)}String`}</FontAWS> */}
        {/* <FontAWS>{"U \u00f3 \uf007 U"}</FontAWS> */}
        E<FontAWS2 />E{/* <FontAwesomeIcon icon={["fal", "coffee"]} /> */}
        <FontAwesomeIcon icon={faCoffee} />
        <CheckboxTree
          nodes={nodes}
          checked={this.state.checked}
          expanded={this.state.expanded}
          onCheck={(checked) => this.setState({ checked })}
          onExpand={(expanded) => this.setState({ expanded })}
        />
      </div>
    );
  }
}

export default CheckBoxTree;
