// import "../assets/index.less";
import "rc-tree-select/assets/index.less";
import "./tree.css";
import React, { useState } from "react";
import TreeSelect, { SHOW_PARENT } from "rc-tree-select";
import useDataManager from "strapi-plugin-content-manager/admin/src/hooks/useDataManager";
import { useSelector } from "react-redux";
import { gData } from "./dataUtil";
import { simpleTreeDataInitial } from "./data";

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

const TreeCheckbox = (props) => {
  const [state, setState] = useState({
    value: [],
    simpleTreeData: simpleTreeDataInitial,
  });
  const dataManager = useDataManager();
  // result undefined
  console.log("TreeCheckbox constructor dataManager : ", dataManager);

  // const data2 = useSelector((state) => state["content-manager_main"]);
  const data2 = useSelector((state) => state);
  console.log("useSelector : ", data2);

  console.log("TreeCheckbox props label : ", props.label, props.gayrat);

  const onChange = (value) => {
    if (value.length === 1) {
      // return;
    }
    // console.log("onChange", value, this.simpleTreeData);
    console.log("onChange", value);
    setState({ value });
  };

  const onSelect = () => {
    // use onChange instead
    // console.log(arguments);
  };

  const onDataChange = () => {
    const { simpleTreeData } = state;
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
    setState({ simpleTreeData: data });
  };

  // treeNodeFilterProp	which prop value of treeNode will be used for filter if filterTreeNode return true	String
  // значение по умолчанию = 'value',
  const { value, simpleTreeData } = state;
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
        onChange={onChange}
        onSelect={onSelect}
        autoClearSearchValue

        // treeIcon	show tree icon	bool	false
      />
      <button type="button" onClick={onDataChange}>
        change data
      </button>
    </div>
  );
};

export default TreeCheckbox;
