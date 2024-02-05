import React from 'react';
import TreeView from './TreeView';
import { ParsedTreeData } from './TreeUtils'; 

interface HierarchicalTreeViewProps {
  treeData: ParsedTreeData;
}

const HierarchicalTreeView: React.FC<HierarchicalTreeViewProps> = ({ treeData }) => {
  const parsedData = treeData;

  return <TreeView data={parsedData} />;
};

export default HierarchicalTreeView;
