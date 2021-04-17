// treeDataSimpleMode	enable simple mode of treeData.
// (treeData should be like this:
// [{id:1, pId:0, value:'1', label:"test1",...},...],
// pId is parent node's id)	bool/object{id:'id', pId:'pId', rootPId:null}

/* TreeNode props
note: you'd better to use treeData instead of using TreeNode.

name	description	type	default
disabled	disable treeNode	bool	false
key	it's value must be unique across the tree's all TreeNode, you must set it	String	-
value	default as treeNodeFilterProp (be unique across the tree's all TreeNode)	String	''
title	tree/subTree's title	String/element	'---'
isLeaf	whether it's leaf node	bool	false */

export const simpleTreeDataInitial = [
  { key: 1, pId: 0, label: "initial Tree a", value: "1" },
  { key: 11, pId: 1, label: "initial Tree a12", value: "2", disabled: true },
  {
    key: 12,
    pId: 11,
    label: "initial Tree a00",
    value: "3",
    selectable: false,
  },
  {
    key: 2,
    pId: 0,
    label: "initial Tree b",
    value: "4",
    selectable: false,
    disabled: true,
  },
  { key: 20, pId: 2, label: "initial Tree b10", value: "5" },
  { key: 21, pId: 2, label: "initial Tree b1", value: "6" },
  { key: 22, pId: 2, label: "initial Tree b12", value: "7" },
  { key: 30, pId: 0, label: "дерево 3", value: "8" },
  { key: 31, pId: 30, label: "дерево 31", value: "31" },
  { key: 32, pId: 30, label: "дерево 32", value: "32" },
];

// console.log(JSON.stringify(simpleTreeDataInitial));

// treeNodes data Array, if set it then you need not to construct children TreeNode.
// (value should be unique across the whole array)
// array<{value,label,children, [disabled,selectable]}>

export const dataTree = [
  {
    label: "0-0-label",
    value: "0-0-value",
    key: "0-0",
    disabled: false,
    children: [
      {
        label: "0-0-0-label",
        value: "0-0-0-value",
        key: "0-0-0",
        disabled: false,
        children: [
          {
            label: "0-0-0-0-label",
            value: "0-0-0-0-value",
            key: "0-0-0-0",
            disabled: false,
          },
          {
            label: "0-0-0-1-label",
            value: "0-0-0-1-value",
            key: "0-0-0-1",
            disabled: true,
          },
          {
            label: "0-0-0-2-label",
            value: "0-0-0-2-value",
            key: "0-0-0-2",
            disabled: false,
          },
        ],
      },
      {
        label: "0-0-1-label",
        value: "0-0-1-value",
        key: "0-0-1",
        disabled: false,
        children: [
          {
            label: "0-0-1-0-label",
            value: "0-0-1-0-value",
            key: "0-0-1-0",
            disabled: false,
          },
          {
            label: "0-0-1-1-label",
            value: "0-0-1-1-value",
            key: "0-0-1-1",
            disabled: false,
          },
          {
            label: "0-0-1-2-label",
            value: "0-0-1-2-value",
            key: "0-0-1-2",
            disabled: false,
          },
        ],
      },
      {
        label: "0-0-2-label",
        value: "0-0-2-value",
        key: "0-0-2",
        disabled: false,
      },
    ],
  },
  {
    label: "0-1-label",
    value: "0-1-value",
    key: "0-1",
    disabled: false,
    children: [
      {
        label: "0-1-0-label",
        value: "0-1-0-value",
        key: "0-1-0",
        disabled: false,
        children: [
          {
            label: "0-1-0-0-label",
            value: "0-1-0-0-value",
            key: "0-1-0-0",
            disabled: false,
          },
          {
            label: "0-1-0-1-label",
            value: "0-1-0-1-value",
            key: "0-1-0-1",
            disabled: false,
          },
          {
            label: "0-1-0-2-label",
            value: "0-1-0-2-value",
            key: "0-1-0-2",
            disabled: false,
          },
        ],
      },
      {
        label: "0-1-1-label",
        value: "0-1-1-value",
        key: "0-1-1",
        disabled: false,
        children: [
          {
            label: "0-1-1-0-label",
            value: "0-1-1-0-value",
            key: "0-1-1-0",
            disabled: false,
          },
          {
            label: "0-1-1-1-label",
            value: "0-1-1-1-value",
            key: "0-1-1-1",
            disabled: false,
          },
          {
            label: "0-1-1-2-label",
            value: "0-1-1-2-value",
            key: "0-1-1-2",
            disabled: false,
          },
        ],
      },
      {
        label: "0-1-2-label",
        value: "0-1-2-value",
        key: "0-1-2",
        disabled: false,
      },
    ],
  },
  {
    label: "0-2-label",
    value: "0-2-value",
    key: "0-2",
    disabled: false,
  },
];
