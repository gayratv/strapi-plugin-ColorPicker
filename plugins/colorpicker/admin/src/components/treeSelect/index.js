// import "../assets/index.less";
import "rc-tree-select/assets/index.less";
import "./tree.css";
import React from "react";
import TreeSelect, { SHOW_PARENT } from "rc-tree-select";
import { gData } from "./dataUtil";
import { simpleTreeDataInitial } from "./data";
import { fetchTreeData } from "./fetch";

console.log("TreeData:", gData);

// export interface SimpleModeConfig {
//   id?: Key;
//   pId?: Key;
//   rootPId?: Key;
// }
// treeDataSimpleMode: {
//   id: "key",
//     rootPId: 0,
// },

// определение управляющих структур дерева
const treeDataSimpleMode = {
  id: "key",
  rootPId: 0,
};

class TreeCheckbox extends React.Component {
  state = {
    // value: "11",

    simpleTreeData: simpleTreeDataInitial,
  };

  onChange = (value) => {
    if (value.length === 1) {
      // return;
    }
    // console.log("onChange", value, this.simpleTreeData);
    console.log("onChange", value);
    this.setState({ value });
  };

  onSelect = () => {
    // use onChange instead
    // console.log(arguments);
  };

  onDataChange = () => {
    const { simpleTreeData } = this.state;
    const data = simpleTreeData.slice();
    data.forEach((i) => {
      if (i.key === 11) {
        // eslint-disable-next-line no-param-reassign
        delete i.disabled;
      }
      if (i.key === 20) {
        // eslint-disable-next-line no-param-reassign
        i.disabled = true;
      }
    });
    this.setState({ simpleTreeData: data });
  };

  // treeNodeFilterProp	which prop value of treeNode will be used for filter if filterTreeNode return true	String
  // значение по умолчанию = 'value',

  render() {
    const { value, simpleTreeData } = this.state;
    return (
      <div style={{ margin: 20 }}>
        <h2>use treeDataSimpleMode</h2>
        <TreeSelect
          style={{ width: 300 }}
          dropdownStyle={{ maxHeight: 200, overflow: "auto" }}
          placeholder={<i>Нажмите для выбора</i>}
          treeLine
          notFoundContent="Не найдено"
          allowClear
          maxTagTextLength={25}
          maxTagCount={10}
          multiple
          inputValue={null}
          value={value}
          treeData={simpleTreeData}
          treeDataSimpleMode={treeDataSimpleMode}
          treeDefaultExpandAll
          treeNodeFilterProp="title"
          treeCheckable
          showCheckedStrategy={SHOW_PARENT}
          onChange={this.onChange}
          onSelect={this.onSelect}
          autoClearSearchValue

          // treeIcon	show tree icon	bool	false
        />
        <button type="button" onClick={this.onDataChange}>
          change data
        </button>
      </div>
    );
  }
}

export default TreeCheckbox;
