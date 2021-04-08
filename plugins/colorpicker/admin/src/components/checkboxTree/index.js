import React from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import styled from "styled-components";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import "./fa_font.css";

import { nodes } from "./data";

const Title = styled.h5`
  margin-bottom: 1rem;
  color: #333740;
`;

// eslint-disable-next-line no-unused-vars
const FaWau2 = styled.p.attrs((props) => ({
  className: "fas",
}))`
  &::before {
    content: "\f0f9";
  }
`;
const FaWau = styled.i`
  &::before {
    content: "\f0f9";
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
        <Title>Checkbox Tree </Title>
        <p>
          <span className="react-checkbox-tree rct-icons-fa4">
            H<span className="rct-icon   rct-icon-uncheck" />H
          </span>
        </p>
        E<FaWau2 />E<FaWau className="fas" />
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
